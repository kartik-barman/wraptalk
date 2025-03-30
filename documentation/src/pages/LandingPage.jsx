import { GitBranch, LeafyGreen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WrapTalkFAQ from "../components/FAQ/WrapTalkFAQ";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
      {/* Hero Section */}
      <main className="px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold max-w-4xl mx-auto mb-6">
          Seamless Translations with{" "}
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            WrapTalk
          </span>
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          WrapTalk automates multilingual support in React apps. Just wrap text
          inside <code>{"<TranslateThis>"}</code>, run{" "}
          <code>npx wraptalk run</code>, and let AI handle translations
          efficiently—no API calls at runtime, no manual work!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <a href="https://github.com/wraptalk/wraptalk" target="_blank" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200 transform hover:translate-y-px flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer">
            <GitBranch className="w-5 h-5" />
            View on GitHub
          </a>

          <button
            onClick={() => navigate("/getstarted")}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200 transform hover:translate-y-px flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate("/how-it-works")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200 transform hover:translate-y-px flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <LeafyGreen className="w-5 h-5" />
            Learn how it works
          </button>
        </div>
      </main>
    </div>
    <WrapTalkFAQ />
    </>
  );
}
