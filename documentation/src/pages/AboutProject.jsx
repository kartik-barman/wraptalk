import { GitBranch, Code, Globe, Zap } from "lucide-react"

export default function AboutProject() {
  return (
    <section id="about-project" className="py-20 bg-gray-50 dark:bg-gray-800 mt-4">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Our Project</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            WrapTalk is a revolutionary tool that simplifies multilingual support in React applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">What is WrapTalk?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              WrapTalk is an innovative solution that automates the translation process for React applications. Our tool
              eliminates the need for manual translations, API calls at runtime, and complex internationalization
              setups.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Simply wrap your text in{" "}
              <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">&lt;TranslateThis&gt;</code> components,
              run our CLI command, and let our AI-powered system handle the rest. WrapTalk generates all translations
              during build time, ensuring optimal performance and seamless user experience.
            </p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-green-500 p-1 rounded-lg">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Simple Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Easy to add to any React project with minimal code changes
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full mb-4">
                    <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Multiple Languages</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Support for numerous languages with high-quality translations
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                    <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Performance First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No runtime API calls means faster loading and better UX
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-full mb-4">
                    <GitBranch className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Developer Friendly</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Integrates with your development workflow seamlessly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">How WrapTalk Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 font-bold text-xl">
                  1
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Wrap Your Text</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Wrap your text in{" "}
                  <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">&lt;TranslateThis&gt;</code>{" "}
                  components with unique identifiers
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 font-bold text-xl">
                  2
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Run CLI Command</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Execute <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">npx wraptalk run</code> to
                  scan your codebase and generate translations
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4 font-bold text-xl">
                  3
                </div>
                <h4 className="font-bold mb-2 text-gray-800 dark:text-white">Deploy & Enjoy</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Your app now supports multiple languages with zero runtime overhead
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

