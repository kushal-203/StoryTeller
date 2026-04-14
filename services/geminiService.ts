import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Theme } from '../types';

const getApiKey = () => process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey: getApiKey() }); // Let it initialize, and fail gracefully on API call if key is empty

// --- Story Generation Service ---

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const generateWithRetry = async (prompt: string, retries = 3): Promise<string> => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    temperature: 0.8,
                    topP: 0.95,
                }
            });
            return response.text;
        } catch (error) {
            const is503 = error instanceof Error && error.message.includes('503');
            if (is503 && i < retries - 1) {
                console.warn(`Gemini API 503 error. Retrying in ${i + 1} seconds...`);
                await sleep((i + 1) * 1000);
                continue;
            }
            throw error;
        }
    }
    throw new Error('Max retries reached');
};

export const generateStory = async (theme: Theme): Promise<string> => {
    const prompt = `
        You are a world-class romantic storyteller, writing from the perspective of a boy deeply in love with his girlfriend.
        Your task is to write a short, creative, whimsical, and heartwarming story imagining your beautiful future together. The story should feel like you are narrating it directly to her.

        Crucially, all stories must be set in a future where you both are finally together, living in the same place. The long distance is a thing of the past.

        The theme for this story is: "${theme}".

        Please adhere to the following rules:
        1. The entire story must be from the first-person perspective ("I"). The narrator is speaking to his girlfriend, who should be addressed as "you".
        2. Do NOT use the names "Kushal" or "Manya".
        3. The tone should be incredibly cute, romantic, and a little bit dreamy.
        4. The story must vividly describe a moment of domestic bliss, adventure, or simple everyday joy, celebrating the fact that "I" and "you" are finally together with no distance between you.
        5. Include adorable, fun, and playful conversations or moments between "I" and "you".
        6. The story must be between 200 and 300 words.
        7. The story must end with a sweet or teasing romantic line from "I" (the narrator) that would make "you" (the girlfriend) smile.
    `;

    try {
        return await generateWithRetry(prompt);
    } catch (error) {
        console.error("Error generating story:", error);
        return "Oops! It seems our storyteller is taking a tiny nap because it's a bit overwhelmed right now. Please give it just a moment and try again, my love! 💕";
    }
};

// --- Chat Service ---

// FIX: Added chat service to support the ChatScreen component.
const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
        systemInstruction: "You are a loving boyfriend having a cute, romantic chat with your girlfriend. Your personality is creative, whimsical, and heartwarming. You are finally living together after a long-distance relationship. Keep your responses relatively short and conversational. Address her as 'you' and be incredibly sweet.",
        temperature: 0.8,
        topP: 0.95,
    },
});

export const continueChat = async (message: string): Promise<string> => {
    try {
        const response: GenerateContentResponse = await chat.sendMessage({ message });
        return response.text;
    } catch (error) {
        console.error("Error in chat:", error);
        if (error instanceof Error) {
            return `My heart's a little jumbled right now. Error: ${error.message}`;
        }
        return "My heart's a little jumbled right now. Please try again in a moment.";
    }
};
