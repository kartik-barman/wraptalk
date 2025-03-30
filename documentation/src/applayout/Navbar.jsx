import { Link } from "react-router-dom";
import ToggleThemeButton from "../components/ThemeToggleButton";

export default function Navbar() {
  return (
    <nav className="z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-purple-500 dark:text-purple-400">
          WrapTalk
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link
          to="#about-project"
          className="text-gray-900 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
        >
          About the Project
        </Link>
        <Link
          to="#about-team"
          className="text-gray-900 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
        >
          About Our Team
        </Link>
        <Link
          to="#contact"
          className="text-gray-900 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors"
        >
          Contact Us
        </Link>
      </div>
      <ToggleThemeButton />
    </nav>
  );
}
