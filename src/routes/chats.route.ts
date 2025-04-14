import { Router } from "express";
import { getChatList, getMessagesForContact } from "../controllers/chats.controller.js";


const router = Router();

router.get("/get-chat-list",getChatList as any);
router.get("/get-conversation-by-contact-id",getMessagesForContact as any);

export  {router as ChatRouter};