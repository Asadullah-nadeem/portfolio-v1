import { motion } from 'framer-motion';
import { Database, Server, Layout, Wrench, Code2, Workflow } from 'lucide-react';

const skillGroups = [
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Java', 'Spring Boot', 'Node.js', 'Python', 'Microservices', 'REST APIs', 'GraphQL']
  },
  {
    title: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js']
  },
  {
    title: 'Database',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'SQL Server', 'Prisma']
  },
  {
    title: 'Tools & DevOps',
    icon: <Workflow className="w-5 h-5" />,
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Kubernetes', 'Terraform']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 lg:px-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Technical Expertise</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-white/20 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-accent">
                {group.icon}
              </div>
              <h4 className="text-xl font-bold mb-6">{group.title}</h4>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-muted flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
