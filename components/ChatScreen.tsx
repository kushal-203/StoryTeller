import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { continueChat } from '../services/geminiService';
import { SendIcon } from './Icons';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const ChatScreen: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        // Start the conversation with an initial message from the "model"
        const startConversation = async () => {
            const firstMessage = await continueChat("Hii");
            setMessages([{ role: 'model', text: firstMessage }]);
            setIsLoading(false);
        };
        startConversation();
    }, []);

    const handleSend = async (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const responseText = await continueChat(input);
        const modelMessage: Message = { role: 'model', text: responseText };
        setMessages(prev => [...prev, modelMessage]);
        setIsLoading(false);
    };

    return (
        <div className="w-full max-w-2xl h-[70vh] flex flex-col bg-rose-50/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl shadow ${msg.role === 'user' ? 'bg-rose-200 text-gray-800 rounded-br-none' : 'bg-white text-gray-700 rounded-bl-none'}`}>
                           <p className="whitespace-pre-wrap font-sans text-left">{msg.text}</p>
                        </div>
                    </div>
                ))}
                 {isLoading && messages.length > 0 && (
                    <div className="flex justify-start">
                        <div className="max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-2xl shadow bg-white text-gray-700 rounded-bl-none">
                           <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-rose-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-rose-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-rose-300 rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSend} className="p-4 bg-white/50 border-t border-white/30">
                <div className="flex items-center bg-white rounded-full shadow-inner">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Say something sweet..."
                        className="w-full p-3 bg-transparent rounded-full focus:outline-none text-gray-700 font-sans"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !input.trim()} className="p-3 text-rose-500 disabled:text-gray-300 hover:text-rose-600 transition-colors rounded-full">
                        <SendIcon />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatScreen;