import React, { useState } from "react";

const WrapTalkDocs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 pt-[5rem]">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">WrapTalk Documentation</h1>
          <p className="mt-2 text-indigo-100">
            A modern approach to React i18n solutions.
          </p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <nav className="flex overflow-x-auto">
            {["overview", "cli", "react", "translation", "workflow"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 font-medium text-sm whitespace-nowrap ${
                    activeTab === tab
                      ? "text-indigo-700 border-b-2 border-indigo-700"
                      : "text-gray-600 hover:text-indigo-600"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              )
            )}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto p-6">
          {activeTab === "overview" && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Architecture Overview
              </h2>

              {/* Gradient Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* CLI Package Card */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg p-6 border border-transparent">
                  <h3 className="text-xl font-semibold mb-4">
                    wraptalk (CLI Package)
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Installed globally via npm.</li>
                    <li>
                      Provides CLI commands: `wraptalk init` and `wraptalk run`.
                    </li>
                    <li>Scans React files for translatable content.</li>
                    <li>Interacts with the Gemini API for translations.</li>
                    <li>Manages translation JSON files.</li>
                  </ul>
                </div>

                {/* Component Package Card */}
                <div className="bg-gradient-to-br from-pink-500 to-red-600 text-white rounded-lg shadow-lg p-6 border border-transparent">
                  <h3 className="text-xl font-semibold mb-4">
                    wraptalk-react (Component Package)
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Installed locally in your project.</li>
                    <li>Provides React components and hooks:</li>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <code>&lt;TranslateThis&gt;</code>: Wraps translatable
                        text.
                      </li>
                      <li>
                        <code>LanguageProvider</code>: Context for managing
                        languages.
                      </li>
                      <li>
                        <code>useLanguage</code>: Hook for language switching.
                      </li>
                    </ul>
                    <li>
                      Reads translations from `wraptalk.translations.json`.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Workflow Card */}
              <div className="bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-lg shadow-lg p-6 mt-6 border border-transparent">
                <h3 className="text-xl font-semibold mb-4">
                  How These Packages Work Together
                </h3>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>Initialization:</strong> Install WrapTalk globally
                    and initialize the project using `wraptalk init`.
                  </li>
                  <li>
                    <strong>Integration:</strong> Wrap translatable text using{" "}
                    <code>&lt;TranslateThis tid="uniqueId"&gt;</code>{" "}
                    components.
                  </li>
                  <li>
                    <strong>Translation Generation:</strong> Run `wraptalk run`
                    to scan files, extract strings, send them to the Gemini API,
                    and save translations.
                  </li>
                  <li>
                    <strong>Runtime Usage:</strong> Use `wraptalk-react`
                    components to display and switch between languages
                    dynamically.
                  </li>
                </ol>
              </div>
            </section>
          )}

          {activeTab === "cli" && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                CLI Implementation
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  How the CLI Works
                </h3>
                <p className="mb-4">
                  The CLI package (`wraptalk`) is responsible for scanning your
                  React code, extracting translatable text, and generating
                  translations.
                </p>
                <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b border-gray-200">
                    <h4 className="font-medium text-gray-700">
                      Project Initialization (`wraptalk init`)
                    </h4>
                  </div>
                  <div className="p-4 bg-gray-800 text-green-400 font-mono text-sm rounded overflow-x-auto whitespace-pre">
                    {`$ npx wraptalk init\n\n✅ Creating wraptalk.config.json file\n✅ Installing wraptalk-react package\n✅ Initialization complete\n\nYour WrapTalk project is ready! To generate translations:\n\n1. Wrap your text in <TranslateThis tid="unique_id"> components\n2. Run 'npx wraptalk run' to scan and translate\n3. Import the LanguageProvider in your App.js\n4. Use the useLanguage hook to switch languages`}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    The Init Command Internals
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of what the init command does internally\nconst initProject = async () => {\n  // 1. Create config file\n  const configContent = {\n    sourcePath: "./src",\n    outputPath: "./src/wraptalk.translations.json",\n    languages: ["english", "spanish", "french", "bengali", "hindi"],\n    apiKey: "",\n    // Let user configure later\n  };\n\n  fs.writeFileSync(\n    path.join(process.cwd(), "wraptalk.config.json"),\n    JSON.stringify(configContent, null, 2)\n  );\n\n  // 2. Install wraptalk-react package\n  execSync("npm install --save wraptalk-react");\n\n  // 3. Create empty translations file\n  const emptyTranslations = {\n    english: {},\n    spanish: {},\n    french: {},\n    bengali: {},\n    hindi: {}\n  };\n\n  fs.writeFileSync(\n    path.join(process.cwd(), "src/wraptalk.translations.json"),\n    JSON.stringify(emptyTranslations, null, 2)\n  );\n\n  console.log("✅ WrapTalk initialized successfully!");\n};`}</pre>
                  </div>
                  <p className="text-gray-700">
                    The initialization process creates a `
                    <code className="bg-gray-100 text-gray-800 rounded px-1 py-0.5">
                      wraptalk.config.json
                    </code>
                    ` file that stores configuration settings, installs the
                    React components package, and sets up an empty translations
                    file.
                  </p>
                </div>
                <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-3 border-b border-gray-200">
                    <h4 className="font-medium text-gray-700">
                      Scanning and Translation (`wraptalk run`)
                    </h4>
                  </div>
                  <div className="p-4 bg-gray-800 text-green-400 font-mono text-sm rounded overflow-x-auto whitespace-pre">
                    {`$ npx wraptalk run\n\n📂 Scanning source directory: ./src\n🔍 Found 14 files to scan\n✓ Scanning App.jsx\n✓ Scanning Home.jsx\n✓ Scanning components/Header.jsx\n...\n🔤 Found 32 translatable strings\n🌐 Generating translations via Gemini API\n✅ Successfully translated all strings\n💾 Saved translations to ./src/wraptalk.translations.json`}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    The Run Command Internals
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Simplified snippet of what happens during 'wraptalk run'\nconst runTranslation = async () => {\n  // 1. Load config\n  const config = JSON.parse(fs.readFileSync("./wraptalk.config.json"));\n\n  // 2. Load existing translations (if any)\n  let translations = {};\n  try {\n    translations = JSON.parse(fs.readFileSync(config.outputPath));\n  } catch (err) {\n    // Create new translations object if file doesn't exist\n    translations = config.languages.reduce((acc, lang) => {\n      acc[lang] = {};\n      return acc;\n    }, {});\n  }\n\n  // 3. Scan React files for <TranslateThis> components\n  const translatableStrings = [];\n\n  function scanDirectory(dirPath) {\n    const files = fs.readdirSync(dirPath);\n\n    for (const file of files) {\n      const filePath = path.join(dirPath, file);\n      const stat = fs.statSync(filePath);\n\n      if (stat.isDirectory()) {\n        scanDirectory(filePath);\n      } else if (stat.isFile() && /\\.(js|jsx)$/.test(file)) {\n        const fileContent = fs.readFileSync(filePath, "utf8");\n\n        // Use AST parsing to find <TranslateThis> components\n        const ast = parser.parse(fileContent, {\n          sourceType: "module", // or 'script'\n          plugins: ["jsx"]\n        });\n\n        traverse(ast, {\n          JSXElement(path) {\n            if (path.node.openingElement.name.name === "TranslateThis") {\n              // Extract text and unique ID from props\n              const tidAttribute = path.node.openingElement.attributes.find(\n                (attr) => attr.name && attr.name.name === "tid"\n              );\n              const tid = tidAttribute ? tidAttribute.value.value : null;\n\n              // Extract text from children (if any)\n              let text = "";\n              path.node.children.forEach((child) => {\n                if (child.type === "JSXText") {\n                  text += child.value.trim();\n                }\n              });\n\n              if (tid && text) {\n                translatableStrings.push({ tid, text });\n              }\n            }\n          },\n        });\n      }\n    }\n  }\n\n  scanDirectory(config.sourcePath);\n\n  console.log(\`🔤 Found \${translatableStrings.length} translatable strings\`);\n  \n  // 4. Translate the strings using Gemini API\n  // (Placeholder - Implement Gemini API call here)\n\n  // 5. Save translations to wraptalk.translations.json\n  // (Placeholder - Implement saving translations here)\n}`}</pre>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "react" && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                React Components
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Using React Components
                </h3>
                <p className="mb-4">
                  The `wraptalk-react` package provides React components and
                  hooks to easily integrate translations into your application.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    &lt;TranslateThis&gt; Component
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of using the <TranslateThis> component\nimport React from 'react';\nimport { TranslateThis } from 'wraptalk-react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <TranslateThis tid="greeting">Hello, world!</TranslateThis>\n    </div>\n  );\n};`}</pre>
                  </div>
                  <p className="text-gray-700">
                    The `&lt;TranslateThis&gt;` component wraps translatable
                    text and uses a unique ID (`tid`) to fetch the appropriate
                    translation.
                  </p>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    LanguageProvider Component
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of using the LanguageProvider\nimport React from 'react';\nimport { LanguageProvider } from 'wraptalk-react';\n\nconst App = () => {\n  return (\n    <LanguageProvider language="english">\n      {/* Your app content */}\n    </LanguageProvider>\n  );\n};`}</pre>
                  </div>
                  <p className="text-gray-700">
                    The `LanguageProvider` component provides the context for
                    managing languages throughout your application. It should be
                    placed at the root of your app.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    useLanguage Hook
                  </h4>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of using the useLanguage hook\nimport React from 'react';\nimport { useLanguage } from 'wraptalk-react';\n\nconst MyComponent = () => {\n  const { language, setLanguage } = useLanguage();\n\n  return (\n    <div>\n      <p>Current Language: {language}</p>\n      <button onClick={() => setLanguage('spanish')}>Switch to Spanish</button>\n    </div>\n  );\n};`}</pre>
                  </div>
                  <p className="text-gray-700">
                    The `useLanguage` hook allows you to access and update the
                    current language within your components.
                  </p>
                </div>
              </div>
            </section>
          )}

          {activeTab === "translation" && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Translation Process
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Generating Translations
                </h3>
                <p className="mb-4">
                  The translation process involves scanning your React code for
                  translatable text and using the Gemini API to generate
                  translations for each language.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Scanning for Translatable Text
                  </h4>
                  <p className="text-gray-700 mb-4">
                    WrapTalk scans your React files for `&lt;TranslateThis&gt;`
                    components and extracts the text and unique IDs. This
                    information is then used to generate translations.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of a scanned component\n<TranslateThis tid="greeting">Hello, world!</TranslateThis>`}</pre>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Using the Gemini API
                  </h4>
                  <p className="text-gray-700 mb-4">
                    WrapTalk uses the Gemini API to generate translations for
                    each language specified in your `wraptalk.config.json` file.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Placeholder: Example API call to Gemini\nconst translateText = async (text, targetLanguage) => {\n  // Implement Gemini API call here\n  return translatedText;\n};`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Saving Translations
                  </h4>
                  <p className="text-gray-700 mb-4">
                    The generated translations are saved in a JSON file
                    (`wraptalk.translations.json`) in your source directory.
                    This file is then used by the `wraptalk-react` components to
                    display the correct translations.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of the translations JSON file\n{\n  "english": {\n    "greeting": "Hello, world!"\n  },\n  "spanish": {\n    "greeting": "¡Hola, mundo!"\n  }\n}`}</pre>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "workflow" && (
            <section>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Developer Workflow
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  WrapTalk Workflow
                </h3>
                <p className="mb-4">
                  This section outlines the recommended workflow for using
                  WrapTalk in your React projects.
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Initialization
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Start by initializing WrapTalk in your project using the
                    `wraptalk init` command. This will create the necessary
                    configuration file and install the `wraptalk-react` package.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`$ npx wraptalk init`}</pre>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Integration
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Wrap your translatable text in `&lt;TranslateThis&gt;`
                    components, providing a unique ID for each piece of text.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`<TranslateThis tid="greeting">Hello, world!</TranslateThis>`}</pre>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Translation Generation
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Run the `wraptalk run` command to scan your project for
                    translatable text and generate translations using the Gemini
                    API.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`$ npx wraptalk run`}</pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Runtime Usage
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Use the `wraptalk-react` components to display and switch
                    between languages dynamically in your application.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <pre className="text-sm overflow-x-auto text-gray-800">{`// Example of using wraptalk-react components\n<LanguageProvider language="english">\n  <TranslateThis tid="greeting">Hello, world!</TranslateThis>\n</LanguageProvider>`}</pre>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default WrapTalkDocs;
