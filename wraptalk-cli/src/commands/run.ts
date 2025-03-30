import { scanCommand } from "./scan";
import { translateCommand } from "./translate";

const runCommand = async () => {
    try {
        scanCommand();
        console.log("✅ Translations extracted and saved to wraptalk.translations.json");
    } catch (error) {
        console.error("❌ Error in scanCommand:", error);
        return;
    }

    try {
        await translateCommand();
        console.log("✅ Translations completed and updated in wraptalk.translations.json");
    } catch (error) {
        console.error("❌ Error in translateCommand:", error);
    }
};
