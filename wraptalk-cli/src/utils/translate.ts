import fs from "fs/promises";
import path from "path";
import axios from "axios";

const TRANSLATION_FILE = path.join("./src", "wraptalk.translations.json");
const CONFIG_FILE = path.join("./", "wraptalk.config.json");

const translateText = async (text: string, to: string) => {
    try {
        console.log(`Translating "${text}" to "${to}"...`);
        const response = await axios.post("https://translate-backend-5l18.onrender.com/translate/?key=test", {
            text,
            to
        });

        if (!response.data || !response.data.data) throw new Error("Invalid AI response");

        console.log(`Translation successful: "${text}" → "${response.data.data}"`);
        return response.data.data;
    } catch (error: any) {
        console.error(`Failed to translate "${text}" to "${to}":`, error.message);
        return text; 
    }
};

const translateCommand = async (arg: string) => {
    const forceRewrite = arg === "-a";
    console.log(`🚀 Translation started! Mode: ${forceRewrite ? "FULL REWRITE (-a)" : "MISSING ONLY"}`);

    try {
        let config;
        try {
            const configData = await fs.readFile(CONFIG_FILE, "utf-8");
            config = JSON.parse(configData);
        } catch (error) {
            console.error("Config file is missing or invalid. Please create 'wraptalk.config.json'.");
            return;
        }

        const targetLanguages: string[] = config.languages || [];
        if (targetLanguages.length === 0) {
            console.error("No target languages defined in config. Please define them in 'wraptalk.config.json'.");
            return;
        }

        // Read and parse translation file
        let translations: any = { english: {} };
        try {
            const fileContent = await fs.readFile(TRANSLATION_FILE, "utf-8");
            translations = fileContent.trim() ? JSON.parse(fileContent) : { english: {} };
        } catch (error) {
            console.warn("⚠️ Translations file is missing or corrupted. Creating a new one.");
            translations = { english: {} };
        }

        if (!translations.english) {
            console.error("'english' section not found in translations file.");
            return;
        }

        let fileUpdated = false;

        for (const lang of targetLanguages) {
            console.log(`🌍 Processing "${lang}" translations...`);

            translations[lang] ||= {};
            let updatesMade = false;

            const translationPromises = Object.entries(translations.english)
                .filter(([key]) => forceRewrite || !translations[lang][key])
                .map(async ([key, originalText]) => {
                    // console.log(`🆕 Translating "${key}" for "${lang}"...`);
                    translations[lang][key] = await translateText(originalText as string, lang);
                    updatesMade = true;
                });

            await Promise.all(translationPromises);

            if (updatesMade) fileUpdated = true;
        }

        if (fileUpdated) {
            // console.log("💾 Writing updated translations to file...");
            await fs.writeFile(TRANSLATION_FILE, JSON.stringify(translations, null, 2));
            console.log("Translations updated successfully!");
        } else {
            console.log("👍 No changes needed.");
        }
    } catch (error: any) {
        console.error(`Unexpected Error: ${error.message}`);
    }
};

export { translateCommand };
