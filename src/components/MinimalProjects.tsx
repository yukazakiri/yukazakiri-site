import React from 'react';
import { projects } from '../data/portfolio';
import { FiArrowUpRight } from 'react-icons/fi';

const MinimalProjects: React.FC = () => {
  return (
    <section id="projects" className="py-40 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="text-section-title">Selected<br/>Works</h2>
          <span className="text-sm font-medium text-gray-400 uppercase tracking-widest hidden md:block">
            {projects.length} PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <a 
              key={i} 
              href={project.link} 
              target="_blank" 
              className="group flex flex-col gap-8 hover-lift"
            >
              <div className="aspect-[4/3] bg-gray-100 dark:bg-[#111] overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                  <span className="text-8xl font-black italic">{project.title[0]}</span>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white dark:bg-black flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                   <FiArrowUpRight className="text-black dark:text-white text-xl" />
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <h3 className="text-3xl font-display font-medium group-hover:text-gray-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    {project.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="text-xs font-medium uppercase tracking-widest text-gray-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalProjects;
