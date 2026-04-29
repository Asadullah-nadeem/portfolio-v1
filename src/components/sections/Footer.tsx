import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter">AN.</span>
          <p className="text-sm text-muted">Java Developer | Backend Specialist</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium text-muted">
          <a href="https://github.com/" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
        
        <div className="text-sm text-muted/60 font-medium">
          © {new Date().getFullYear()} Asadullah Nadeem. Built for excellence.
        </div>
      </div>
    </footer>
  );
};
