import { GitBranch, LeafyGreen, ArrowRight, Trophy } from "lucide-react";
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
            Seamless Translations with
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              WrapTalk
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            WrapTalk automates multilingual support in React apps. Just wrap
            text inside <code>{"<TranslateThis>"}</code>, run
            <code>npx wraptalk run</code>, and let AI handle translations
            efficiently—no API calls at runtime, no manual work!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/wraptalk/wraptalk"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition duration-200 transform hover:translate-y-px flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            >
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

      {/* Hackathon Success Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Trophy className="w-16 h-16 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Award-Winning Project
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              We won "Best Beginner Team" at our first-ever hackathon!
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src="https://res.cloudinary.com/dmwlciwjk/image/upload/c_crop,w_2500,h_2500,ar_1:1/v1743500617/k01zlxtxogsqzcd9wbhu.jpg"
                  alt="Team at hackathon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Our Hackathon Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  As first-time hackathon participants, we created WrapTalk to
                  solve the challenging problem of internationalization in
                  large-scale applications. Our innovative approach earned us
                  recognition as the "Best Beginner Team."
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We're incredibly grateful to the mentors, organizers, and
                  fellow participants who made this experience unforgettable.
                  The guidance and support we received throughout the event were
                  instrumental in bringing WrapTalk to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WrapTalkFAQ />
    </>
  );
}
