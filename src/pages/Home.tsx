import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Blogs from '../sections/Blogs';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="bg-[var(--color-cyber-dark)] min-h-screen text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blogs />
      <Testimonials />
      <Contact />
    </main>
  );
}
