import FadeIn from '../components/FadeIn';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-cyber-gray)]">
      {/* Dynamic scanline effect */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-purple)] pb-2 mb-4 text-white">
              <span className="text-[var(--color-cyber-blue)]">07.</span> COMM_LINK
            </h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-4">
              Establishing secure connection...
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <FadeIn direction="right">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Build Something <span className="text-gradient">Epic</span></h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Currently open for new opportunities. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 glass-panel p-4 rounded-lg group hover:border-[var(--color-cyber-blue)] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[var(--color-cyber-blue)] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-white font-medium group-hover:text-[var(--color-cyber-blue)] transition-colors">hello@developer.io</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass-panel p-4 rounded-lg group hover:border-[var(--color-cyber-purple)] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[rgba(176,38,255,0.1)] flex items-center justify-center text-[var(--color-cyber-purple)] group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                    <p className="text-white font-medium group-hover:text-[var(--color-cyber-purple)] transition-colors">Neo-Tokyo, Cyberspace</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 glass-panel p-4 rounded-lg group hover:border-[var(--color-cyber-blue)] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,240,255,0.1)] flex items-center justify-center text-[var(--color-cyber-blue)] group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                    <p className="text-white font-medium group-hover:text-[var(--color-cyber-blue)] transition-colors">+1 (555) 010-1101</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <form className="glass-panel p-8 rounded-lg relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.05)] to-[rgba(176,38,255,0.05)] opacity-50 z-0"></div>
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-[var(--color-cyber-blue)] mb-2 uppercase tracking-wider">Name_</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[var(--color-cyber-dark)] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-blue)] focus:ring-1 focus:ring-[var(--color-cyber-blue)] transition-all placeholder-gray-500 font-mono"
                    placeholder="Enter your designation"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-[var(--color-cyber-purple)] mb-2 uppercase tracking-wider">Email_</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[var(--color-cyber-dark)] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-[var(--color-cyber-purple)] focus:ring-1 focus:ring-[var(--color-cyber-purple)] transition-all placeholder-gray-500 font-mono"
                    placeholder="Provide comm-link address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-white mb-2 uppercase tracking-wider">Message_Payload_</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full bg-[var(--color-cyber-dark)] border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder-gray-500 font-mono resize-none"
                    placeholder="Input data transmission here..."
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full flex items-center justify-center py-4 px-6 bg-transparent border-2 border-[var(--color-cyber-blue)] text-[var(--color-cyber-blue)] font-bold rounded font-mono uppercase tracking-widest hover:bg-[rgba(0,240,255,0.1)] hover:glow-blue transition-all duration-300 gap-2 group/btn"
                >
                  TRANSMIT <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
