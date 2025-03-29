import { GoogleGenerativeAI } from "@google/generative-ai";
import { ApiError } from "./ApiError.js";
import fs from "fs"; // For logging API usage

// Extract multiple API keys from .env
const API_KEYS = process.env.GEMINI_KEY.split(",");
let keyIndex = 0; // Round-robin index

// Function to get the next API key
const getNextKey = () => {
    const selectedKey = API_KEYS[keyIndex];
    keyIndex = (keyIndex + 1) % API_KEYS.length; // Rotate index
    return selectedKey;
};

// Function to log API key usage
const logApiUsage = (apiKey) => {
    const logMessage = `[${new Date().toISOString()}] Used API Key: ${apiKey}\n`;
    console.log(logMessage); // Log in console

    // Append log to a file for tracking
    fs.appendFileSync("api_usage.log", logMessage, "utf8");
};

const askGemini = async (prompt) => {
    if (!prompt) return;

    let attempt = 0;
    while (attempt < API_KEYS.length) {
        const selectedKey = getNextKey(); // Select an API key dynamically
        logApiUsage(selectedKey); // Log the key usage
        const genAI = new GoogleGenerativeAI(selectedKey);
        const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });

        const fullPrompt = `
            ${prompt}.
            Please provide the response in plain text format 
            without any markdown formatting, line breaks, or special characters.
        `;

        try {
            const result = await model.generateContent(fullPrompt);
            if (!result) throw new ApiError(500, "Unable to get AI response");

            const cleanText = result.response.text()
                .replace(/\*\*/g, '')
                .replace(/\n/g, ' ')
                .trim();

            return cleanText;
        } catch (error) {
            console.error(`Gemini API Key ${selectedKey} failed. Error: ${error.message}`);
            attempt++; // Try the next key
        }
    }

    throw new ApiError(500, "All API keys failed. Please check your Gemini API usage.");
};

export default askGemini;
