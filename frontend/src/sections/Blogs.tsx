import FadeIn from '../components/FadeIn';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogs = [
  {
    title: 'Optimizing React Three Fiber Performance',
    excerpt: 'Deep dive into rendering techniques, instancing, and geometry management for high-fps 3D web applications.',
    date: 'Oct 24, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Three.js', 'Performance']
  },
  {
    title: 'Building Scalable Microservices with Node.js',
    excerpt: 'Architectural patterns and best practices for creating robust backend services that can handle millions of requests.',
    date: 'Sep 12, 2023',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Node.js', 'Architecture', 'Backend']
  },
  {
    title: 'The Future of Web Animation: Framer Motion',
    excerpt: 'Exploring advanced animation techniques, gesture controls, and complex layout transitions using Framer Motion.',
    date: 'Aug 05, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Animation', 'Frontend', 'React']
  }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-[var(--color-cyber-gray)]">
      {/* Subtle hex grid overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/honeycomb.png')] opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block text-white">
                <span className="text-[var(--color-cyber-blue)]">05.</span> TRANSMISSIONS
              </h2>
              <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-2">
                Latest data packets from the void...
              </p>
            </div>
            <a href="/blogs" className="hidden md:flex items-center text-[var(--color-cyber-purple)] hover:text-[var(--color-cyber-blue)] transition-colors group font-mono text-sm">
              VIEW_ALL_LOGS <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <FadeIn key={blog.title} direction="up" delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="glass-panel rounded-lg overflow-hidden border border-gray-800 hover:border-[var(--color-cyber-blue)] transition-all duration-300 group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cyber-dark)] to-transparent z-10"></div>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm border border-[var(--color-cyber-purple)] px-2 py-1 rounded text-xs font-mono text-[var(--color-cyber-purple)] flex items-center">
                    <BookOpen size={12} className="mr-1" /> {blog.readTime}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col relative z-20 -mt-6 bg-[var(--color-cyber-gray)]">
                  <div className="flex items-center text-xs text-gray-400 font-mono mb-3">
                    <Calendar size={14} className="mr-2 text-[var(--color-cyber-blue)]" />
                    {blog.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-cyber-blue)] transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {blog.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-2 py-1 bg-gray-800 text-gray-300 rounded-sm border border-gray-700 group-hover:border-[rgba(0,240,255,0.3)] transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Cyberpunk accent bar at bottom */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-cyber-blue)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4}>
          <div className="mt-8 text-center md:hidden">
            <a href="/blogs" className="inline-flex items-center text-[var(--color-cyber-purple)] hover:text-[var(--color-cyber-blue)] transition-colors group font-mono text-sm border border-[var(--color-cyber-purple)] px-4 py-2 rounded">
              VIEW_ALL_LOGS <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
