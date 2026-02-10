import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolio';
import { FiArrowUpRight, FiDisc, FiCpu, FiPlus, FiMinus, FiDatabase } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const ProjectTitle3D = ({ title, isOpen }: { title: string, isOpen: boolean }) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useLayoutEffect(() => {
        const titleEl = titleRef.current;
        if (!titleEl) return;

        const chars = title.split('');
        titleEl.innerHTML = '';
        chars.forEach((char) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.dataset.original = char;
            span.style.display = 'inline-block';
            span.style.transformStyle = 'preserve-3d';
            span.style.whiteSpace = 'pre';
            titleEl.appendChild(span);
        });

        const childSpans = titleEl.querySelectorAll('span');
        const cypherChars = "▓▒░█▄▀■▌▐│║01";

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: titleEl,
                    start: "top 90%",
                },
                onComplete: () => setIsRevealed(true)
            });

            tl.fromTo(childSpans, 
                { 
                    opacity: 0, 
                    z: -800,
                    rotateX: 90,
                    y: 50,
                    filter: "blur(10px)",
                    color: "#00F0FF"
                },
                {
                    opacity: 1,
                    z: 0,
                    rotateX: 0,
                    y: 0,
                    filter: "blur(0px)",
                    color: isOpen ? "#FFFFFF" : "transparent",
                    stagger: {
                        amount: 0.8,
                        from: "start",
                        onStart: function() {
                            // @ts-ignore
                            const target = this.targets()[0];
                            const original = target.dataset.original;
                            
                            let scrambleCount = 0;
                            const scrambleInterval = setInterval(() => {
                                if(scrambleCount > 10) {
                                    clearInterval(scrambleInterval);
                                    target.textContent = original;
                                } else {
                                    target.textContent = cypherChars[Math.floor(Math.random() * cypherChars.length)];
                                    scrambleCount++;
                                }
                            }, 50);
                        }
                    },
                    duration: 1.2,
                    ease: "elastic.out(1, 0.7)"
                }
            );

            const onMouseMove = (e: MouseEvent) => {
                if (!containerRef.current) return;
                
                const { left, top, width, height } = containerRef.current.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                childSpans.forEach((span, i) => {
                    const dist = Math.abs(i - (childSpans.length * (x + 0.5)));
                    const waveZ = Math.max(0, 50 - (dist * 10));
                    
                    gsap.to(span, {
                        rotateX: -y * 45, 
                        rotateY: x * 45,
                        z: waveZ, 
                        duration: 0.4,
                        ease: "power2.out"
                    });
                });
            };

            const onMouseLeave = () => {
                gsap.to(childSpans, {
                    rotateX: 0,
                    rotateY: 0,
                    z: 0,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.5)"
                });
            };

            if (titleEl.closest('button')) {
                titleEl.closest('button')?.addEventListener('mousemove', onMouseMove);
                titleEl.closest('button')?.addEventListener('mouseleave', onMouseLeave);
            }

            return () => {
                if (titleEl.closest('button')) {
                    titleEl.closest('button')?.removeEventListener('mousemove', onMouseMove);
                    titleEl.closest('button')?.removeEventListener('mouseleave', onMouseLeave);
                }
            };

        }, containerRef);

        return () => ctx.revert();
    }, [title]);

    useEffect(() => {
        if (!isRevealed) return;
        const titleEl = titleRef.current;
        if (!titleEl) return;
        
        gsap.to(titleEl.querySelectorAll('span'), {
            color: isOpen ? "#FFFFFF" : "transparent",
            textShadow: isOpen ? "0 0 20px rgba(255,255,255,0.5)" : "none",
            duration: 0.3
        });
    }, [isOpen, isRevealed]);

    return (
        <div ref={containerRef} className="perspective-text-container relative z-20 perspective-1000">
            <h3 
                ref={titleRef}
                className={`text-4xl md:text-7xl font-display font-black uppercase tracking-tighter transform-style-3d cursor-pointer ${isOpen ? 'text-white' : 'text-transparent stroke-text-white'}`}
            >
                {title}
            </h3>
        </div>
    );
};

