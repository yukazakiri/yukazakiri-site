import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import { FiBookOpen } from 'react-icons/fi';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-start space-x-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex-shrink-0 mt-1">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <FiBookOpen size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex flex-col sm:flex-row sm:space-x-4">
                  <span>{edu.duration}</span>
                  {edu.score && <span className="hidden sm:inline">•</span>}
                  {edu.score && <span>{edu.score}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
