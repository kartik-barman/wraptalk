import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import askGemini from "../utils/askGemini.js";

export const translate = asyncHandler(async (req, res) => {
    const { text, to } = req.body;
    if (!text || !to) {
        return res.status(400).json(new ApiResponse(400, "Please provide text and to language"));
    }

    const translatedText = await askGemini(
        `Translate the following text into ${to} language:
        "${text}"
        Ensure the translation sounds natural, fluent, and professional,
        If translation is not possible, return the original text without modification. 
        Do not add any extra details, explanations, or formatting.`
    );
    res.status(200).json(new ApiResponse(200, translatedText));
});
