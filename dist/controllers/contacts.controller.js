import { prisma } from "../server.js";
// Controller to get contacts sorted by last message time
export const getChatList = async (req, res) => {
    try {
        // Get phoneNumberId from query params or authenticated user (adjust as needed)
        const { phoneNumberId } = req.query;
        if (!phoneNumberId || typeof phoneNumberId !== 'string') {
            return res.status(400).json({ error: 'phoneNumberId is required' });
        }
        // Optional: Pagination parameters
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
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
        const chatList = conversations.map((conv) => ({
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
        res.status(200).json({
            data: chatList,
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        });
    }
    catch (error) {
        console.error('Error fetching chat list:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
