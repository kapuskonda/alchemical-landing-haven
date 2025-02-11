
import { ChevronsDown, Code, FlaskConical, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,93,15,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,181,99,0.05)_0%,transparent_60%)]" />
        </div>
        
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute inset-0 animate-rotate opacity-20">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="59" stroke="currentColor" strokeWidth="2"/>
                    <path d="M60 1L60 119" stroke="currentColor" strokeWidth="2"/>
                    <path d="M1 60L119 60" stroke="currentColor" strokeWidth="2"/>
                    <path d="M17.1573 17.1573L102.843 102.843" stroke="currentColor" strokeWidth="2"/>
                    <path d="M102.843 17.1573L17.1573 102.843" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <FlaskConical className="w-12 h-12 text-alchemy-orange animate-float" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Digital Alchemy for
              <span className="block mt-2 text-alchemy-orange">Modern Solutions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Transforming ideas into digital gold through the perfect blend of design,
              technology, and innovation.
            </p>
            
            <div className="pt-8">
              <button className="alchemy-card hover:scale-105 hover:bg-alchemy-orange/10 px-8 py-4">
                Start Transmutation
              </button>
            </div>
          </motion.div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronsDown className="w-6 h-6 text-alchemy-orange" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Transmutations</h2>
            <p className="text-gray-400">Converting challenges into opportunities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="alchemy-card hover:scale-105 group"
              >
                <service.icon className="w-12 h-12 text-alchemy-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,93,15,0.1)_0%,transparent_70%)]" />
        
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="alchemy-card max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Begin Your Transformation</h2>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black/20 border border-alchemy-orange/20 rounded-lg px-4 py-3 focus:outline-none focus:border-alchemy-orange/40 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-black/20 border border-alchemy-orange/20 rounded-lg px-4 py-3 focus:outline-none focus:border-alchemy-orange/40 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-black/20 border border-alchemy-orange/20 rounded-lg px-4 py-3 focus:outline-none focus:border-alchemy-orange/40 transition-colors"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-alchemy-orange/10 hover:bg-alchemy-orange/20 border border-alchemy-orange/20 rounded-lg px-6 py-3 font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    icon: Code,
    title: "Digital Crafting",
    description: "Transform your vision into powerful, scalable digital solutions built with modern technologies.",
  },
  {
    icon: Sparkles,
    title: "Design Alchemy",
    description: "Create captivating user experiences that blend beauty with functionality.",
  },
  {
    icon: Workflow,
    title: "Process Refinement",
    description: "Optimize your workflow and operations through strategic digital transformation.",
  },
];

export default Index;
