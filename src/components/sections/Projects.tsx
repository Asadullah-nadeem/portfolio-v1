import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise API Gateway',
    summary: 'A high-performance, distributed API gateway built with Java and Spring Cloud for managing complex microservices architectures.',
    tech: ['Java', 'Spring Cloud', 'Redis', 'Docker'],
    role: 'Lead Backend Engineer',
    impact: 'Improved system throughput by 40% and reduced latency by 25%.',
    github: 'https://github.com/'
  },
  {
    title: 'Real-time Analytics Engine',
    summary: 'Scalable data processing pipeline designed to handle millions of events per second with sub-second latency.',
    tech: ['Node.js', 'Kafka', 'Elasticsearch', 'PostgreSQL'],
    role: 'Full Stack Architect',
    impact: 'Enabled real-time decision making for 500+ concurrent enterprise users.',
    github: 'https://github.com/'
  },
  {
    title: 'Fintech Transaction Hub',
    summary: 'Secure, PCI-compliant payment orchestration layer supporting multiple payment providers and automated reconciliation.',
    tech: ['Python', 'Django', 'AWS', 'Terraform'],
    role: 'Backend Developer',
    impact: 'Processed $2M+ in monthly transactions with zero downtime.',
    github: 'https://github.com/'
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Featured Projects</h3>
          </div>
          <div className="hidden md:block">
            <p className="text-muted max-w-xs text-right">
              A selection of my most significant engineering achievements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full glass rounded-[2rem] overflow-hidden group border-white/5 hover:border-white/20 transition-all duration-500"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-muted mb-8 leading-relaxed">
                  {project.summary}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-medium tracking-wide text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted uppercase tracking-wider">Role</span>
                      <span className="font-medium">{project.role}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted uppercase tracking-wider">Impact</span>
                      <span className="font-medium text-emerald-400">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
