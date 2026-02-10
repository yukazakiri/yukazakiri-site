import React from 'react';
import { personalDetails } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const MinimalFooter: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-20 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-8">
           <h2 className="text-display-giant mb-12 font-display">Let's work<br/><span className="italic font-light">together</span>.</h2>
           <a href="mailto:hello@yukizaki.dev" className="text-3xl md:text-5xl font-display font-medium underline decoration-1 underline-offset-[12px] hover:text-gray-500 transition-colors">
              hello@yukizaki.dev
           </a>
        </div>
        
        <div className="md:col-span-4 w-full flex flex-col items-start md:items-end gap-12">
          <div className="flex gap-8">
            {Object.entries(personalDetails.socials).map(([key, url]) => {
              const Icon = key === 'github' ? FiGithub : key === 'linkedin' ? FiLinkedin : FiTwitter;
              return (
                <a key={key} href={url} target="_blank" className="text-2xl hover:text-gray-400 transition-all hover:scale-110">
                  <Icon />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400 font-medium font-body">
             <span>&copy; {new Date().getFullYear()} {personalDetails.name}</span>
             <span>Available globally.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;
