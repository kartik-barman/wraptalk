import fs from "fs";
import path from "path";
import axios from "axios";

const TRANSLATION_FILE = path.join("./src", "wraptalk.translations.json");
const CONFIG_FILE = path.join("./", "wraptalk.config.json");

const translateText = async (text: string , to: string ) => {
    try {
        const response = await axios.post("https://translate-backend-5l18.onrender.com/translate/?key=test", {
            text,
            to
        });
        
        if (!response.data || !response.data.data) {
            throw new Error("Invalid response from translation AI");
        }
        
        return response.data.data;
    } catch (error: any) {
        console.error(`Translation failed for "${text}" to ${to}:`, error.message);
        return text;
    }
};

const translateCommand = async () => {
    if (!fs.existsSync(CONFIG_FILE)) {
        console.error("Config file not found. Please create 'wraptalk.config.json'.");
        return;
    }

    const config = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf-8"));
    const targetLanguages = config.languages || [];

    if (targetLanguages.length === 0) {
        console.error("No target languages defined in config.");
        return;
    }

    if (!fs.existsSync(TRANSLATION_FILE)) {
        console.error("Translations file not found.");
        return;
    }

    const translations = JSON.parse(fs.readFileSync(TRANSLATION_FILE, "utf-8"));
    
    if (!translations.english) {
        console.error("'english' section not found in translations file.");
        return;
    }

    for (const lang of targetLanguages) {
        console.log(`Translating to ${lang}...`);
        let updatesMade = false;

        for (const key in translations.english) {
            const originalText = translations.english[key];
            
            if (!translations[lang]) {
                translations[lang] = {};
            }
            
            if (!translations[lang][key]) {
                const translatedText = await translateText(originalText, lang);
                translations[lang][key] = translatedText;
                updatesMade = true;
            }
        }

        if (updatesMade) {
            console.log(`Translations for ${lang} updated.`);
        } else {
            console.log(`✔️ ${lang} translations were already complete.`);
        }
    }

    fs.writeFileSync(TRANSLATION_FILE, JSON.stringify(translations, null, 2));
};

export { translateCommand };
