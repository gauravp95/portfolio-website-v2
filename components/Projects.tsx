import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "AI Voice Agent",
    description: "Built an outbound voice call agent using Node.js & Vapi SDK for appointment scheduling. Implemented security middleware and knowledge base embedding.",
    tags: ["Node.js", "Vapi API", "Express", "Security"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/gauravp95",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "MongoDB RAG Pipeline",
    description: "Implemented a RAG pipeline using LangChain, OpenAI & MongoDB Atlas Vector Search to process PDFs and enable vector-based Q&A.",
    tags: ["LangChain", "OpenAI", "MongoDB Atlas", "Vector Search"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/gauravp95",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "AI Web Scraper",
    description: "Developed an AI-powered scraper using Browser Use & Google Gemini models to extract structured data from Twitter profiles.",
    tags: ["Gemini LLM", "Python", "Browser Use", "Pydantic"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "https://github.com/gauravp95",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "ORM System",
    description: "A comprehensive Online Reputation Management system aggregating reviews from 5+ platforms to deliver actionable insights via dashboards.",
    tags: ["GraphQL", "React", "Node.js", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Hotel CMS Dashboard",
    description: "Interactive dashboard for The Hosteller with dynamic reports using advanced MongoDB aggregation pipelines.",
    tags: ["MongoDB", "React", "Express", "Optimization"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Sentiment Analysis Engine",
    description: "Built a pipeline using OpenAI API to extract structured insights (compliments, complaints, tone) from customer reviews.",
    tags: ["OpenAI", "NLP", "Node.js", "Automation"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects demonstrating my expertise in Backend Systems and Generative AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a href="https://github.com/gauravp95" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 rounded-full border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all">
                View GitHub Profile
             </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl dark:hover:shadow-primary-900/20 transition-all duration-300 flex flex-col h-full"
  >
    <div className="relative overflow-hidden h-48 flex-shrink-0">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
        <a href={project.githubUrl} className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors">
          <Github size={20} />
        </a>
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Projects;