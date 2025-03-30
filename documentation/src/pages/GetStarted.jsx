import React, { useState, useEffect } from "react";
import { Copy, Check, Moon, Sun } from "lucide-react";

// Copy Button Component
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-md bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-gray-300" />
      )}
    </button>
  );
};


// Step Card Component with Copy Functionality
const StepCard = ({ number, title, description, code }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <div className="flex items-center mb-4">
        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          {number}
        </div>
        <h3 className="ml-3 text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
        {description}
      </p>
      {code && (
        <div className="bg-gray-900 rounded-lg p-4 overflow-hidden relative">
          <CopyButton text={code} />
          <pre className="text-gray-300 text-sm overflow-x-auto p-1">
            {code}
          </pre>
        </div>
      )}
    </div>
  );
};

// Main Get Started Page
const WrapTalkGetStarted = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-16 dark:bg-gray-900 dark:text-white transition-colors">

      {/* Header */}
      <div className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-bold">WrapTalk Setup Guide</h1>
          <p className="mt-2 text-xl">
            Learn how to implement multilingual support in your React app
          </p>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <StepCard
              number="1"
              title="Installation"
              description="Install WrapTalk globally using npm."
              code="npm install -g wraptalk-cli"
            />

            <StepCard
              number="2"
              title="Initialize Your Project"
              description="Run the initialization command to create a configuration file."
              code="npx wraptalk init"
            />

            <StepCard
              number="3"
              title="Configure Languages"
              description="The initialization creates a configuration file. Edit it to specify your desired languages using full language names (not language codes)."
              code={`// src/wraptalk.config.json\n{\n  "fileExtensions": [\n    "js",\n    "jsx"\n  ],\n  "languages": [\n    "bengali",\n    "hindi"\n  ]\n}`}
            />

            <StepCard
              number="4"
              title="Set Up the Language Provider"
              description="Wrap your application with the LanguageProvider component and import the generated translations."
              code={`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { LanguageProvider } from 'wraptalk';\nimport translations from './wraptalk.translations.json';\nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <LanguageProvider translations={translations}>\n      <App />\n    </LanguageProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);`}
            />

            <StepCard
              number="5"
              title="Wrap Your Text"
              description="Use the TranslateThis component to mark text for translation and give tid a unique identifier."
              code={`import { TranslateThis } from 'wraptalk';\n\nfunction Welcome() {\n  return (\n    <h1>\n      <TranslateThis tid="welcome">\n        Welcome to our app!\n      </TranslateThis>\n    </h1>\n  );\n}`}
            />

            <StepCard
              number="6"
              title="Generate Translations"
              description="Run the translation command to scan your code and generate translations."
              code="npx wraptalk run"
            />
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Technical Details
          </h2>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 mb-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">
              File Structure
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
              After running WrapTalk, your project will have these additional
              files:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm">
              <pre>
                {`├── src/
│   ├── wraptalk.config.json       # Your configuration
│   └── wraptalk.translations.json # Generated translations`}
              </pre>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">
              Translation Format
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
              The generated translations.json file will look like this:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-hidden relative">
              <CopyButton
                text={`{\n  "english": {\n    "welcome.title": "Welcome to our app!",\n    "welcome.subtitle": "Get started by exploring our features"\n  },\n  "bengali": {\n    "welcome.title": "আমাদের অ্যাপে স্বাগতম!",\n    "welcome.subtitle": "আমাদের বৈশিষ্ট্যগুলি অন্বেষণ করে শুরু করুন"\n  },\n  "hindi": {\n    "welcome.title": "हमारे ऐप में आपका स्वागत है!",\n    "welcome.subtitle": "हमारी सुविधाओं का अन्वेषण करके प्रारंभ करें"\n  }\n}`}
              />
              <pre>
                {`{
  "english": {
    "welcome.title": "Welcome to our app!",
    "welcome.subtitle": "Get started by exploring our features"
  },
  "bengali": {
    "welcome.title": "আমাদের অ্যাপে স্বাগতম!",
    "welcome.subtitle": "আমাদের বৈশিষ্ট্যগুলি অন্বেষণ করে শুরু করুন"
  },
  "hindi": {
    "welcome.title": "हमारे ऐप में आपका स्वागत है!",
    "welcome.subtitle": "हमारी सुविधाओं का अन्वेषण करके प्रारंभ करें"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Commands Reference */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Command Reference
          </h2>

          <div className="overflow-hidden bg-white dark:bg-gray-700 rounded-xl shadow-lg transition-colors">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
              <thead className="bg-gray-50 dark:bg-gray-800 transition-colors">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors"
                  >
                    Command
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider transition-colors"
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600 transition-colors">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    npx wraptalk init
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                    Initializes WrapTalk in your project
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    npx wraptalk run
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                    Scans components and generates translations
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapTalkGetStarted;
