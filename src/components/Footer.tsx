
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-slate-800/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" />
                <path d="M50 20 L80 70 L20 70 Z" stroke="currentColor" fill="none" strokeWidth="2" />
              </svg>
              <span className="text-xl font-semibold">KEEMIA</span>
            </div>
            <p className="text-gray-400">
              Transforming ideas into digital reality through the art of modern software alchemy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-500 transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Keemia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
