
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-ivory-50/80 backdrop-blur-sm border-b border-ivory-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary-600" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" />
              <path d="M50 20 L80 70 L20 70 Z" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
            <span className="text-xl font-mono font-semibold tracking-wider text-gray-900">KEEMIA</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a 
                  href="#services" 
                  className="font-mono text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="font-mono text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="font-mono text-gray-600 hover:text-primary-600 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
