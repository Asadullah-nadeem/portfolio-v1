import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Engineering <span className="text-muted">with a</span> <br />
              backend-first <br />
              <span className="text-gradient">mindset.</span>
            </h3>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 text-lg text-muted leading-relaxed"
          >
            <p>
              I specialize in building reliable web systems, APIs, and software experiences designed for real business use. My approach is centered around scalability, performance, and engineering maturity.
            </p>
            <p>
              With a strong focus on backend architecture, I ensure that the core of every application is robust and efficient. I believe that great products are built on solid foundations, and I strive to deliver clean, maintainable code that stands the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-white font-bold mb-2">Systems & Architecture</h4>
                <p className="text-sm">Designing complex workflows and high-performance APIs.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Product Thinking</h4>
                <p className="text-sm">Bridging the gap between technical depth and business value.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
