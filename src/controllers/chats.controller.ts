import { NextFunction, Request, Response } from "express";
import { prisma } from "../server.js";

// Interface for cleaner response typing (optional)
interface ChatListResponse {
  waId: string;
  profileName: string | null;
  lastMessageId: string | null;
  lastMessageText: string | null;
  lastMessageAt: string | null; // ISO string for JSON
}



// Controller to get contacts sorted by last message time
export const getChatList = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get phoneNumberId from query params or authenticated user (adjust as needed)
    console.log(req.query)
    const { phoneNumberId } = req.query;
    if (!phoneNumberId || typeof phoneNumberId !== 'string') {
      return res.status(400).json({ error: 'phoneNumberId is required' });
    }

    // Optional: Pagination parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    // Query conversations with contacts and last message
    const conversations = await prisma.conversations.findMany({
      where: {
        phoneNumberId,
      },
      orderBy: {
        lastMessageAt: 'desc', // Sort by most recent message
      },
      skip,
      take: limit,
      include: {
        contact: {
          select: {
            waId: true,
            profileName: true,
          },
        },
        lastMessage: {
          select: {
            id: true,
            textBody: true,
            timestamp: true,
          },
        },
      },
    });

    // Format response
    const chatList: ChatListResponse[] = conversations.map((conv) => ({
      waId: conv.contact.waId,
      profileName: conv.contact.profileName,
      lastMessageId: conv.lastMessageId,
      lastMessageText: conv.lastMessage?.textBody || null,
      lastMessageAt: conv.lastMessageAt?.toISOString() || null,
    }));

    // Optional: Get total count for pagination
    const total = await prisma.conversations.count({
      where: { phoneNumberId },
    });

    return res.status(200).json({
      data: chatList,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching chat list:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};


// Interface for response typing
interface MessageResponse {
  id: string;
  type: string;
  textBody: string | null;
  mediaId: string | null;
  mediaMimeType: string | null;
  mediaUrl: string | null;
  caption: string | null;
  location: { latitude: number; longitude: number; name?: string; address?: string } | null;
  isFromUs: boolean;
  status: string;
  timestamp: string; // ISO string for JSON
}

// Controller to list all messages for a contact
export const getMessagesForContact = async (req: Request, res: Response) => {
  try {
    // Get parameters from query or route params
    const { phoneNumberId, contactWaId } = req.query;
    if (!phoneNumberId || typeof phoneNumberId !== 'string') {
      return res.status(400).json({ error: 'phoneNumberId is required' });
    }
    if (!contactWaId || typeof contactWaId !== 'string') {
      return res.status(400).json({ error: 'contactWaId is required' });
    }

    // Pagination parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 50;
    const skip = (page - 1) * limit;


    // Find the conversation
    const conversation = await prisma.conversations.findUnique({
      where: {
        phoneNumberId_contactWaId: {
          phoneNumberId,
          contactWaId,
        },
      },
    });

    if (!conversation) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    // Query messages for the conversation
    const messages = await prisma.messages.findMany({
      where: {
        conversationId: conversation.id,
      },
      orderBy: {
        timestamp: 'asc', // Oldest first for chat history
      },
      skip,
      take: limit,
      select: {
        id: true,
        type: true,
        textBody: true,
        mediaId: true,
        mediaMimeType: true,
        mediaUrl: true,
        caption: true,
        location: true,
        isFromUs: true,
        status: true,
        timestamp: true,
      },
    });

    // Format response
    const formattedMessages: MessageResponse[] = messages.map((msg) => ({
      id: msg.id,
      type: msg.type,
      textBody: msg.textBody,
      mediaId: msg.mediaId,
      mediaMimeType: msg.mediaMimeType,
      mediaUrl: msg.mediaUrl,
      caption: msg.caption,
      location: msg.location as any,
      isFromUs: msg.isFromUs,
      status: msg.status,
      timestamp: msg.timestamp.toISOString(),
    }));

    // Get total count for pagination
    const total = await prisma.messages.count({
      where: { conversationId: conversation.id },
    });

    // fetch contact info
    const contact = await prisma.contacts.findUnique({
      where: { waId: contactWaId },
    });
    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json({
      data: {
        contact,
        messages: formattedMessages,
      },
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};