import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Connor',
    role: 'Product Manager at Skynet',
    content: 'An exceptional developer who consistently delivers high-quality code. They transformed our outdated interface into a sleek, modern, and highly performant application. Their understanding of 3D integration is unmatched.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    color: '#00f0ff'
  },
  {
    id: 2,
    name: 'Neo Anderson',
    role: 'Lead Architect at Matrix Solutions',
    content: 'Working with them was like taking the red pill; they showed us possibilities we didn\'t know existed. Their ability to manage complex state while keeping the UI buttery smooth is incredible.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    color: '#b026ff'
  },
  {
    id: 3,
    name: 'Ellen Ripley',
    role: 'CTO at Weyland Corp',
    content: 'Reliable, creative, and highly technical. They survived our toughest sprint cycles and delivered a product that exceeded all expectations. A true professional who understands both code and design.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    color: '#00f0ff'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[var(--color-cyber-dark)]">
      {/* Abstract blurred blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[var(--color-cyber-blue)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-cyber-purple)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono inline-block border-b-2 border-[var(--color-cyber-blue)] pb-2 mb-4 text-white">
              <span className="text-[var(--color-cyber-purple)]">06.</span> PEER_REVIEWS
            </h2>
            <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mt-4">
              Decrypting user feedback protocols...
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-30">
            <button onClick={prevTestimonial} className="p-2 glass-panel rounded-full text-[var(--color-cyber-blue)] hover:bg-[rgba(0,240,255,0.1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-blue)]">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-30">
            <button onClick={nextTestimonial} className="p-2 glass-panel rounded-full text-[var(--color-cyber-purple)] hover:bg-[rgba(176,38,255,0.1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)]">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-lg relative overflow-hidden min-h-[400px] flex items-center justify-center border border-gray-800">
            {/* Background Quote Icon */}
            <Quote className="absolute -top-10 -right-10 text-[var(--color-cyber-dark)] opacity-50 w-64 h-64 z-0 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <div className="mb-8 relative inline-block">
                  <div className={`absolute -inset-1 rounded-full blur opacity-50`} style={{ backgroundColor: testimonials[currentIndex].color }}></div>
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 rounded-full object-cover border-2 relative z-10 filter grayscale hover:grayscale-0 transition-all duration-500"
                    style={{ borderColor: testimonials[currentIndex].color }}
                  />
                </div>
                
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 leading-relaxed px-4 md:px-12 font-serif relative">
                  <span className="text-[var(--color-cyber-purple)] text-3xl absolute -top-4 left-0 md:left-8">"</span>
                  {testimonials[currentIndex].content}
                  <span className="text-[var(--color-cyber-blue)] text-3xl absolute -bottom-4 right-0 md:right-8">"</span>
                </p>
                
                <div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm font-mono mt-1" style={{ color: testimonials[currentIndex].color }}>
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Cyberpunk Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
              <motion.div 
                className="h-full"
                style={{ backgroundColor: testimonials[currentIndex].color }}
                initial={{ width: '0%' }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'bg-gray-600 hover:bg-gray-400'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
