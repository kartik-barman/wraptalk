import React, { useState } from 'react';
import { ChevronRight, Globe, Code, FileJson, Check, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const WrapTalkHackathon = () => {
  const [activeTab, setActiveTab] = useState('demo');
  const [currentLanguage, setCurrentLanguage] = useState('english');
  
  // Sample translations
  const translations = {
    english: {
      'welcome.title': 'Introducing WrapTalk',
      'welcome.subtitle': 'AI-powered i18n for React',
      'features.title': 'Key Features',
      'feature.1': 'No runtime API calls',
      'feature.2': 'Automated translation via Gemini AI',
      'feature.3': 'Simple integration with React',
      'demo.text': 'Change the language to see translations',
      'cta.button': 'Get Started'
    },
    spanish: {
      'welcome.title': 'Presentamos WrapTalk',
      'welcome.subtitle': 'i18n impulsado por IA para React',
      'features.title': 'Características Principales',
      'feature.1': 'Sin llamadas API en tiempo de ejecución',
      'feature.2': 'Traducción automatizada mediante Gemini AI',
      'feature.3': 'Integración simple con React',
      'demo.text': 'Cambia el idioma para ver las traducciones',
      'cta.button': 'Comenzar'
    },
    bengali: {
      'welcome.title': 'ওয়্যাপটক পরিচয়',
      'welcome.subtitle': 'রিয়্যাক্টের জন্য কৃত্রিম বুদ্ধিমত্তা চালিত ভাষান্তর',
      'features.title': 'মূল বৈশিষ্ট্যসমূহ',
      'feature.1': 'চলমান সময়ে কোনো এপিআই আহ্বান নেই',
      'feature.2': 'জেমিনি কৃত্রিম বুদ্ধিমত্তার মাধ্যমে স্বয়ংক্রিয় অনুবাদ',
      'feature.3': 'সহজেই রিয়্যাক্টের সাথে সংযুক্তি',
      'demo.text': 'অনুবাদ দেখতে ভাষা পরিবর্তন করুন',
      'cta.button': 'শুরু করুন'
    },
    hindi: {
      'welcome.title': 'WrapTalk का परिचय',
      'welcome.subtitle': 'রিয়্যাক্ট के लिए AI-संचालित i18n',
      'features.title': 'मुख्य विशेषताएँ',
      'feature.1': 'कोई रनटाइम API कॉल नहीं',
      'feature.2': 'জেমিনি AI के माध्यम से स्वचालित अनुवाद',
      'feature.3': 'রিয়্যাক্ট के साथ सरल एकीकरण',
      'demo.text': 'अनुवाद देखने के लिए भाषा बदलें',
      'cta.button': 'शुरू करें'
    }
};


  
  const getText = (key) => translations[currentLanguage][key] || translations.english[key];
  
  const DemoContent = () => (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl shadow-lg text-center">
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          {getText('welcome.title')}
        </h1>
        {/* <p className="text-gray-700 dark:text-gray-300 mt-3 text-xl">
          {getText('welcome.subtitle')}
        </p> */}
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {getText('features.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(num => (
            <div key={num} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <Check className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {getText(`feature.${num}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow mb-8">
        <p className="text-gray-600 dark:text-gray-300 italic">
          {getText('demo.text')}
        </p>
      </div>
      
      <Link to="/getstarted" className="w-52 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition duration-200 flex items-center justify-center mx-auto">
        {getText('cta.button')}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
  
  const HowItWorksContent = () => (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <Code className="mr-2 h-5 w-5 text-blue-500" />
          1. Wrap Your Text
        </h3>
        <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm font-mono">
          {`import { TranslateThis } from 'wraptalk-react';

function Welcome() {
  return (
    <h1>
      <TranslateThis tid="welcome.title">
        Introducing WrapTalk
      </TranslateThis>
    </h1>
  );
}`}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <RefreshCw className="mr-2 h-5 w-5 text-blue-500" />
          2. Generate Translations
        </h3>
        <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm font-mono">
          $ npx wraptalk run
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          WrapTalk scans your code, extracts text from TranslateThis components, 
          and uses Gemini AI to generate translations.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
          <FileJson className="mr-2 h-5 w-5 text-blue-500" />
          3. Translations JSON Generated
        </h3>
        <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm font-mono overflow-x-auto">
          {`{
  "english": {
    "welcome.title": "Introducing WrapTalk",
    "welcome.subtitle": "AI-powered i18n for React"
  },
  "spanish": {
    "welcome.title": "Presentamos WrapTalk",
    "welcome.subtitle": "i18n impulsado por IA para React"
  }
}`}
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-6 pb-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            WrapTalk
          </h1>
          {/* <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern approach to React i18n powered by Gemini AI
          </p> */}
        </div>
        
        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
            <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400 my-auto mr-2 ml-3" />
            {Object.keys(translations).map(lang => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${currentLanguage === lang 
                    ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {lang.charAt(0).toUpperCase() + lang.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 font-medium
              ${activeTab === 'demo'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
          >
            Demo
          </button>
          <button
            onClick={() => setActiveTab('how')}
            className={`px-4 py-2 font-medium
              ${activeTab === 'how'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
          >
            How It Works
          </button>
        </div>
        
        {/* Content */}
        <div className="mb-12">
          {activeTab === 'demo' ? <DemoContent /> : <HowItWorksContent />}
        </div>
        
        {/* GitHub Link */}
        <div className="text-center mt-6 pb-4">
          <a 
            href="#"
            className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default WrapTalkHackathon;