import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import CanvasWrapper from '../components/CanvasWrapper';
import CyberCore from '../components/3d/CyberCore';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[var(--color-cyber-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-[var(--color-cyber-purple)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyber-blue)] bg-[rgba(0,240,255,0.1)] text-[var(--color-cyber-blue)] font-mono text-sm font-semibold w-max mb-4">
              INITIALIZING PROTOCOL...
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Hi, I'm <br/>
              <span className="text-gradient block mt-2">Full-Stack Dev</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl font-mono leading-relaxed">
              &gt; Engineering digital experiences that blur the line between reality and simulation. 
              Specializing in high-performance web applications and immersive 3D interfaces.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="px-8 py-3 bg-transparent border border-[var(--color-cyber-blue)] text-[var(--color-cyber-blue)] font-bold rounded hover:bg-[rgba(0,240,255,0.1)] hover:glow-blue transition-all duration-300 font-mono flex items-center gap-2">
                VIEW_PROJECTS
              </a>
              <a href="#contact" className="px-8 py-3 bg-[var(--color-cyber-purple)] text-white font-bold rounded hover:bg-[#c252ff] transition-all duration-300 font-mono shadow-[0_0_15px_rgba(176,38,255,0.5)] flex items-center gap-2">
                <FileText size={18} /> INITIATE_CONTACT
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[500px] w-full relative hidden lg:block"
          >
            <CanvasWrapper>
              <CyberCore />
            </CanvasWrapper>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-[var(--color-cyber-blue)]"
      >
        <span className="font-mono text-xs mb-2">SCROLL_DOWN</span>
        <ChevronDown />
      </motion.div>
    </section>
  );
}
