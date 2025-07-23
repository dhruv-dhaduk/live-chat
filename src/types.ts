// src/types.ts
export interface ChatMessage {
    id: string;
    sender: string;
    content: string;
    timestamp: number;
    isUser?: boolean;
}
