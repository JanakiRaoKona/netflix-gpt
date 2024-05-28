import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from '@google/generative-ai';

// Directly using the constant
const GEMINI_API_KEY = "AIzaSyA4tXqBCyXhZXHinz74xI8FFMgxJDdx8R0";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY); // Pass the API key directly




// Example API key


export const model = genAI.getGenerativeModel({
    model: 'gemini-1.0-pro-001',
});

export const generationConfig = {
    temperature: 0.65,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: 'text/plain',
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];
