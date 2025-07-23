// src/worker.ts
/// <reference lib="webworker" />
import { ChatMessage } from './types';
import { mockMessages } from './MockData/messages';

let messageIndex = 0;

function getNextMessage(): string {
    const msg = mockMessages[messageIndex % mockMessages.length];
    messageIndex++;
    return msg;
}

function sendMockMessage() {
    const message: ChatMessage = {
        id: crypto.randomUUID(),
        sender: `user${Math.floor(Math.random() * 1000)}`,
        content: getNextMessage(),
        timestamp: Date.now(),
    };

    postMessage(message);
}

const interval = setInterval(sendMockMessage, 2000);

self.addEventListener('message', (event: MessageEvent<ChatMessage>) => {
    const message = event.data;
    postMessage({ ...message, timestamp: Date.now() });
});

self.addEventListener('close', () => {
    clearInterval(interval);
});
