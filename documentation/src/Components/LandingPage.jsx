import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function LandingPage() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen justify-between bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-black dark:via-gray-800 dark:to-yellow-500">
      {/* Toggle Button */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" />
            ) : (
              <FaMoon className="text-gray-900" />
            )}
          </button>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow text-center p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            The Next Frontier in AI Integration
          </h1>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/SushantaaCSE/ReuseableComponents/tree/main/ReusableCompo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              View on GitHub
            </a>
            <a
            href="https://xyz-app.com"
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
          >
            Try XYZ
          </a>
          <a
            href="/documentation"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400"
          >
            Get Started
          </a>
        </div>
      </div>

      
    </div>
  );
}

export default LandingPage;  