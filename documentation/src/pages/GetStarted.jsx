import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

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
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 transition-colors overflow-x-hidden">
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
            Implement multilingual support in your React app in just 2 simple
            steps
          </p>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <StepCard
              number="1"
              title="Setup WrapTalk"
              description="Install WrapTalk globally and initialize your project with just two commands."
              code={`# Step 1: Install WrapTalk globally\n npm install -g wraptalk \n\n # Step 2: Initialize your project \n npx wraptalk init`}
            />

            <StepCard
              number="2"
              title="Configure Languages"
              description="After initialization, edit the configuration file to specify your desired languages. Use full language names like 'english', 'bengali', 'hindi', etc."
              code={`// src/wraptalk.config.json\n{\n  "fileExtensions": [\n    "js",\n    "jsx"\n  ],\n  "languages": [\n    "english",\n    "bengali",\n    "hindi"\n  ]\n}`}
            />

            <StepCard
              number="3"
              title="Set Up the Provider"
              description="Wrap your application with the LanguageProvider component in your main entry file (main.jsx or index.js) and import the generated translations file."
              code={`// main.jsx or index.js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { LanguageProvider } from 'wraptalk';\nimport translations from './wraptalk.translations.json'; // import this \nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <LanguageProvider translations={translations}>  // pass the imported json file here \n      <App />\n    </LanguageProvider>\n  </React.StrictMode>,\n  document.getElementById('root')\n);`}
            />

            <StepCard
              number="4"
              title="Mark Text for Translation"
              description="Wrap any text you want to translate with the TranslateThis component. Each component needs a unique 'tid' (text ID)."
              code={`// Example Component.jsx\nimport { TranslateThis } from 'wraptalk';\n\nfunction Welcome() {\n  return (\n    <div>\n      <h1>\n        <TranslateThis tid="welcome.title">\n          Welcome to our app!\n        </TranslateThis>\n      </h1>\n      <p>\n        <TranslateThis tid="welcome.subtitle">\n          Get started by exploring our features\n        </TranslateThis>\n      </p>\n    </div>\n  );\n}`}
            />

            <StepCard
              number="5"
              title="Generate Translations"
              description="Run the translation command to scan your code and automatically generate translations for all configured languages."
              code="npx wraptalk run"
            />

            <StepCard
              number="6"
              title="Add Language Switcher"
              description="Import the useLanguage hook to create buttons or controls that let users switch languages."
              code={`// LanguageSwitcher.jsx\nimport { useLanguage } from 'wraptalk';\n\nfunction LanguageSwitcher() {\n  const { language, setLanguage } = useLanguage();\n  \n  return (\n    <div className="flex space-x-2">\n      <button\n        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"\n        onClick={() => setLanguage('english')}\n      >\n        English\n      </button>\n      \n      <button\n        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"\n        onClick={() => setLanguage('bengali')}\n      >\n        Bengali\n      </button>\n      \n      <button\n        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"\n        onClick={() => setLanguage('hindi')}\n      >\n        Hindi\n      </button>\n    </div>\n  );\n}`}
            />
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            How WrapTalk Works
          </h2>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 mb-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">
              The Simple Process
            </h3>
            <ol className="space-y-2 text-gray-600 dark:text-gray-300 mb-4 transition-colors">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-1 flex-shrink-0">
                  1
                </span>
                <span>
                  WrapTalk scans your files for
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    TranslateThis
                  </code>
                  components.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-1 flex-shrink-0">
                  2
                </span>
                <span>
                  It automatically generates translations for all your specified
                  languages.
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-2 mt-1 flex-shrink-0">
                  3
                </span>
                <span>
                  When a user changes the language via
                  <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                    setLanguage
                  </code>
                  , all wrapped text updates instantly.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 transition-colors">
              Translation Format
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors">
              After running
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                npx wraptalk run
              </code>
              , a translations.json file is generated with this structure:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-hidden relative">
              <CopyButton
                text={`{\n  "english": {\n    "welcome.title": "Welcome to our app!",\n    "welcome.subtitle": "Get started by exploring our features"\n  },\n  "bengali": {\n    "welcome.title": "আমাদের অ্যাপে স্বাগতম!",\n    "welcome.subtitle": "আমাদের বৈশিষ্ট্যগুলি অন্বেষণ করে শুরু করুন"\n  },\n  "hindi": {\n    "welcome.title": "हमारे ऐप में आपका स्वागत है!",\n    "welcome.subtitle": "हमारी सुविधाओं का अन्वेषण करके प्रारंभ करें"\n  }\n}`}
              />
              <pre className="text-gray-300 text-sm overflow-x-auto p-1">
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
            Quick Command Reference
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
                    npm install -g wraptalk
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                    Installs WrapTalk globally on your system
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    npx wraptalk init
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                    Initializes WrapTalk in your project and creates config file
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-sm text-gray-600 dark:text-gray-300 transition-colors">
                    npx wraptalk run
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 transition-colors">
                    Scans your code and generates translations for all languages
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 transition-colors">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
                How do I add more languages later?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Simply edit your wraptalk.config.json file to add more
                languages, then run
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                  npx wraptalk run
                </code>
                again to generate the new translations.
              </p>
            </div>
            {/* 
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
                How does WrapTalk handle dynamic content?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                You can use template variables in your translations. For
                example:
                <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">{`<TranslateThis tid="greeting" vars={{ name: userName }}>Hello, {name}!</TranslateThis>`}</code>
              </p>
            </div> */}

            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 transition-colors">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 transition-colors">
                Can I manually edit translations?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                Yes, you can manually edit the wraptalk.translations.json file
                if you need to adjust or customize any translations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapTalkGetStarted;
