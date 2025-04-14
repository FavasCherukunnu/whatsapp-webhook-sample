export interface WhatsAppWebhookBody {
    object: string; // Typically "whatsapp_business_account"
    entry: Array<{
        id: string; // WhatsApp Business Account ID
        changes: Array<{
            field: "messages"|"statuses"; // e.g., "messages", "statuses"
            value: {
                messaging_product: "whatsapp"; // e.g., "whatsapp"
                metadata: {
                    display_phone_number: string; // e.g., "15551234567"
                    phone_number_id: string; // ID of the phone number
                };
                contacts?: Array<{
                    profile: {
                        name: string; // Contact's name
                    };
                    wa_id: string; // Contact's WhatsApp ID (phone number)
                }>;
                messages?: Array<{
                    from: string; // Sender's WhatsApp ID (phone number)
                    id: string; // Message ID
                    timestamp: string; // Unix timestamp
                    type: "text"|"image"| "video"| "document"| "audio"| "location"| "contacts"| "button"| "interactive"; // e.g., "text", "image", "video", "document", "audio", "location", "contacts", "button", "interactive"
                    text?: {
                        body: string; // Text message content
                    };
                    image?: {
                        id: string; // Media ID
                        mime_type: string; // e.g., "image/jpeg"
                        sha256: string; // Hash of the media
                        caption?: string; // Optional caption
                    };
                    video?: {
                        id: string;
                        mime_type: string; // e.g., "video/mp4"
                        sha256: string;
                        caption?: string; // Optional caption
                    };
                    document?: {
                        id: string;
                        mime_type: string; // e.g., "application/pdf"
                        sha256: string;
                        filename?: string;
                        caption?: string; // Optional caption
                    };
                    audio?: {
                        id: string;
                        mime_type: string; // e.g., "audio/ogg"
                        sha256: string;
                    };
                    location?: {
                        latitude: number;
                        longitude: number;
                        name?: string;
                        address?: string;
                    };
                    contacts?: Array<{
                        name: {
                            formatted_name: string;
                            first_name?: string;
                            last_name?: string;
                        };
                        phones: Array<{
                            phone: string;
                            wa_id: string;
                        }>;
                    }>;
                    button?: {
                        text: string; // Button text
                        payload: string; // Button payload
                    };
                    interactive?: {
                        type: string; // e.g., "list_reply", "button_reply"
                        list_reply?: {
                            id: string;
                            title: string;
                        };
                        button_reply?: {
                            id: string;
                            title: string;
                        };
                    };
                    context?: {
                        from: string; // Sender of the original message
                        id: string; // Original message ID (for replies)
                        forwarded?: boolean; // If message was forwarded
                        frequently_forwarded?: boolean;
                    };
                    errors?: Array<{
                        code: number;
                        title: string;
                        message: string;
                        error_data?: {
                            details: string;
                        };
                    }>;
                }>;
                statuses?: Array<{
                    id: string; // Message ID
                    status: "sent"|"delivered"|"read"|"failed"; // e.g., "sent", "delivered", "read", "failed"
                    timestamp: string; // Unix timestamp
                    recipient_id: string; // Receiver's WhatsApp ID
                    conversation?: {
                        id: string; // Conversation ID
                        origin: {
                            type: string; // e.g., "business_initiated", "customer_initiated"
                        };
                        expiration_timestamp?: string; // When conversation expires
                    };
                    pricing?: {
                        pricing_model: string; // e.g., "CBP" (Conversation-Based Pricing)
                        billable: boolean;
                        category: string; // e.g., "business_initiated"
                    };
                    errors?: Array<{
                        code: number;
                        title: string;
                        message: string;
                        error_data?: {
                            details: string;
                        };
                    }>;
                }>;
            };
        }>;
    }>;
}