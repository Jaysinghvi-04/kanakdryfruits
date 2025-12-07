import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-5xl font-serif font-bold mb-4 ${light ? 'text-cream-50' : 'text-royal-800'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-3"
        >
           <div className={`w-24 h-1 ${light ? 'bg-luxury-500' : 'bg-luxury-600'}`}></div>
           <p className={`text-lg md:text-xl font-light ${light ? 'text-cream-100' : 'text-gray-600'} max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeader;