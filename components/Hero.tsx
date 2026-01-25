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

  const resumeLink = "https://drive.google.com/file/d/1RII1-HgUzDi2_bZfxFAzt0yHbTypIFUM/view?usp=sharing";

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-500/10 blur-[120px] dark:bg-primary-500/5" />
         <div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary-500/10 blur-[120px] dark:bg-secondary-500/5" />
         <div className="absolute -bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary-500 mr-3 animate-pulse"></span>
            Senior Backend & AI Engineer
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] text-slate-900 dark:text-white mb-6">
            Architecting <span className="gradient-text">Scalable</span> <br />
            Systems & <span className="text-secondary-500">AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            I'm <span className="font-bold text-slate-900 dark:text-white">Gaurav Patil</span>. I specialize in building high-performance APIs and GenAI pipelines for mission-critical applications.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-xl shadow-primary-500/30 transition-all cursor-pointer"
            >
              Start a Project <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 font-bold transition-all cursor-pointer backdrop-blur-sm"
            >
              Get Resume <Download className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Element / Code Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block relative"
        >
          {/* Floating Elements */}
          <FloatingIcon Icon={Code2} delay={0} x={-150} y={-140} color="text-blue-500" />
          <FloatingIcon Icon={Terminal} delay={2} x={160} y={-90} color="text-emerald-500" />
          <FloatingIcon Icon={Database} delay={4} x={190} y={110} color="text-violet-500" />

          <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl relative bg-white/40 dark:bg-slate-900/40 group overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent pointer-events-none" />
             <div className="flex items-center space-x-2 mb-6">
               <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80 shadow-lg shadow-rose-500/20"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 shadow-lg shadow-amber-500/20"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 shadow-lg shadow-emerald-500/20"></div>
             </div>
             <div className="font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
               <p className="mb-1"><span className="text-fuchsia-600 dark:text-fuchsia-400 font-bold">const</span> <span className="text-sky-600 dark:text-sky-400">developer</span> = <span className="text-amber-600 dark:text-amber-400">{"{"}</span></p>
               <p className="pl-6 mb-1">name: <span className="text-emerald-600 dark:text-emerald-400">'Gaurav Patil'</span>,</p>
               <p className="pl-6 mb-1">role: <span className="text-emerald-600 dark:text-emerald-400">'Senior Backend Developer'</span>,</p>
               <p className="pl-6 mb-1">stack: [<span className="text-emerald-600 dark:text-emerald-400">'Node.js'</span>, <span className="text-emerald-600 dark:text-emerald-400">'MongoDB'</span>, <span className="text-emerald-600 dark:text-emerald-400">'AWS'</span>],</p>
               <p className="pl-6 mb-1">specialty: <span className="text-emerald-600 dark:text-emerald-400">'GenAI, AWS & Scalability'</span>,</p>
               <p className="pl-6 mb-1">status: <span className="text-emerald-600 dark:text-emerald-400">'Building the future'</span></p>
               <p><span className="text-amber-600 dark:text-amber-400">{"}"}</span>;</p>
               
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 2, delay: 1.5 }}
                 className="h-px bg-slate-300 dark:bg-slate-700 my-4"
               />
               
               <p className="text-slate-500 dark:text-slate-500 italic">// Optimization is not a choice, it's a lifestyle</p>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => {
            const about = document.getElementById('about');
            about?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-7 h-12 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center p-1.5 transition-colors hover:border-primary-500">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

const FloatingIcon = ({ Icon, delay, x, y, color }: { Icon: any; delay: number; x: number; y: number; color: string }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.05, 0.95, 1]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute p-5 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl ${color} z-20 border border-slate-100 dark:border-slate-700`}
    style={{ top: '50%', left: '30%', marginLeft: x, marginTop: y }}
  >
    <Icon size={36} strokeWidth={1.5} />
  </motion.div>
);

export default Hero;