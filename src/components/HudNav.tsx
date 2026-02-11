import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiActivity, FiGlobe } from 'react-icons/fi';
import { personalDetails } from '../data/portfolio';

const navLinks = [
  { name: 'INDEX', href: '#hero' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'LOGS', href: '#experience' },
  { name: 'COMMS', href: '#contact' },
];

const HudNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 mix-blend-difference text-white">
        <div className="flex justify-between items-center relative">
          {/* Top Border Line with Scanning Effect */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 overflow-hidden">
            <div className="w-1/2 h-full bg-white/50 blur-[2px] animate-scan-fast" />
          </div>

          {/* Logo Area */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="w-10 h-10 border border-white/30 flex items-center justify-center relative overflow-hidden group-hover:border-white transition-colors">
              <span className="font-mono text-xs absolute top-1 left-1 opacity-50">ID</span>
              <FiGlobe className="text-xl animate-pulse-slow" />
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-widest text-sm">{personalDetails.name.toUpperCase()}</span>
              <span className="font-mono text-[10px] opacity-60 tracking-tighter">SYS.VER.2026</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative font-mono text-sm tracking-widest group px-2 py-1"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors">{link.name}</span>
                  <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left z-0" />
                  {/* Decorative brackets appearing on hover */}
                  <span className="absolute -left-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-white font-light">[</span>
                  <span className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-white font-light">]</span>
                </a>
              ))}
            </div>
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <FiActivity className="text-accent" />
              <span className="font-mono text-xs text-accent animate-pulse">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 border border-white/30 hover:bg-white hover:text-black transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - HUD Style */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", ease: "circOut", duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl border-l border-white/20 flex flex-col justify-center items-center"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <nav className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-4xl font-display font-black tracking-tighter text-transparent stroke-text-white hover:text-white transition-all flex items-center gap-4 group"
                >
                  <span className="text-xs font-mono text-white/50">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px white;
        }
        @keyframes scan-fast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-scan-fast {
          animation: scan-fast 2s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default HudNav;
