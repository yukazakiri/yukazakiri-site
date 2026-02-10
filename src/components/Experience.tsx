import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { FiBriefcase } from 'react-icons/fi';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <span className="absolute -left-4 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 ring-8 ring-white dark:ring-gray-800">
                 <FiBriefcase className="text-blue-600 dark:text-blue-400" size={14} />
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display">{exp.role}</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 sm:mt-0 font-mono">
                  {exp.company}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
