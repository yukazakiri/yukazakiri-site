import React from 'react';
import { personalDetails } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUpRight, FiCommand, FiActivity } from 'react-icons/fi';

const BlueprintFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#080808] text-white pt-32 pb-12 px-6 md:px-20 overflow-hidden border-t-2 border-white/10">
      {/* CAD Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Background Watermark Name */}
      <div className="absolute bottom-[-10%] right-[-5%] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black uppercase leading-none opacity-[0.02] tracking-tighter">
          {personalDetails.name}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Section 01: The Pitch */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6 opacity-40">
                <span className="font-mono text-xs tracking-widest">[ 03 / SIGN_OFF ]</span>
                <div className="h-[1px] w-24 bg-white" />
              </div>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.85] tracking-tighter">
                Ready to <span className="text-transparent stroke-text-white hover:text-white transition-all duration-500">Initiate</span><br />
                Collaboration?
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <a 
                href="mailto:hello@yukizaki.dev" 
                className="group flex items-center gap-6 px-8 py-6 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
              >
                <span className="text-2xl md:text-4xl font-display font-bold uppercase z-10">Deploy Message</span>
                <FiArrowUpRight className="text-4xl group-hover:rotate-45 transition-transform z-10" />
                <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              
              <div className="font-mono text-sm space-y-1 opacity-50">
                 <p>// SYSTEM_ID: {personalDetails.name.toUpperCase()}</p>
                 <p>// STATUS: OPEN_FOR_QUERIES</p>
              </div>
            </div>
          </div>

          {/* Section 02: Connections & Stats */}
          <div className="lg:col-span-4 flex flex-col gap-16 md:flex-row lg:flex-col justify-between">
            
            <div className="space-y-8">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gray-500 block">Communication_Nodes</span>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(personalDetails.socials).map(([key, url]) => (
                  <a 
                    key={key} 
                    href={url} 
                    target="_blank" 
                    className="group flex items-center justify-between p-4 border border-white/10 hover:border-white transition-all"
                  >
                    <span className="font-display font-bold uppercase text-lg group-hover:tracking-widest transition-all">{key}</span>
                    <div className="w-8 h-8 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                      {key === 'github' ? <FiGithub /> : key === 'linkedin' ? <FiLinkedin /> : <FiTwitter />}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/5 bg-white/[0.02] space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-mono text-[10px] text-gray-500">SYSTEM_METRICS</span>
                <FiActivity className="text-green-500 animate-pulse" />
              </div>
              <div className="space-y-2 font-mono text-[10px] text-gray-400">
                 <div className="flex justify-between">
                    <span>UPTIME</span>
                    <span className="text-white">99.998%</span>
                 </div>
                 <div className="flex justify-between">
                    <span>LOCATION</span>
                    <span className="text-white">PHL // 14.5995 N</span>
                 </div>
                 <div className="flex justify-between">
                    <span>KERNEL</span>
                    <span className="text-white">V.2.0.26_STABLE</span>
                 </div>
              </div>
            </div>

          </div>
        </div>

        {/* Legal Bar */}
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <div className="flex items-center gap-4">
            <FiCommand className="text-accent" />
            <span>&copy; {new Date().getFullYear()} Yukizaki_Core_Identity</span>
          </div>
          <div className="flex gap-12">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy_Protocol</span>
            <span className="hover:text-white cursor-pointer transition-colors">Term_Of_Use</span>
          </div>
        </div>

      </div>

      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
      `}</style>
    </footer>
  );
};

export default BlueprintFooter;
