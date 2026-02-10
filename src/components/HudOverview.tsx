<<<<<<< ours
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalDetails } from '../data/portfolio';
import { FiCode, FiServer, FiArrowRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const HudOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal lines with staggered weight shift
      gsap.from(".typo-reveal-line", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        rotate: 2,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });

      // 2. Continuous Font Weight & Style Manipulation on Scroll
      gsap.to(".interactive-weight", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        fontWeight: 900,
        fontStyle: "italic",
        letterSpacing: "0.1em",
        color: "#00F0FF"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="py-60 px-6 md:px-20 bg-[#050505] relative overflow-hidden border-t border-white/5"
    >
      {/* Background Decor: 3D Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[size:60px_60px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Typographic Core Section */}
        <div className="mb-32 max-w-5xl">
          <div className="flex items-center gap-4 mb-12 typo-reveal-line">
             <span className="font-mono text-xs text-accent tracking-[0.6em] uppercase">Transition_Manifesto</span>
             <div className="h-[1px] flex-1 bg-white/10" />
          </div>
          
          <h2 className="interactive-weight text-4xl md:text-7xl font-display font-light text-white leading-[0.9] uppercase tracking-tighter">
            Architecting <span className="font-black italic text-accent">Resilient</span> Solutions <br />
            From <span className="stroke-text-white font-black">Core</span> To <span className="font-black underline decoration-accent">Interface</span>
          </h2>
          
          <p className="typo-reveal-line mt-16 text-2xl md:text-4xl font-body font-light text-gray-400 leading-tight max-w-4xl">
            {personalDetails.summary}
          </p>
        </div>

        {/* Binary Identity Grid (Visualizing the Role Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 typo-reveal-line">
          
          {/* Identity A: Infrastructure */}
          <div className="bg-[#080808] p-12 hover:bg-black transition-colors group">
             <div className="flex justify-between items-start mb-12">
                <div className="p-4 border border-white/10 text-gray-500 group-hover:text-white transition-colors">
                   <FiServer size={32} />
                </div>
                <span className="font-mono text-[10px] text-gray-600 uppercase">Module_01 / Admin</span>
             </div>
             <h3 className="text-3xl font-display font-black text-white mb-6 uppercase">Infrastructure_Root</h3>
             <p className="font-mono text-sm text-gray-500 leading-relaxed">
               Hardened experience in Data Center management, network security protocols, and mission-critical server stability.
             </p>
          </div>

          {/* Identity B: Developer */}
          <div className="bg-[#080808] p-12 hover:bg-[#00F0FF]/5 transition-colors group">
             <div className="flex justify-between items-start mb-12">
                <div className="p-4 border border-accent/20 text-accent group-hover:scale-110 transition-transform">
                   <FiCode size={32} />
                </div>
                <span className="font-mono text-[10px] text-accent uppercase">Module_02 / Web_App</span>
             </div>
             <h3 className="text-3xl font-display font-black text-white mb-6 uppercase">Laravel_Specialist</h3>
             <p className="font-mono text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
               Specializing in high-performance application development, scalable architectures, and elegant technical problem-solving.
             </p>
          </div>

        </div>

        {/* Transition Arrow Decor */}
        <div className="mt-20 flex justify-center typo-reveal-line">
           <div className="flex items-center gap-8 text-white/20 font-mono text-[10px] uppercase tracking-widest">
              <span>Infra_Foundation</span>
              <FiArrowRight className="text-accent animate-pulse" />
              <span className="text-accent font-bold">App_Excellence</span>
           </div>
        </div>

      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
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
|||||||
=======
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
>>>>>>> theirs
