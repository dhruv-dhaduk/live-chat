import { ChatMessage } from '@/types';

interface MessageProps {
    msg: ChatMessage;
}

export function Message({ msg }: MessageProps) {
    return (
        <div
            key={msg.id}
            className={`text-sm ${
                msg.isUser ? 'text-green-400 text-right' : 'text-blue-300'
            }`}
        >
            <span className="font-bold">{msg.sender}: </span>
            {msg.content}
        </div>
    );
}
