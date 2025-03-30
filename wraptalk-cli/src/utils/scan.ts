import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import { JSXAttribute, JSXIdentifier, JSXText } from "@babel/types";

function getFileExtensions(): string[] {
  const configPath = path.join(process.cwd(), "wraptalk.config.json");

  if (!fs.existsSync(configPath)) {
    console.error("Config file not found. Run `npx wraptalk init` first.");
    process.exit(1);
  }

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    return config.fileExtensions || ["js", "jsx"];
  } catch (error) {
    console.error("Error reading config file:", error);
    process.exit(1);
  }
}

function extractTranslations(filePath: string): Record<string, string> {
  const code = fs.readFileSync(filePath, "utf-8");
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript"],
  });

  const translations: Record<string, string> = {};

  traverse(ast, {
    JSXElement(path) {
      const node = path.node;
      if (node.openingElement.name.type === "JSXIdentifier") {
        const componentName = (node.openingElement.name as JSXIdentifier).name;

        if (componentName === "TranslateThis") {
          const tidAttribute = node.openingElement.attributes.find(
            (attr) => attr.type === "JSXAttribute" && attr.name.name === "tid"
          ) as JSXAttribute | undefined;

          if (tidAttribute && tidAttribute.value?.type === "StringLiteral") {
            const tid = tidAttribute.value.value;
            const text = node.children
              .filter((child) => child.type === "JSXText")
              .map((child) => (child as JSXText).value.trim())
              .join(" ");

            if (tid && text) {
              translations[tid] = text;
            }
          }
        }
      }
    },
  });

  return translations;
}

export function scanCommand(arg: string) {
  const srcPath = path.join(process.cwd(), "src");
  if (!fs.existsSync(srcPath)) {
    console.error("'src' directory not found. Please create it and run `npx wraptalk init`.");
    process.exit(1);
  }

  const fileExtensions = getFileExtensions();
  const searchPattern = `src/**/*.{${fileExtensions.join(",")}}`;
  const files = glob.sync(searchPattern);

  if (files.length === 0) return;

  const outputPath = path.join(srcPath, "wraptalk.translations.json");
  let existingTranslations: Record<string, any> = {};

  if (fs.existsSync(outputPath)) {
    try {
      existingTranslations = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    } catch (error) {
      console.error("Error reading existing translations file:", error);
      return;
    }
  }

  const configPath = path.join(process.cwd(), "wraptalk.config.json");
  let defaultLanguage = "english";

  try {
    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    if (config.appLanguage) defaultLanguage = config.appLanguage;
  } catch {
    console.warn("⚠️ appLanguage not defined. Using default ('english').");
  }

  let newTranslations: Record<string, string> = {};
  for (const file of files) {
    Object.assign(newTranslations, extractTranslations(file));
  }

  if (arg === "-a") {
    fs.writeFileSync(outputPath, JSON.stringify({ [defaultLanguage]: newTranslations }, null, 2), "utf-8");
    console.log("✔ Translations file rewritten successfully!");
  } else {
    if (!existingTranslations[defaultLanguage]) existingTranslations[defaultLanguage] = {};

    let newEntriesFound = false;
    for (const tid in newTranslations) {
      if (!(tid in existingTranslations[defaultLanguage])) {
        existingTranslations[defaultLanguage][tid] = newTranslations[tid];
        newEntriesFound = true;
      }
    }

    if (newEntriesFound) {
      fs.writeFileSync(outputPath, JSON.stringify(existingTranslations, null, 2), "utf-8");
      console.log("✔ Translations file updated successfully!");
    }
  }
}
