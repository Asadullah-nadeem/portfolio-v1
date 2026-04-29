import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
        {/* Abstract background glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to build <br />
              something <span className="text-gradient text-accent">extraordinary?</span>
            </h2>
            <p className="text-xl text-muted mb-12 max-w-md">
              I'm currently available for freelance projects, contract roles, and serious product collaborations.
            </p>
            
            <div className="flex flex-col gap-6">
              <a 
                href="mailto:asadullah@example.com"
                className="group flex items-center gap-4 text-2xl font-bold hover:text-accent transition-colors"
              >
                <Mail className="w-8 h-8" />
                asadullah@example.com
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
              <div className="flex gap-8 mt-4">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white flex items-center gap-2 transition-colors">
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white flex items-center gap-2 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:text-right">
            <div className="inline-block glass p-8 rounded-3xl text-left border-white/10 max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
                <span className="text-sm font-bold uppercase tracking-widest text-white/90">Current Status</span>
              </div>
              <p className="text-lg font-medium mb-2">Available for Work</p>
              <p className="text-sm text-muted mb-8 leading-relaxed">
                Open to discussions about backend systems, full-stack architecture, and technical product leadership.
              </p>
              <button className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all active:scale-[0.98]">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
