import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-900 dark:to-gray-800 border-t border-purple-200 dark:border-gray-700">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        {/* ================= PAGES ================= */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Pages
          </h3>

          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li><a href="#home" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* ================= SOCIAL ================= */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Connect
          </h3>

          <div className="flex gap-6 text-gray-600 dark:text-gray-300">
            
            <a
              href="https://github.com/Soliana109/IBT-Codeop"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black dark:hover:text-white transition flex items-center gap-2"
            >
              <FaGithub size={22} />
              <span className="text-sm">GitHub</span>
            </a>

          </div>

          
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-purple-200 dark:border-gray-700 py-5 text-center text-sm text-gray-600 dark:text-gray-400">
        Built by <span className="font-semibold text-gray-900 dark:text-white">Soliana A.</span> © {new Date().getFullYear()}
      </div>

    </footer>
  );
};

export default Footer;