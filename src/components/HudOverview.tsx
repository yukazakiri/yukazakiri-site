import React, { useRef, useLayoutEffect, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalDetails } from '../data/portfolio';
import { FiCpu, FiActivity, FiCornerDownRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Interactive3DTitle = ({ text, className }: { text: string, className?: string }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const titleEl = titleRef.current;
        if (!titleEl) return;

        // Split text
        const chars = text.split('');
        titleEl.innerHTML = '';
        chars.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            span.style.transformStyle = 'preserve-3d';
            titleEl.appendChild(span);
        });

        const childSpans = titleEl.querySelectorAll('span');

        const ctx = gsap.context(() => {
            gsap.fromTo(childSpans, 
                { opacity: 0, rotateX: 90, y: 50, z: -100 },
                { 
                    opacity: 1, 
                    rotateX: 0, 
                    y: 0, 
                    z: 0, 
                    stagger: 0.05, 
                    duration: 1, 
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: titleEl,
                        start: "top 85%",
                    }
                }
            );

            const onMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth) - 0.5;
                const y = (e.clientY / window.innerHeight) - 0.5;

                childSpans.forEach((span, i) => {
                    gsap.to(span, {
                        rotateX: -y * 30,
                        rotateY: x * 30,
                        z: Math.abs(x) * 50,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                });
            };

            window.addEventListener('mousemove', onMouseMove);
            return () => window.removeEventListener('mousemove', onMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, [text]);

    return (
        <div ref={containerRef} className={`perspective-container ${className}`}>
            <h2 ref={titleRef} className="transform-style-3d cursor-default">
                {text}
            </h2>
        </div>
    );
};

const HudOverview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".grid-line-anim", {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
        }
      });

      const summaryText = document.querySelector('.terminal-summary');
      if (summaryText) {
          const text = personalDetails.summary;
          summaryText.textContent = '';
          
          ScrollTrigger.create({
              trigger: containerRef.current,
              start: "top 60%",
              onEnter: () => {
                  let i = 0;
                  const typeInterval = setInterval(() => {
                      if (i < text.length) {
                          summaryText.textContent += text.charAt(i);
                          i++;
                      } else {
                          clearInterval(typeInterval);
                      }
                  }, 20); 
              },
              once: true
          });
      }

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="about" 
      className="min-h-screen py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100%] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-px h-full bg-accent/20 grid-line-anim scale-y-0 origin-top" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-accent/20 grid-line-anim scale-y-0 origin-bottom" />

      <div className="max-w-[1600px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8 flex items-center gap-4 text-accent font-mono text-xs tracking-widest">
                <FiActivity className="animate-pulse" />
                [ SYSTEM_CORE_SUMMARY ]
            </div>
            
            <div className="space-y-4">
                <Interactive3DTitle 
                    text="DECODING" 
                    className="text-7xl md:text-9xl font-display font-black text-white leading-[0.85] tracking-tighter" 
                />
                <Interactive3DTitle 
                    text="COMPLEXITY" 
                    className="text-7xl md:text-9xl font-display font-black text-transparent stroke-text-white leading-[0.85] tracking-tighter" 
                />
                <div className="flex items-center gap-4">
                    <div className="h-2 w-24 bg-accent" />
                    <Interactive3DTitle 
                        text="INTO_PERFORMANCE" 
                        className="text-4xl md:text-6xl font-display font-bold text-white leading-none tracking-tight mix-blend-difference" 
                    />
                </div>
            </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="bg-[#0A0A0A] border border-white/10 p-8 relative group hover:border-accent/50 transition-colors duration-500">
                
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">
                        usr/bin/yukazaki_bio.exe
                    </span>
                </div>

                <div className="font-mono text-sm md:text-base text-gray-400 leading-relaxed min-h-[200px]">
                    <span className="text-accent mr-2">root@system:~$</span>
                    <span className="terminal-summary text-white">
                    </span>
                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                    <div>
                        <span className="block font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">Current_Role</span>
                        <div className="text-white font-bold flex items-center gap-2">
                            <FiCornerDownRight className="text-accent" /> {personalDetails.role}
                        </div>
                    </div>
                    <div>
                        <span className="block font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">System_Auth</span>
                        <div className="text-accent font-bold flex items-center gap-2">
                            <FiCpu /> ADMIN_ACCESS_GRANTED
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>

      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
        }
        .perspective-container {
            perspective: 1000px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default HudOverview;