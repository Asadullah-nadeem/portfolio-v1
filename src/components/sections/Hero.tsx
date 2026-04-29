import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowRight, ExternalLink } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-24 pt-20 overflow-hidden">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wider text-emerald-500/80 uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Asadullah <br />
          <span className="text-gradient">Nadeem.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10"
        >
          Java Developer | Backend Developer | Full Stack Builder.
          <span className="block mt-4 text-foreground/80">
            I build clean, scalable, and production-focused digital systems with a strong focus on backend architecture, performance, and modern product development.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-white/90 transition-all active:scale-95"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all active:scale-95"
          >
            Contact Me
          </a>
          
          <div className="flex items-center gap-4 ml-2 md:ml-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 text-muted hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="p-3 text-muted hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-medium">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};
