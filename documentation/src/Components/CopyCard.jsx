import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyCard = () => {
  const [copied, setCopied] = useState(false);
  const terminalCommands = [
    'npm install -D tailwindcss',
    'npx tailwindcss init'
  ];

  const handleCopy = () => {
    // Copy all commands to clipboard
    const commandsToCopy = terminalCommands.join('\n');
    navigator.clipboard.writeText(commandsToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex justify-end p-4">
      <div className="w-[380px] bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
        {/* Header */}
        <div className="relative bg-slate-700/50 px-4 py-2 flex justify-between items-center border-b border-slate-600">
          <span className="text-cyan-300 text-sm font-medium">Terminal</span>
          <button 
            onClick={handleCopy}
            className="text-slate-400 hover:text-slate-200 transition-colors duration-300 group"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-3 space-y-2">
          {terminalCommands.map((command, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-2 text-slate-100"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 text-pink-400"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
              <code className="text-sm">{command}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CopyCard;