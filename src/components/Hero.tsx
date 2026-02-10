import React from "react";
import { motion } from "framer-motion";
import { personalDetails } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200/20 via-transparent to-transparent dark:from-blue-900/20 animate-spin-slow" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-4 font-display"
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight font-display"
        >
          {personalDetails.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto font-body"
        >
          {personalDetails.role} at {personalDetails.company}
        </motion.p>

        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-body"
        >
           {personalDetails.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {Object.entries(personalDetails.socials).map(([key, url], index) => {
             const Icon = key === 'github' ? FiGithub : key === 'linkedin' ? FiLinkedin : FiTwitter;
             return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label={key}
              >
                <Icon size={24} />
              </a>
             )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <FiArrowDown size={32} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
