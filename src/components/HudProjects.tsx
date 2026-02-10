import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { projects } from '../data/portfolio';
import { FiArrowUpRight, FiFolder, FiCpu } from 'react-icons/fi';

const HudProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hover effect for cards to "glitch" or glow
      const cards = gsap.utils.toArray<HTMLElement>('.hud-card');
      
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card.querySelector('.scanline'), {
            opacity: 1,
            duration: 0.3
          });
          gsap.to(card, {
            borderColor: '#00F0FF',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
            duration: 0.3
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card.querySelector('.scanline'), {
            opacity: 0,
            duration: 0.3
          });
          gsap.to(card, {
            borderColor: 'rgba(255,255,255,0.1)',
            boxShadow: 'none',
            duration: 0.3
          });
        });
      });

      // Reveal animation
      gsap.from(".hud-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="projects" className="w-full py-24 px-4 md:px-8 relative bg-[#050505]">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-4">
        <FiFolder className="text-accent text-2xl" />
        <h2 className="text-2xl md:text-4xl font-display uppercase tracking-widest text-white">
          <span className="text-accent mr-2">///</span> 
          Project_Database
        </h2>
        <div className="ml-auto font-mono text-xs text-white/40 hidden md:block">
          INDEXING_COMPLETE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hud-card group relative bg-black/40 border border-white/10 p-6 md:p-8 flex flex-col h-[400px] overflow-hidden transition-all duration-300"
          >
            {/* Holographic Scanline Overlay */}
            <div className="scanline absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent h-[200%] w-full -translate-y-1/2 opacity-0 pointer-events-none animate-scan-slow" />
            
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-accent transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 group-hover:border-accent transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 group-hover:border-accent transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-accent transition-colors" />

            {/* Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <span className="font-mono text-xs text-white/40 border border-white/10 px-2 py-1 rounded group-hover:text-accent group-hover:border-accent/50 transition-colors">
                FILE_0{i + 1}
              </span>
              <FiArrowUpRight className="text-2xl text-white/40 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-sm text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.slice(0, 3).map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-black bg-white/20 group-hover:bg-accent group-hover:text-black transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}

        {/* View Archive Card */}
        <div className="hud-card group relative bg-black/40 border border-white/10 p-8 flex flex-col justify-center items-center h-[400px] overflow-hidden cursor-pointer hover:bg-white/5 transition-colors">
           <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:border-accent group-hover:scale-110 transition-all">
             <FiCpu className="text-2xl text-white/50 group-hover:text-accent" />
           </div>
           <span className="font-display font-bold text-xl text-white group-hover:text-accent tracking-widest uppercase text-center">
             Access Full<br />Archive
           </span>
        </div>
      </div>

      <style>{`
        @keyframes scan-slow {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scan-slow {
          animation: scan-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HudProjects;
