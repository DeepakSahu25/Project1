import FadeIn from '../components/FadeIn';
import { Terminal, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--color-cyber-gray)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-purple)] pb-2 mb-4">
              <span className="text-[var(--color-cyber-blue)]">01.</span> ABOUT_ME
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest mt-4">
              Initializing biological interface... Loading developer profile...
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-cyber-blue)] to-[var(--color-cyber-purple)] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-panel p-8 rounded-lg">
                <div className="w-full aspect-square bg-gray-800 rounded-md overflow-hidden relative">
                  {/* Placeholder for actual image */}
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cyberpunk Developer" 
                    className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                  />
                  <div className="absolute inset-0 border-2 border-[var(--color-cyber-blue)] m-2 rounded pointer-events-none opacity-50"></div>
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 font-mono text-[var(--color-cyber-blue)] text-xs border border-[var(--color-cyber-blue)]">
                    SYS.V_1.0
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-6 text-gray-300">
              <h3 className="text-2xl font-bold text-white mb-4">System Architect & Creative Developer</h3>
              
              <p className="leading-relaxed">
                I am a highly driven full-stack developer with a passion for building scalable, high-performance web applications. My expertise spans the entire development stack, from crafting pixel-perfect, animated user interfaces to designing robust backend architectures.
              </p>
              
              <p className="leading-relaxed">
                I specialize in creating immersive digital experiences. By merging advanced front-end technologies like React and Framer Motion with 3D web graphics via Three.js, I build interfaces that don't just function—they captivate.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-panel p-4 flex items-start gap-3 rounded border-l-2 border-l-[var(--color-cyber-blue)]">
                  <Terminal className="text-[var(--color-cyber-blue)] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white text-sm">Frontend Mastery</h4>
                    <p className="text-xs text-gray-400 mt-1">React, Next.js, 3D Web</p>
                  </div>
                </div>
                <div className="glass-panel p-4 flex items-start gap-3 rounded border-l-2 border-l-[var(--color-cyber-purple)]">
                  <Cpu className="text-[var(--color-cyber-purple)] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-white text-sm">Backend Architecture</h4>
                    <p className="text-xs text-gray-400 mt-1">Node, Python, Databases</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
