import { ChevronsDown, Code, FlaskConical, Sparkles, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Process } from "@/components/Process";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1a1f35_0%,rgba(26,31,53,0.5)_25%,rgba(26,31,53,0)_50%)] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4"
          >
            <div className="w-32 h-32 opacity-10">
              <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                <circle cx="60" cy="60" r="59" stroke="currentColor" strokeWidth="2"/>
                <path d="M60 1L60 119" stroke="currentColor" strokeWidth="2"/>
                <path d="M1 60L119 60" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
          </motion.div>
        </div>
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="inline-block mb-6">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FlaskConical className="w-16 h-16 text-amber-500" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Vision Into
              <motion.span 
                className="block mt-2 bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Digital Reality
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Modern software alchemy: Turning ideas into gold through expert development
              and technical innovation.
            </motion.p>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-amber-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronsDown className="w-6 h-6 text-amber-500" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.1)_0%,transparent_70%)]" />
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">The elements of digital transformation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 group hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                  >
                    <service.icon className="w-12 h-12 text-amber-500" />
                  </motion.div>
                  <div className="absolute inset-0 bg-amber-500/10 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,146,60,0.1)_0%,transparent_70%)]" />
        
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-8 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Begin Your Journey</h2>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500/40 transition-colors"
                  />
                </motion.div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-red-600 rounded-lg text-white font-semibold shadow-lg hover:shadow-amber-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
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
