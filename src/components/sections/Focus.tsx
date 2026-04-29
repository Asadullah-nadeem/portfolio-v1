import { motion } from 'framer-motion';
import { Cpu, Globe, Shield, Zap, Layers, BarChart3 } from 'lucide-react';

const focuses = [
  {
    title: 'Backend Systems',
    desc: 'Building high-availability, fault-tolerant server architectures that scale with user demand.',
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: 'API Engineering',
    desc: 'Designing clean, intuitive, and high-performance REST and GraphQL APIs for seamless integration.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Scalable Architecture',
    desc: 'Implementing microservices, serverless, and cloud-native solutions for modern digital products.',
    icon: <Layers className="w-6 h-6" />
  },
  {
    title: 'Internal Tools',
    desc: 'Developing specialized internal systems that streamline operations and enhance team productivity.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Business Software',
    desc: 'Creating custom enterprise solutions that solve specific operational challenges and drive growth.',
    icon: <BarChart3 className="w-6 h-6" />
  },
  {
    title: 'Product Security',
    desc: 'Ensuring every system is built with security-first principles, from data encryption to access control.',
    icon: <Shield className="w-6 h-6" />
  }
];

export const Focus = () => {
  return (
    <section id="focus" className="py-24 px-6 lg:px-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">Focus</h2>
          <h3 className="text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Specializing in high-end technical execution.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {focuses.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
