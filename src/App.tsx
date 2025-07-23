import { chatWorker } from './workerInstance';

chatWorker.addEventListener('message', (e) => {
    console.log(e.data);
});

const ChatApp = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-4 w-[25rem] mx-auto font-sans">
                <p className="text-center text-2xl font-bold p-1">Live Chat</p>
                <div className="flex flex-col justify-end h-96 border rounded-md bg-black">
                    <div className="overflow-y-auto p-2 text-white space-y-1">
                        [Messages should appear here.]
                    </div>
                </div>
                <div className="flex mt-2 gap-2">
                    <input
                        className="border rounded-md px-2 py-1 w-full"
                        placeholder="Type your message..."
                    />
                    <button className="bg-blue-500 text-white px-4 py-1 rounded-md">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatApp;
