/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dotenv from "dotenv";
import express, { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { WhatsAppWebhookBody } from "./types/webhook.js";
import cors from 'cors';
dotenv.config();
import crypto from "crypto";
import { ChatRouter } from "./routes/chats.route.js";

export const prisma = new PrismaClient();
const app = express();
// Enable CORS for all origins (for dev)
app.use(cors());
app.use(express.json());

const { WEBHOOK_VERIFY_TOKEN, GRAPH_API_TOKEN, PORT } = process.env;


app.use('/wapi',ChatRouter)

app.post("/webhook", async (req: Request<any, any, WhatsAppWebhookBody>, res) => {
    // log incoming messages
    console.log("Incoming webhook message:", JSON.stringify(req.body, null, 2));

    // check if the webhook request contains a message
    // details on WhatsApp text message payload: https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples#text-messages
    const payload = req.body

    for (const entry of payload.entry) {
        // Upsert PhoneNumber
        await prisma.phoneNumbers.upsert({
            where: { id: entry.changes[0].value.metadata.phone_number_id},
            update: {},
            create: {
                id: entry.changes[0].value.metadata.phone_number_id,
                displayPhoneNumber: entry.changes[0].value.metadata.display_phone_number,
            },
        });

        for (const change of entry.changes) {
            const { value } = change;

            // Handle Contacts
            if (value.contacts) {
                for (const contact of value.contacts) {
                    await prisma.contacts.upsert({
                        where: { waId: contact.wa_id },
                        update: { profileName: contact.profile.name },
                        create: {
                            waId: contact.wa_id,
                            profileName: contact.profile.name,
                        },
                    });
                }
            }

            // Handle Messages
            if (change.field === 'messages' && value.messages) {
                for (const message of value.messages) {
                    // Ensure Conversation exists
                    const conversation = await prisma.conversations.upsert({
                        where: {
                            phoneNumberId_contactWaId: {
                                phoneNumberId: value.metadata.phone_number_id,
                                contactWaId: message.from,
                            },
                        },
                        update: {},
                        create: {
                            id: crypto.randomUUID(),
                            phoneNumberId: value.metadata.phone_number_id,
                            contactWaId: message.from,
                        },
                    });

                    // Insert Message
                    await prisma.messages.create({
                        data: {
                            id: message.id,
                            conversationId: conversation.id,
                            phoneNumberId: value.metadata.phone_number_id,
                            contactWaId: message.from,
                            type: message.type,
                            textBody: message.text?.body,
                            mediaId: message.image?.id || message.video?.id || message.document?.id || message.audio?.id,
                            mediaMimeType: message.image?.mime_type || message.video?.mime_type || message.document?.mime_type || message.audio?.mime_type,
                            caption: message.image?.caption || message.video?.caption || message.document?.caption,
                            location: message.location,
                            isFromUs: false,
                            status: 'delivered', // Initial status
                            timestamp: new Date(Number(message.timestamp) * 1000),
                        },
                    });

                    // Update Conversation
                    await prisma.conversations.update({
                        where: { id: conversation.id },
                        data: {
                            lastMessageId: message.id,
                            lastMessageAt: new Date(Number(message.timestamp) * 1000),
                        },
                    });
                }
            }

            // Handle Statuses
            if (change.field === 'statuses' && value.statuses) {
                for (const status of value.statuses) {
                    await prisma.messages.update({
                        where: { id: status.id },
                        data: { status: status.status },
                    });
                }
            }
        }
    }


    res.sendStatus(200);
});

// accepts GET requests at the /webhook endpoint. You need this URL to setup webhook initially.
// info on verification request payload: https://developers.facebook.com/docs/graph-api/webhooks/getting-started#verification-requests
app.get("/webhook", (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    // check the mode and token sent are correct
    if (mode === "subscribe" && token === WEBHOOK_VERIFY_TOKEN) {
        // respond with 200 OK and challenge token from the request
        res.status(200).send(challenge);
        console.log("Webhook verified successfully!");
    } else {
        // respond with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);
    }
});

app.get("/", (req, res) => {
    res.send(`<pre>Nothing to see here.
Checkout README.md to start.</pre>`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
