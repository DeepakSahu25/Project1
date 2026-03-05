import { ExternalLink, Github } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await api.get('/projects');
      return data;
    }
  });

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
          {isLoading && <p className="text-center text-gray-400 font-mono animate-pulse">Loading Archives...</p>}
          
          {projects?.map((project: any, index: number) => (
            <FadeIn key={project._id} direction={index % 2 === 0 ? "right" : "left"} delay={0.1}>
              <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 lg:gap-16`}>
                
                {/* Project Image */}
                <div className="w-full md:w-1/2 relative group perspective-1000">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-cyber-blue)] to-[var(--color-cyber-purple)] rounded-lg blur opacity-20 group-hover:opacity-60 transition duration-500" style={{ backgroundImage: `linear-gradient(to right, transparent, ${project.color || 'var(--color-cyber-blue)'})` }}></div>
                  
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
                  
                  <ul className={`flex flex-wrap gap-4 font-mono text-xs mb-8 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`} style={{ color: project.color || 'var(--color-cyber-purple)' }}>
                    {project.tech.map((tech: string) => (
                      <li key={tech} className="bg-[rgba(176,38,255,0.1)] px-2 py-1 rounded border" style={{ borderColor: `${project.color}50` }}>{tech}</li>
                    ))}
                  </ul>
                  
                  <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'md:justify-end' : 'justify-start'}`}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" style={{ hover: { color: project.color } } as any}>
                        <Github size={24} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" style={{ hover: { color: project.color } } as any}>
                        <ExternalLink size={24} />
                      </a>
                    )}
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
