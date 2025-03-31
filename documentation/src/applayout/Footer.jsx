import React from "react";
import {Link} from "react-router-dom";

function Footer({ version = "1.0.0" }) {
  return (
    <footer className="py-6 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-semibold">wraptalk</span>
            <span className="mx-2 text-gray-500 dark:text-gray-400">•</span>
            <span className="text-sm">v{version}</span>
          </div>

          <nav className="flex space-x-6">
            <Link
              to= "how-it-works"
              className="hover:text-blue-600 dark:hover:text-blue-300 transition duration-200"
            >
              Docs
            </Link>
            <a
              href="https://github.com/wraptalk/wraptalk"
              className="hover:text-blue-600 dark:hover:text-blue-300 transition duration-200"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Wraptalk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
