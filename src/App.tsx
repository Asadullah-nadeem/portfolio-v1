import { SmoothScroll } from './components/layout/SmoothScroll';
import { ThreeBackground } from './components/ui/ThreeBackground';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Focus } from './components/sections/Focus';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <SmoothScroll>
      <div className="relative selection:bg-accent/30">
        <ThreeBackground />
        
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 lg:px-24 py-8 pointer-events-none">
          <div className="text-xl font-bold tracking-tighter pointer-events-auto">AN.</div>
          <div className="hidden md:flex items-center gap-12 pointer-events-auto glass px-8 py-3 rounded-full border-white/5">
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-colors">Stack</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-colors">Contact</a>
          </div>
          <div className="pointer-events-auto">
            <a 
              href="#contact" 
              className="text-xs font-bold uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-white/90 transition-all"
            >
              Hire Me
            </a>
          </div>
        </nav>

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Focus />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
