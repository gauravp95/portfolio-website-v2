import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Database } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-500/10 blur-[100px]" />
         <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary-500/10 blur-[100px]" />
         <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            Senior Backend Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-slate-900 dark:text-white mb-6">
            Architecting <span className="gradient-text">Scalable</span> <br />
            Systems & <span className="text-secondary-500">AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm <span className="font-semibold text-slate-900 dark:text-white">Gaurav Patil</span>, a developer specializing in high-performance REST/GraphQL APIs and GenAI integrations using Node.js, MongoDB, and AWS.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 transition-all cursor-pointer"
            >
              Hire Me <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-all cursor-pointer"
            >
              Resume <Download className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Element / Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Floating Icons */}
          <FloatingIcon Icon={Code2} delay={0} x={-140} y={-130} color="text-blue-500" />
          <FloatingIcon Icon={Terminal} delay={2} x={150} y={-80} color="text-green-500" />
          <FloatingIcon Icon={Database} delay={4} x={180} y={100} color="text-purple-500" />

          <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-2xl relative bg-white/50 dark:bg-slate-900/50">
             <div className="flex items-center space-x-2 mb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="font-mono text-sm text-slate-600 dark:text-slate-400 overflow-hidden">
               <p><span className="text-purple-600 dark:text-purple-400">const</span> <span className="text-blue-600 dark:text-blue-400">engineer</span> = <span className="text-yellow-600 dark:text-yellow-400">{"{"}</span></p>
               <p className="pl-4">name: <span className="text-green-600 dark:text-green-400">'Gaurav Patil'</span>,</p>
               <p className="pl-4">role: <span className="text-green-600 dark:text-green-400">'Senior Backend Developer'</span>,</p>
               <p className="pl-4">stack: [<span className="text-green-600 dark:text-green-400">'Node.js'</span>, <span className="text-green-600 dark:text-green-400">'MongoDB'</span>, <span className="text-green-600 dark:text-green-400">'AWS'</span>],</p>
               <p className="pl-4">specialty: <span className="text-green-600 dark:text-green-400">'GenAI & Scalability'</span>,</p>
               <p className="pl-4">location: <span className="text-green-600 dark:text-green-400">'Mumbai, India'</span></p>
               <p><span className="text-yellow-600 dark:text-yellow-400">{"}"}</span>;</p>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

const FloatingIcon = ({ Icon, delay, x, y, color }: { Icon: any; delay: number; x: number; y: number; color: string }) => (
  <motion.div
    animate={{ 
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl ${color} z-20`}
    style={{ top: '50%', left: '30%', marginLeft: x, marginTop: y }}
  >
    <Icon size={32} />
  </motion.div>
);

export default Hero;