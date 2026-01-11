import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileJson, Database, Server, Layout, Cloud, 
  GitBranch, Terminal, Globe, Cpu, Layers, Box, Search 
} from 'lucide-react';
import { Skill } from '../types.ts';

const skillsData: Skill[] = [
  // Backend
  { name: 'Node.js', icon: <Server />, category: 'Backend', level: 90 },
  { name: 'Express.js', icon: <Server />, category: 'Backend', level: 90 },
  { name: 'Python', icon: <Terminal />, category: 'Backend', level: 80 },
  { name: 'MongoDB', icon: <Database />, category: 'Backend', level: 85 },
  { name: 'PostgreSQL', icon: <Database />, category: 'Backend', level: 75 },
  { name: 'MySQL', icon: <Database />, category: 'Backend', level: 75 },
  { name: 'Redis', icon: <Layers />, category: 'Backend', level: 70 },
  { name: 'GraphQL', icon: <Box />, category: 'Backend', level: 80 },
  
  // AI / GenAI
  { name: 'OpenAI API', icon: <Cpu />, category: 'AI', level: 85 },
  { name: 'LangChain', icon: <Cpu />, category: 'AI', level: 80 },
  { name: 'Gemini LLM', icon: <Cpu />, category: 'AI', level: 80 },
  { name: 'Vector DB', icon: <Search />, category: 'AI', level: 75 },
  { name: 'Vapi API', icon: <Cpu />, category: 'AI', level: 70 },
  
  // Tools & Cloud
  { name: 'AWS', icon: <Cloud />, category: 'Tools', level: 75 },
  { name: 'Docker', icon: <Box />, category: 'Tools', level: 70 },
  { name: 'Git/GitHub', icon: <GitBranch />, category: 'Tools', level: 85 },
  
  // Frontend
  { name: 'React.js', icon: <Layout />, category: 'Frontend', level: 75 },
  { name: 'Next.js', icon: <Globe />, category: 'Frontend', level: 70 },
  { name: 'TypeScript', icon: <FileJson />, category: 'Frontend', level: 80 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-secondary-500">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset that enables me to build high-performing backend systems and AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  // Determine color based on category
  const getColor = (category: string) => {
    switch (category) {
      case 'Backend': return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'AI': return 'text-purple-500 bg-purple-50 dark:bg-purple-900/20';
      case 'Tools': return 'text-orange-500 bg-orange-50 dark:bg-orange-900/20';
      case 'Frontend': return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default: return 'text-slate-500';
    }
  };
  
  const styleClass = getColor(skill.category);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col items-center justify-center group cursor-default relative overflow-hidden"
    >
      <div className="absolute top-2 right-2 text-xs font-bold text-slate-300 dark:text-slate-700 uppercase tracking-wide">
        {skill.category}
      </div>
      <div className={`mb-4 p-3 rounded-full transition-colors ${styleClass}`}>
        {React.cloneElement(skill.icon as React.ReactElement, { size: 28 })}
      </div>
      <h3 className="font-semibold text-slate-700 dark:text-slate-200">
        {skill.name}
      </h3>
    </motion.div>
  );
};

export default Skills;