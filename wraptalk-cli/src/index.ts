import { Command } from "commander"; 
import { initCommand } from "./commands/init";
import { runCommand } from "./commands/run";

const program = new Command();

program
  .name("wraptalk")
  .description("will write a better description later!")
  .version("0.0.1");

program
  .command("init")
  .description("Initialize the wraptalk in the current directory")
  .action(initCommand);

  program.command("run")
  .description("Run wraptalk in the current directory")
  .option("-a, --all", "Replace all translations instead of adding missing ones")
  .action((options) => {
    const arg = options.all ? "-a" : "";
    runCommand(arg.trim());
  });

if (process.argv.length < 3) {
  program.outputHelp();
  process.exit(0);
}

program.parse(process.argv);
