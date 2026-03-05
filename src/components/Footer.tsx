import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-panel py-8 mt-20 border-b-0 border-x-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold font-mono text-gradient">
              &lt;DEV/&gt;
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-[rgba(0,240,255,0.2)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {currentYear} Developer Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm font-mono text-[var(--color-cyber-blue)]">
              SYSTEM.STATUS: <span className="text-green-400 glow-text-blue">ONLINE</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
