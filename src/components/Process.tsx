
import { motion } from "framer-motion";

const steps = [
  {
    title: "Nigredo",
    subtitle: "Discovery & Analysis",
    description: "Deep dive into your vision, requirements, and market opportunities.",
    symbol: (
      <svg className="w-12 h-12" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" />
        <circle cx="25" cy="25" r="5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Albedo",
    subtitle: "Design & Architecture",
    description: "Purification of ideas into clear, scalable technical specifications.",
    symbol: (
      <svg className="w-12 h-12" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" />
        <path d="M25 5 L45 35 L5 35 Z" fill="none" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Citrinitas",
    subtitle: "Development & Testing",
    description: "Transforming specifications into working software.",
    symbol: (
      <svg className="w-12 h-12" viewBox="0 0 50 50">
        <rect x="15" y="15" width="20" height="20" fill="none" stroke="currentColor" />
        <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Rubedo",
    subtitle: "Deployment & Optimization",
    description: "Final refinement and launch of your perfect solution.",
    symbol: (
      <svg className="w-12 h-12" viewBox="0 0 50 50">
        <path d="M25 5 L45 45 L25 35 L5 45 Z" fill="none" stroke="currentColor" />
      </svg>
    ),
  },
];

const ProcessCard = ({ title, subtitle, description, symbol, index }: {
  title: string;
  subtitle: string;
  description: string;
  symbol: React.ReactNode;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="relative p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700"
  >
    <div className="mb-4 text-amber-500">{symbol}</div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <h4 className="text-amber-500 mb-2">{subtitle}</h4>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export const Process = () => {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400">The stages of digital transformation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessCard key={step.title} {...step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
