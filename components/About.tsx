import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Zap, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative z-10 border border-slate-200 dark:border-slate-700 shadow-xl">
               {/* Replace with actual image later, using abstract dev visualization for now */}
               <img 
                 src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Gaurav Patil" 
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-6 left-6 text-white">
                 <p className="text-sm font-mono text-primary-400 mb-1">Based in</p>
                 <p className="text-2xl font-bold">Mumbai, India</p>
               </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-500/30 rounded-2xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary-500/10 rounded-2xl z-0"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Backend Developer & AI Enthusiast
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a Senior Backend Developer with experience in designing and scaling RESTful and GraphQL APIs. Currently working at 
              <span className="text-primary-600 dark:text-primary-400 font-medium"> The Hosteller</span>, I handle systems processing over 
              <span className="text-secondary-500 font-semibold"> 50K+ monthly requests</span>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              My expertise lies in Node.js, MongoDB, and AWS, with a strong focus on optimizing database queries and reducing report generation times by up to 40%. 
              Recently, I've been deeply involved in **GenAI**, building RAG pipelines, voice agents, and sentiment analysis tools using OpenAI, Gemini, and LangChain.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="text-3xl font-bold text-primary-500 mb-1">3+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="text-3xl font-bold text-secondary-500 mb-1">50K+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Requests/Mo</div>
              </div>
            </div>

            <div className="flex space-x-4">
               <SkillBadge icon={<Server size={18} />} text="Backend Arch" />
               <SkillBadge icon={<Zap size={18} />} text="Performance" />
               <SkillBadge icon={<Cpu size={18} />} text="GenAI" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
    {icon}
    <span>{text}</span>
  </div>
);

export default About;