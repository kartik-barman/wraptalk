import { scanCommand } from "../utils/scan";
import { translateCommand } from "../utils/translate";

export const runCommand = async () => {
    try {
        scanCommand();
    } catch (error) {
        console.error("❌ Error in scanCommand:", error);
        return;
    }

    try {
        await translateCommand();
        console.log("✅ Translations completed and updated in wraptalk.translations.json");
    } catch (error) {
        console.error("❌ Error in runCommand:", error);
    }
};
