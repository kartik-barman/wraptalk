import { NavLink } from "react-router-dom";
import ToggleThemeButton from "../components/ThemeToggleButton";
import { useState } from "react";
import { Menu, X, Home, Info, Users } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-500 dark:text-purple-400 flex items-center gap-2"
      : "text-gray-900 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-300 transition-colors flex items-center gap-2";

  return (
    <nav className="z-50 fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900">
      <NavLink to="/" className="flex items-center gap-2">
        <span className="text-xl font-bold text-purple-500 dark:text-purple-400">
          WrapTalk
        </span>
      </NavLink>

      <div className="hidden md:flex items-center gap-8">
        <NavLink to="/" className={navLinkClass}>
          <Home size={18} />
          Home
        </NavLink>
        <NavLink to="/about-project" className={navLinkClass}>
          <Info size={18} />
          About the Project
        </NavLink>
        <NavLink to="/about-team" className={navLinkClass}>
          <Users size={18} />
          About Our Team
        </NavLink>
      </div>

      <div className="flex md:hidden items-center gap-4">
        <ToggleThemeButton />
        <button
          onClick={toggleMenu}
          className="p-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="hidden md:block">
        <ToggleThemeButton />
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 flex flex-col bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-white/10 md:hidden shadow-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-purple-500 dark:text-purple-400"
                  : "text-gray-900 dark:text-gray-300"
              } flex items-center gap-3 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Home size={18} />
            Home
          </NavLink>
          <NavLink
            to="/about-project"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-purple-500 dark:text-purple-400"
                  : "text-gray-900 dark:text-gray-300"
              } flex items-center gap-3 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Info size={18} />
            About the Project
          </NavLink>
          <NavLink
            to="/about-team"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-purple-500 dark:text-purple-400"
                  : "text-gray-900 dark:text-gray-300"
              } flex items-center gap-3 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <Users size={18} />
            About Our Team
          </NavLink>
        </div>
      )}
    </nav>
  );
}