const ProjectAccordionItem = ({ project, index, isOpen, onClick }: { project: any, index: number, isOpen: boolean, onClick: () => void }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!contentRef.current) return;
        
        if (isOpen) {
            gsap.to(contentRef.current, {
                height: "auto",
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut"
            });
            gsap.to(itemRef.current, {
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "#00F0FF",
                duration: 0.3
            });
        } else {
            gsap.to(contentRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.4,
                ease: "power3.inOut"
            });
            gsap.to(itemRef.current, {
                backgroundColor: "transparent",
                borderColor: "rgba(255, 255, 255, 0.1)",
                duration: 0.3
            });
        }
    }, [isOpen]);

    return (
        <div 
            ref={itemRef}
            className="border-b border-white/10 overflow-hidden transition-colors"
        >
            <button 
                onClick={onClick}
                className="w-full flex items-center justify-between py-8 px-4 md:px-12 group text-left relative"
            >
                <div className="flex items-baseline gap-8">
                    <span className="font-mono text-xs text-gray-500 group-hover:text-accent transition-colors">
                        0{index + 1}
                    </span>
                    <ProjectTitle3D title={project.title} isOpen={isOpen} />
                </div>
                
                <div className="flex items-center gap-4">
                    <span className="hidden md:inline-block font-mono text-xs text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        {isOpen ? 'Close_Stream' : 'Open_Stream'}
                    </span>
                    <div className={`w-8 h-8 flex items-center justify-center border border-white/20 rounded-full transition-all duration-300 ${isOpen ? 'bg-accent border-accent text-black rotate-180' : 'group-hover:border-accent group-hover:text-accent'}`}>
                        {isOpen ? <FiMinus /> : <FiPlus />}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <div ref={contentRef} className="h-0 opacity-0 overflow-hidden">
                <div className="px-4 md:px-12 pb-12 pt-4 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-7">
                        <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl border-l-2 border-accent/50 pl-6">
                            {project.description}
                        </p>
                        
                        <div className="mt-8 flex gap-4">
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-display font-bold uppercase tracking-wider hover:bg-accent transition-colors"
                            >
                                Launch_Project <FiArrowUpRight />
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-5 flex flex-col gap-8 border-t md:border-t-0 md:border-l border-white/10 md:pl-12 pt-8 md:pt-0">
                        <div>
                            <span className="block font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-4">
                                Technology_Stack
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t: string, i: number) => (
                                    <span key={i} className="px-3 py-1 border border-white/20 text-xs font-mono text-gray-300 hover:border-accent hover:text-accent transition-colors cursor-default">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <span className="block font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-2">
                                System_Status
                            </span>
                            <div className="flex items-center gap-2 text-accent font-mono text-xs">
                                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                OPERATIONAL
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HudProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header-items", {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleToggle = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={containerRef} id="projects" className="min-h-screen bg-[#050505] text-white py-32 px-4 md:px-8 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 left-12 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />

        <div className="max-w-[1400px] mx-auto relative z-10">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8 section-header-items">
                <div>
                    <div className="flex items-center gap-3 mb-4 text-accent">
                        <FiDatabase className="animate-pulse" />
                        <span className="font-mono text-xs tracking-[0.2em]">DATA_CARTRIDGES</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] mix-blend-difference">
                        Project <span className="stroke-text-white text-transparent">Index</span>
                    </h2>
                </div>
                
                <div className="text-right hidden md:block">
                    <span className="block font-mono text-xs text-gray-500 mb-1">TOTAL_ENTRIES</span>
                    <span className="font-display font-bold text-4xl">{String(projects.length).padStart(2, '0')}</span>
                </div>
            </div>

            <div className="border-t border-white/10">
                {projects.map((project, i) => (
                    <ProjectAccordionItem 
                        key={i} 
                        project={project} 
                        index={i} 
                        isOpen={openIndex === i}
                        onClick={() => handleToggle(i)}
                    />
                ))}
            </div>

            <div className="mt-24 flex justify-center">
                <div className="flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group">
                    <FiDisc className="text-4xl text-gray-600 group-hover:text-accent group-hover:animate-spin-slow transition-colors" />
                    <span className="font-mono text-xs tracking-widest text-gray-500">LOAD_MORE_DATA</span>
                </div>
            </div>

        </div>

        <style>{`
            .stroke-text-white {
                -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
            }
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-spin-slow {
                animation: spin-slow 4s linear infinite;
            }
        `}</style>
    </section>
  );
};

export default HudProjects;