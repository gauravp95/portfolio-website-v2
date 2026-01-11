import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-primary-600 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-secondary-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let's work together</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, especially those involving scalable backend systems, database optimization, or generative AI.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12">
            <ContactItem icon={<Mail className="text-primary-400" />} text="gauravpatil4195@gmail.com" href="mailto:gauravpatil4195@gmail.com" />
            <ContactItem icon={<Phone className="text-primary-400" />} text="+91 9867003559" href="tel:+919867003559" />
            <ContactItem icon={<MapPin className="text-primary-400" />} text="Mumbai, India" />
          </div>

          <div className="flex justify-center space-x-6">
            <SocialLink href="https://github.com/gauravp95" icon={<Github size={24} />} />
            <SocialLink href="https://linkedin.com/in/techie-gaurav" icon={<Linkedin size={24} />} />
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gaurav Patil. All rights reserved. Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

const ContactItem = ({ icon, text, href }: { icon: React.ReactNode, text: string, href?: string }) => (
  <div className="flex items-center justify-center space-x-3 group cursor-pointer">
    <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
      {icon}
    </div>
    {href ? (
        <a href={href} className="text-slate-300 font-medium group-hover:text-white transition-colors">{text}</a>
    ) : (
        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{text}</span>
    )}
  </div>
);

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all transform hover:scale-110"
  >
    {icon}
  </a>
);

export default Contact;