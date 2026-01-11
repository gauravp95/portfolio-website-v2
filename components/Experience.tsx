import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types.ts';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "The Hosteller",
    period: "Sep 2022 - Present",
    description: [
      "Designed & developed scalable RESTful/GraphQL APIs using Node.js & Express, handling 50K+ monthly requests.",
      "Optimized MongoDB aggregation pipelines, reducing report generation time by 40%.",
      "Integrated 3rd-party services (Razorpay, Google Hotel Center, Zoho) to enable seamless payments & CRM.",
      "Built an Online Reputation Management (ORM) system scraping reviews from 5+ platforms.",
      "Implemented GenAI pipelines for sentiment analysis and automated review responses using OpenAI API."
    ]
  },
  {
    id: 2,
    role: "Backend Developer Trainee",
    company: "FunctionUp",
    period: "Mar 2022 - Sep 2022",
    description: [
      "Trained rigorously in Backend Development using Node.js, Express, and MongoDB.",
      "Gained competence in Git, Caching (Redis), and AWS S3.",
      "Collaborated on team projects, ensuring timely delivery and code quality."
    ]
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Work <span className="text-primary-500">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center md:justify-between group`}>
      {/* Icon */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 flex items-center justify-center z-10 shadow-lg">
        <Briefcase size={16} className="text-primary-600 dark:text-primary-400" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`w-full md:w-[45%] ml-12 md:ml-0 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow`}
      >
        <div className="flex justify-between items-start mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary-600 uppercase bg-primary-100 rounded-full dark:bg-primary-900/30 dark:text-primary-400">
            {experience.period}
            </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{experience.company}</p>
        <ul className="space-y-3">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-secondary-500 rounded-full flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ExperienceSection;