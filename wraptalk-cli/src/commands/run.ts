import { scanCommand } from "./scan";

const runCommand  = () => {
    scanCommand();
    console.log("✅ Translations extracted and saved to translations.json");
  }
  
  export { runCommand };