import fs from "fs";
import path from "path";
import { glob } from "glob";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";
import { JSXAttribute, JSXIdentifier, JSXText } from "@babel/types";

/**
 * Reads file extensions from config or defaults to ["js", "jsx"].
 */

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

/**
 * Extracts `tid` and text from `<TranslateThis>` components in a file.
 */

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

/**
 * Scans project files for translations and saves them in `wraptalk.translations.json`.
 */


export function scanCommand() {
  const srcPath = path.join(process.cwd(), "src");
  if (!fs.existsSync(srcPath)) {
    console.error("src directory not found.");
    console.error("Please create a 'src' directory and run `npx wraptalk init` command.");
    process.exit(1);
  }

  const fileExtensions = getFileExtensions();
  const searchPattern = `src/**/*.{${fileExtensions.join(",")}}`;
  const files = glob.sync(searchPattern);

  if (files.length === 0) {
    console.log("No matching files found to scan.");
    return;
  }

  let allTranslations: Record<string, string> = {};

  for (const file of files) {
    const translations = extractTranslations(file);
    allTranslations = { ...allTranslations, ...translations };
  }

  // Format translations under "english" key
  const formattedTranslations = { english: allTranslations };
  const outputPath = path.join(srcPath, "wraptalk.translations.json");
  fs.writeFileSync(outputPath, JSON.stringify(formattedTranslations, null, 2), "utf-8");
}
