import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606914502809-548c7d13054b?auto=format&fit=crop&q=80&w=1920" 
          alt="Premium Dry Fruits and Spices on Wooden Table" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-royal-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-luxury-500 rounded-full text-luxury-400 text-xs md:text-sm uppercase tracking-widest mb-6 bg-black/30 backdrop-blur-sm">
            Premium Quality Since 1986
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-luxury-200 via-luxury-400 to-luxury-600">
              Royal Taste
            </span>
            <span className="block text-white">of Udaipur</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Discover the finest selection of organic dry fruits and authentic Indian spices, 
            delivered with trust and tradition.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#products"
              className="px-8 py-4 bg-luxury-600 text-white rounded-md font-bold uppercase tracking-wider hover:bg-luxury-500 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              Shop Collection
            </a>
            <a 
              href="#catalogue"
              className="px-8 py-4 bg-transparent border border-white text-white rounded-md font-bold uppercase tracking-wider hover:bg-white hover:text-royal-900 transition-all"
            >
              Quick Catalogue
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;