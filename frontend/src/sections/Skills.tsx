import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

export default function Skills() {
  const { data: skills, isLoading } = useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      const { data } = await api.get('/skills');
      return data;
    }
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--color-cyber-dark)]">
      {/* Decorative grid */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(var(--color-cyber-blue) 1px, transparent 1px), linear-gradient(90deg, var(--color-cyber-blue) 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-blue)] pb-2 mb-4 text-white">
              <span className="text-[var(--color-cyber-purple)]">02.</span> TECH_STACK
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest mt-4">
              Querying database for available proficiencies...
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {isLoading && <p className="text-center text-gray-400 font-mono animate-pulse col-span-2">Loading Core Competencies...</p>}
          {skills?.map((skill: any, index: number) => (
            <FadeIn key={skill._id} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
              <div className="glass-panel p-6 rounded-lg relative overflow-hidden group">
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${skill.color})` }}
                />
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-mono font-bold tracking-wider">{skill.name}</span>
                  <span className="text-xs font-mono" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative border border-gray-700">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Floating tech icons area - placeholder for visual balance */}
        <FadeIn delay={0.5}>
          <div className="mt-20 flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Real project would use actual SVGs here */}
            {['React', 'Next.js', 'Vite', 'Node', 'Three.js', 'Tailwind'].map((tech) => (
              <div key={tech} className="px-4 py-2 border border-gray-600 rounded text-gray-400 font-mono text-sm">
                {tech}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
