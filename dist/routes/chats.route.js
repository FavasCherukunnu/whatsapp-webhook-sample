import { Router } from "express";
import { getChatList, getMessagesForContact } from "../controllers/chats.controller.js";
const router = Router();
router.get("/get-chat-list", getChatList);
router.get("/get-conversation-by-contact-id", getMessagesForContact);
export { router as ChatRouter };
