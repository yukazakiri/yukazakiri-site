import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../data/portfolio';
import { FiChevronRight, FiDatabase } from 'react-icons/fi';

const HudExperience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="w-full py-24 px-4 md:px-8 bg-[#050505] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 h-full w-[1px] bg-white/10" />
      <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10" />
      
      <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4 relative z-10">
        <FiDatabase className="text-accent text-2xl" />
        <h2 className="text-2xl md:text-4xl font-display uppercase tracking-widest text-white">
          <span className="text-accent mr-2">///</span> 
          System_Logs
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* Timeline Navigation (Left) */}
        <div className="md:w-1/3 flex flex-col gap-2">
          {experience.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                group relative p-4 text-left border border-white/10 transition-all duration-300
                ${activeIndex === index ? 'bg-white/10 border-accent' : 'hover:bg-white/5'}
              `}
            >
              <div className="flex justify-between items-center mb-2">
                <span className={`font-mono text-xs ${activeIndex === index ? 'text-accent' : 'text-gray-500'}`}>
                  LOG_ENTRY_0{index + 1}
                </span>
                {activeIndex === index && <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />}
              </div>
              <h3 className={`font-display font-bold text-lg ${activeIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {exp.company}
              </h3>
              
              {/* Active Marker */}
              {activeIndex === index && (
                <motion.div 
                  layoutId="active-marker"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Detail View (Right) - Terminal Style */}
        <div className="md:w-2/3 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-black/60 border border-white/20 p-8 h-full relative overflow-hidden backdrop-blur-md"
              >
                {/* Terminal Header */}
                <div className="flex justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="font-mono text-xs text-accent">STATUS: DECRYPTED</span>
                  <span className="font-mono text-xs text-gray-500">202X - PRESENT</span>
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  {experience[activeIndex].role}
                </h3>
                <p className="font-mono text-sm text-gray-400 mb-8">
                  @{experience[activeIndex].company} // {experience[activeIndex].duration || 'Unknown Duration'}
                </p>

                <ul className="space-y-4 font-mono text-sm text-gray-300">
                  {experience[activeIndex].responsibilities.map((resp, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      className="flex items-start gap-3 hover:text-accent transition-colors cursor-default"
                    >
                      <FiChevronRight className="mt-1 text-accent flex-shrink-0" />
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative Scanline */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.02)_50%)] bg-[size:100%_4px] pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HudExperience;
