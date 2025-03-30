import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = (props) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium text-lg"
        onClick={props.toggleOpen}
      >
        <span>{props.question}</span>
        {props.isOpen ? 
          <ChevronUp className="w-5 h-5 text-blue-500" /> : 
          <ChevronDown className="w-5 h-5 text-gray-500" />
        }
      </button>
      
      {props.isOpen && (
        <div className="mt-3 text-gray-600 dark:text-gray-400">
          {props.answer}
        </div>
      )}
    </div>
  );
};

const WrapTalkFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const faqData = [
    {
      question: "What is WrapTalk?",
      answer: "WrapTalk is a tool that simplifies multilingual support in React applications. It allows you to wrap text in a special component, then automatically generates translations using AI without requiring runtime API calls."
    },
    {
      question: "How does WrapTalk work?",
      answer: "WrapTalk uses a two-part system: a CLI tool that scans your React code for translatable content and generates translations via the Gemini API, and a React component library that displays the correct translations at runtime. The translations are pre-generated and stored in a JSON file, so there's no need for API calls when users view your app."
    },
    {
      question: "Which languages does WrapTalk support?",
      answer: "WrapTalk supports a wide range of languages including English, Spanish, French, Bengali, Hindi, and many more. You can configure the languages you need in the wraptalk.config.json file."
    },
    {
      question: "Do I need to manually translate my content?",
      answer: "No, that's the beauty of WrapTalk! You just need to wrap your text in the <TranslateThis> component with a unique ID, and WrapTalk will generate translations for all configured languages automatically using the Gemini API."
    },
    {
      question: "How do I install WrapTalk?",
      answer: "You can install WrapTalk globally using npm: 'npm install -g wraptalk'. Then initialize it in your project using 'npx wraptalk init'. This will set up the configuration and install the React components package."
    },
    {
      question: "How do I update translations when I change text?",
      answer: "Simply run 'npx wraptalk run' after making changes to your text content. WrapTalk will scan your code, identify new or changed text, and update the translations accordingly."
    },
    {
      question: "Is there any runtime performance impact?",
      answer: "No. WrapTalk generates all translations during build time and stores them in a static JSON file. At runtime, your app simply loads the pre-generated translations, so there's minimal performance impact compared to solutions that make API calls for translation."
    }
  ];
  
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WrapTalkFAQ;