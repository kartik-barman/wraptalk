import { scanCommand } from "../utils/scan";
import { translateCommand } from "../utils/translate";

export const runCommand = async (arg: string) => {

    console.log("i am from the run command ",arg);

    try {
        scanCommand(arg);
    } catch (error) {
        console.error("Error in scanCommand:", error);
        return;
    }

    try {
        await translateCommand(arg);
        console.log("Command completed successfully.");
    } catch (error) {
        console.error("Error in translateCommand:", error);
    }
};
