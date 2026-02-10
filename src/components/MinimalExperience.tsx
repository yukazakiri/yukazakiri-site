import React from 'react';
import { experience } from '../data/portfolio';

const MinimalExperience: React.FC = () => {
  return (
    <section id="experience" className="py-40 px-6 md:px-20 bg-gray-50 dark:bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-section-title mb-32 text-center md:text-left">Journey</h2>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <div key={i} className="group border-t border-gray-200 dark:border-white/5 py-20 flex flex-col md:grid md:grid-cols-12 gap-12 hover:bg-white dark:hover:bg-black transition-colors duration-500 px-8 -mx-8">
              <div className="md:col-span-3">
                 <span className="text-sm font-medium text-gray-400 font-mono tracking-tighter">0{i+1} &mdash; 202X</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-3xl font-display font-medium mb-2">{exp.company}</h3>
                <p className="text-lg text-gray-500">{exp.role}</p>
              </div>
              <div className="md:col-span-5">
                <ul className="space-y-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalExperience;
