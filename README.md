# WrapTalk ![npm](https://img.shields.io/npm/v/wraptalk)  ![npm downloads](https://img.shields.io/npm/dt/wraptalk)

[Visit our Website](https://www.wraptalk.xyz/) | [WrapTalk on npm](https://www.npmjs.com/package/wraptalk)

WrapTalk is a simple and efficient translation package for React applications. It allows developers to wrap text components and manage translations seamlessly using AI-generated translations.

## Features
- Easy-to-use `<TranslateThis>` component for text translation.
- AI-generated translations using the Gemini AI.
- Supports storing and managing translations in JSON files.
- No external API calls for live translations; works offline after generation.
- Adjust or customize any translations.

## Setup WrapTalk
Install WrapTalk globally and initialize your project with just two commands.

### Step 1: Install WrapTalk globally
```sh
npm install -g wraptalk
```

### Step 2: Initialize your project
```sh
npx wraptalk init
```

## Configure Languages
After initialization, edit the configuration file to specify your desired languages. Use full language names like 'english', 'bengali', 'hindi', etc.

```json
// src/wraptalk.config.json
{
  "fileExtensions": ["js", "jsx"],
  "languages": ["english", "bengali", "hindi"]
}
```

## Set Up the Provider
Wrap your application with the `LanguageProvider` component in your main entry file (`main.jsx` or `index.js`) and import the generated translations file.

```jsx
// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { LanguageProvider } from 'wraptalk';
import translations from './wraptalk.translations.json'; // import this
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider translations={translations}>  // pass the imported json file here
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Mark Text for Translation
Wrap any text you want to translate with the `TranslateThis` component. Each component needs a unique 'tid' (text ID).

```jsx
// Example Component.jsx
import { TranslateThis } from 'wraptalk';

function Welcome() {
  return (
    <div>
      <h1>
        <TranslateThis tid="welcome.title">
          Welcome to our app!
        </TranslateThis>
      </h1>
      <p>
        <TranslateThis tid="welcome.subtitle">
          Get started by exploring our features
        </TranslateThis>
      </p>
    </div>
  );
}
```

## Generate Translations
Run the translation command to scan your code and automatically generate translations for all configured languages.

```sh
npx wraptalk run
```

## Add Language Switcher
Import the `useLanguage` hook to create buttons or controls that let users switch languages.

```jsx
// LanguageSwitcher.jsx
import { useLanguage } from 'wraptalk';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  
  return (
    <div className="flex space-x-2">
      <button
        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"
        onClick={() => setLanguage('english')}
      >
        English
      </button>
      
      <button
        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"
        onClick={() => setLanguage('bengali')}
      >
        Bengali
      </button>
      
      <button
        className="px-5 py-2 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition duration-200"
        onClick={() => setLanguage('hindi')}
      >
        Hindi
      </button>
    </div>
  );
}
```

## How WrapTalk Works
### The Simple Process
1. WrapTalk scans your files for `TranslateThis` components.
2. It automatically generates translations for all your specified languages.
3. When a user changes the language via `setLanguage`, all wrapped text updates instantly.

### Translation Format
After running `npx wraptalk run`, a `translations.json` file is generated with this structure:

```json
{
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
}
```

## Quick Command Reference
| Command | Description |
|---------|-------------|
| `npm install -g wraptalk` | Installs WrapTalk globally on your system |
| `npx wraptalk init` | Initializes WrapTalk in your project and creates config file |
| `npx wraptalk run` | Scans your code and generates translations for all languages |

## Frequently Asked Questions
### How do I add more languages later?
Simply edit your `wraptalk.config.json` file to add more languages, then run `npx wraptalk run` again to generate the new translations.

### Can I manually edit translations?
Yes, you can manually edit the `wraptalk.translations.json` file if you need to adjust or customize any translations.

## Feedback & Contributions
WrapTalk is currently in its prototype version, and we need your feedback! With your support, we can turn this into something big.

This is an open-source project, feel free to contribute, report issues, or suggest improvements. Every bit of help is appreciated!
