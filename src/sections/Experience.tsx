import FadeIn from '../components/FadeIn';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Nexus Tech',
    period: '2022 - Present',
    description: [
      'Architected and led the development of a next-gen dashboard using React and WebGL.',
      'Improved application performance by 40% through code splitting and memoization.',
      'Mentored junior developers and established coding standards across the frontend team.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Cyberdyne Systems',
    period: '2020 - 2022',
    description: [
      'Developed robust REST APIs using Node.js and Express for enterprise clients.',
      'Integrated Stripe payment gateways handling $1M+ in monthly transactions.',
      'Migrated legacy monolithic applications to microservices architecture.'
    ]
  },
  {
    role: 'UI/UX Developer',
    company: 'Virtual Dynamics',
    period: '2018 - 2020',
    description: [
      'Designed and implemented interactive user interfaces using modern CSS and React.',
      'Collaborated closely with designers to translate Figma mockups into pixel-perfect code.',
      'Created a comprehensive component library used across multiple company projects.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[var(--color-cyber-dark)] overflow-hidden">
      {/* Background circuit lines placeholder */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-blue)] pb-2 mb-4 text-white">
              <span className="text-[var(--color-cyber-purple)]">04.</span> LOGS
            </h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-4">
              Retrieving employment history...
            </p>
          </div>
        </FadeIn>

        <div className="relative border-l-2 border-[var(--color-cyber-purple)] pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[var(--color-cyber-purple)] via-[var(--color-cyber-blue)] to-transparent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <FadeIn key={index} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.2} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:left-1/2 w-6 h-6 rounded-full bg-[var(--color-cyber-dark)] border-2 border-[var(--color-cyber-blue)] transform md:-translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-purple)] animate-pulse"></div>
              </div>

              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12"></div>
                
                <div className={`md:w-5/12 glass-panel p-6 rounded-lg border-t-2 border-t-[var(--color-cyber-blue)] hover:border-t-[var(--color-cyber-purple)] transition-colors duration-300 relative group`}>
                  {/* Subtle glow behind card */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-cyber-blue)] to-[var(--color-cyber-purple)] rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[var(--color-cyber-blue)] transition-colors">{exp.role}</h3>
                      <Briefcase className="text-[var(--color-cyber-purple)] opacity-50" size={20} />
                    </div>
                    
                    <h4 className="text-lg font-mono text-[var(--color-cyber-purple)] mb-1">{exp.company}</h4>
                    <span className="inline-block px-2 py-1 bg-[rgba(255,255,255,0.05)] rounded text-xs font-mono text-gray-400 mb-4 border border-gray-700">{exp.period}</span>
                    
                    <ul className="space-y-2 text-sm text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[var(--color-cyber-blue)] mr-2 mt-1">▹</span>
                          <span className="leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
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
