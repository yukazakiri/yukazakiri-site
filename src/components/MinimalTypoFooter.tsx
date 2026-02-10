import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { personalDetails } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiTwitter, FiCpu, FiGlobe } from 'react-icons/fi';

const MinimalTypoFooter: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Magnetic Brand Signature Interaction
      const brand = document.querySelector('.brand-highlight-trigger');
      
      const onMouseMove = (e: MouseEvent) => {
        if (!brand) return;
        const rect = brand.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to('.brand-display-text', {
          x: x * 0.15,
          y: y * 0.1,
          skewX: x * 0.05,
          duration: 0.6,
          ease: "power2.out"
        });

        gsap.to('.brand-highlight-box', {
          x: x * 0.2,
          y: y * 0.05,
          width: '100%',
          opacity: 0.2,
          duration: 0.4
        });
      };

      const onMouseLeave = () => {
        gsap.to('.brand-display-text', { x: 0, y: 0, skewX: 0, duration: 1, ease: "elastic.out(1, 0.4)" });
        gsap.to('.brand-highlight-box', { width: '0%', opacity: 0, duration: 0.6 });
      };

      brand?.addEventListener('mousemove', onMouseMove as any);
      brand?.addEventListener('mouseleave', onMouseLeave as any);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={containerRef} className="bg-[#050505] pt-40 pb-12 px-6 md:px-20 relative overflow-hidden border-t border-white/5 transition-colors">
      {/* Visual Decor: Scanning lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[size:100%_4px] bg-[linear-gradient(transparent_50%,#fff_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top: Metadata & Comms */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 items-start">
          
          <div className="md:col-span-5 space-y-4">
             <div className="flex items-center gap-2 text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-4">
                <FiCpu className="animate-pulse" />
                COMMS_ESTABLISHED
             </div>
              <a href="mailto:yukazaki@koamishin.org" className="text-2xl md:text-4xl font-display font-black text-white hover:text-accent transition-colors duration-500 uppercase tracking-tighter">
                 yukazaki@koamishin.org
              </a>
          </div>

          <div className="md:col-span-4 space-y-6">
             <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">SYSTEM_INDEX</span>
             <div className="grid grid-cols-2 gap-4">
               {['Hero', 'Works', 'Logs', 'Secure'].map((link) => (
                 <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-bold uppercase text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                   <span className="w-1 h-1 bg-white/20 group-hover:bg-accent rounded-full transition-colors" />
                   {link}
                 </a>
               ))}
             </div>
          </div>

          <div className="md:col-span-3 md:text-right space-y-6">
             <span className="font-mono text-[10px] text-gray-500 tracking-[0.4em] uppercase">UPLINK_CHANNELS</span>
             <div className="flex gap-6 md:justify-end">
               {Object.entries(personalDetails.socials).map(([key, url]) => (
                 <a 
                   key={key} 
                   href={url} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label={`Visit my ${key}`}
                   className="p-3 border border-white/10 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300"
                 >
                   {key === 'github' ? <FiGithub size={20} /> : key === 'linkedin' ? <FiLinkedin size={20} /> : <FiTwitter size={20} />}
                 </a>
               ))}
             </div>
          </div>

        </div>

        {/* Bottom: Massive Brand Signature (Unique Focus) */}
        <div className="brand-highlight-trigger relative group cursor-crosshair">
          {/* Highlighter Box */}
          <div className="brand-highlight-box absolute bottom-[10%] left-0 w-0 h-[40%] bg-accent opacity-0 z-0 pointer-events-none" />
          
          <h2 className="brand-display-text text-[10vw] leading-[0.75] font-display font-black uppercase tracking-tighter relative z-10 text-white select-none whitespace-nowrap mb-4">
            {personalDetails.name}
          </h2>

          <div className="mt-4 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-10">
            <div className="flex items-center gap-4 text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">
               <FiGlobe /> 14.5995 N, 120.9842 E
            </div>
            
            <div className="text-right font-mono text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
               &copy; {new Date().getFullYear()} // {personalDetails.name.toUpperCase()} <br />
               ENCRYPTED_DATA_TRANSMISSION
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default MinimalTypoFooter;
