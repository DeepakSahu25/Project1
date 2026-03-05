import { ExternalLink, Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const projects = [
  {
    title: 'Neon E-Commerce',
    description: 'A fully functional futuristic e-commerce platform built with Next.js, Stripe integration, and Framer Motion page transitions. Features a dark mode UI with neon accents.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    links: { github: '#', live: '#' },
    color: '#00f0ff'
  },
  {
    title: 'Cyber Dashboard',
    description: 'Real-time data visualization dashboard for server metrics. Utilizes WebSockets for live updates and D3.js for complex, animated charts in a cyberpunk theme.',
    tech: ['React', 'D3.js', 'Socket.io', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    links: { github: '#', live: '#' },
    color: '#b026ff'
  },
  {
    title: 'Immersive Portfolio',
    description: 'A 3D interactive portfolio site featuring a playable character navigating through different sections representing skills and projects. Built heavily on React Three Fiber.',
    tech: ['Three.js', 'React Three Fiber', 'Blender'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    links: { github: '#', live: '#' },
    color: '#00f0ff'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[var(--color-cyber-gray)]">
      {/* Background glitch effect placeholder */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[var(--color-cyber-dark)] to-transparent opacity-80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-purple)] pb-2 mb-4">
              <span className="text-[var(--color-cyber-blue)]">03.</span> ARCHIVES
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest mt-4">
              Accessing classified project files...
            </p>
          </div>
        </FadeIn>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <FadeIn key={project.title} direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                
                {/* Project Image */}
                <div className="w-full md:w-1/2 relative group perspective-1000">
                  <div className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-[var(--color-cyber-blue)] to-transparent' : 'from-[var(--color-cyber-purple)] to-transparent'} rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
                  
                  <div className="relative glass-panel rounded-lg overflow-hidden border border-gray-700 group-hover:border-[var(--color-cyber-blue)] transition-colors duration-300 transform group-hover:scale-[1.02]">
                    <div className="aspect-video bg-gray-900 relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
                      />
                      {/* Scanline overlay */}
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'text-left'}`}>
                  <h3 className="text-sm font-mono text-[var(--color-cyber-blue)] mb-2 uppercase tracking-widest">Featured Project</h3>
                  <h4 className="text-3xl font-bold text-white mb-6 group-hover:text-[var(--color-cyber-purple)] transition-colors">{project.title}</h4>
                  
                  <div className={`glass-panel p-6 rounded mb-6 text-gray-300 relative z-20 ${index % 2 !== 0 ? 'md:-ml-12' : 'md:-mr-12'} shadow-2xl backdrop-blur-md`}>
                    <p className="leading-relaxed text-sm md:text-base">{project.description}</p>
                  </div>
                  
                  <ul className={`flex flex-wrap gap-4 font-mono text-xs text-[var(--color-cyber-purple)] mb-8 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                    {project.tech.map(tech => (
                      <li key={tech} className="bg-[rgba(176,38,255,0.1)] px-2 py-1 rounded border border-[rgba(176,38,255,0.3)]">{tech}</li>
                    ))}
                  </ul>
                  
                  <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                    <a href={project.links.github} className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.links.live} className="text-gray-400 hover:text-[var(--color-cyber-blue)] transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
