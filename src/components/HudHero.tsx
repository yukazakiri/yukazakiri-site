import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { personalDetails } from '../data/portfolio';
import { FiArrowDown, FiCpu, FiGrid } from 'react-icons/fi';

const HudHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Grid Animation: Infinite flow
      gsap.to(".grid-lines", {
        backgroundPosition: "0px 100px",
        duration: 2,
        repeat: -1,
        ease: "linear"
      });

      // 2. Mouse Parallax for the 'HUD' layer
      const onMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 2;
        const y = (clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".hud-layer", {
          rotateY: x * 5,
          rotateX: -y * 5,
          duration: 1,
          ease: "power2.out"
        });
        
        gsap.to(".floating-data", {
          x: x * 30,
          y: y * 30,
          duration: 1.5,
          ease: "power2.out"
        });
      };
      window.addEventListener('mousemove', onMouseMove);

      // 3. Intro Animation sequence
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      
      tl.from(".hud-border", { scaleX: 0, duration: 1.5 })
        .from(".hero-title-char", { 
          opacity: 0, 
          y: 50, 
          stagger: 0.05, 
          duration: 1,
          ease: "back.out(1.7)" 
        }, "-=1")
        .from(".hud-meta", { opacity: 0, duration: 1 }, "-=0.5");

      return () => window.removeEventListener('mousemove', onMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative h-screen w-full overflow-hidden bg-[#050505] text-white perspective-container pt-20"
    >
      {/* Dynamic Grid Floor */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none transform-style-3d"
        style={{ perspective: '1000px' }}
      >
        <div className="grid-lines absolute inset-[-100%] w-[300%] h-[300%] bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:50px_50px] transform rotate-x-[60deg] translate-z-[-200px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
      </div>

      {/* Main HUD Container */}
      <div className="hud-layer relative z-10 w-full h-full flex flex-col justify-center items-center px-4 transform-style-3d">
        
        {/* Floating Data Decor */}
        <div className="absolute top-1/4 left-10 hidden md:flex flex-col gap-2 font-mono text-[10px] text-white/30 floating-data">
          {['SYS_INIT', 'LOADING_MODULES', 'RENDER_CORE', 'V_2.0.26'].map((txt, i) => (
            <span key={i} className="border-l border-white/20 pl-2">{txt}</span>
          ))}
        </div>

        {/* Central Typographic Unit */}
        <div className="relative border border-white/10 bg-black/40 backdrop-blur-sm p-12 md:p-20 rounded-sm hud-border">
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white" />

          {/* Top Label */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050505] px-4 font-mono text-xs tracking-widest text-accent hud-meta flex items-center gap-2">
            <FiCpu /> NEURAL_LINK_ESTABLISHED
          </div>

          <h1 className="text-center flex flex-col items-center">
            <span className="block text-[12vw] leading-[0.8] font-black tracking-tighter mix-blend-difference">
              {personalDetails.name.split('').map((char, i) => (
                <span key={i} className="hero-title-char inline-block">{char === ' ' ? '\u00A0' : char}</span>
              ))}
            </span>
          </h1>

          <div className="mt-8 flex justify-between items-end w-full border-t border-white/20 pt-6 hud-meta">
            <div className="text-left">
              <p className="font-mono text-sm text-gray-400 max-w-xs">
                {personalDetails.role} <br />
                <span className="text-white">@ {personalDetails.company}</span>
              </p>
            </div>
            <div className="text-right">
               <FiGrid className="text-2xl opacity-50" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2 hud-meta">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest opacity-50">SCROLL_TO_ACCESS</span>
        </div>
      </div>

      <style>{`
        .perspective-container { perspective: 1200px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-\\[60deg\\] { transform: rotateX(60deg); }
      `}</style>
    </section>
  );
};

export default HudHero;
