import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { personalDetails } from '../data/portfolio';

const MinimalHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="overflow-hidden mb-4">
          <span className="hero-reveal block text-sm font-medium tracking-[0.2em] uppercase text-gray-500">
            Portfolio 2026
          </span>
        </div>

        <h1 className="text-hero mb-12">
          <span className="hero-reveal block">Crafting digital</span>
          <span className="hero-reveal block italic text-gray-400">identities</span>
          <span className="hero-reveal block">through code.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-gray-100 dark:border-white/5 pt-12">
          <div className="md:col-span-8 overflow-hidden">
            <p className="hero-reveal text-2xl md:text-3xl leading-snug font-medium text-gray-700 dark:text-gray-300">
              I’m {personalDetails.name}, an {personalDetails.role} currently 
              at <span className="underline decoration-1 underline-offset-8 decoration-gray-300">{personalDetails.company}</span>.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end items-end hero-reveal">
            <a href="#projects" className="group flex items-center gap-4 text-lg font-medium">
              See Works
              <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                &darr;
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
