import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalDetails } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const HudOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Minimal reveal for typography
      gsap.from(".overview-text-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Subtle weight shift on scroll
      gsap.to(".overview-weight-shift", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        },
        fontWeight: 900,
        letterSpacing: "0.05em",
        ease: "none"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="py-60 px-6 md:px-20 bg-[#050505] relative overflow-hidden"
    >
      {/* HUD Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col gap-12">
          
          <div className="overview-text-reveal">
             <span className="font-mono text-xs font-bold text-accent tracking-[0.5em] uppercase mb-8 block">
               [ SYSTEM_CORE_SUMMARY ]
             </span>
             
             <h2 className="overview-weight-shift text-5xl md:text-8xl font-display font-light text-white leading-[0.9] uppercase tracking-tighter transition-all duration-700 hover:font-black hover:italic cursor-default">
               Decoding <span className="font-black italic text-accent">Complexity</span> Into <br />
               Seamless <span className="stroke-text-white font-black">Performance</span>
             </h2>
          </div>

          <div className="overview-text-reveal mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <p className="text-2xl md:text-4xl font-body font-light text-gray-300 leading-tight">
                {personalDetails.summary}
              </p>
            </div>
            
            <div className="md:col-span-4 flex flex-col md:items-end gap-2">
               <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Auth_Level: Advanced</span>
               <div className="h-[2px] w-20 bg-accent" />
            </div>
          </div>

          {/* Decorative Corner Brackets */}
          <div className="absolute top-[-20px] left-[-20px] w-12 h-12 border-t border-l border-white/10" />
          <div className="absolute bottom-[-20px] right-[-20px] w-12 h-12 border-b border-r border-white/10" />

        </div>
      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
        .stroke-text-white:hover {
          color: white;
          -webkit-text-stroke: 0px;
        }
      `}</style>
    </section>
  );
};

export default HudOverview;
