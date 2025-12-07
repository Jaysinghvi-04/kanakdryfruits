import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Truck, Leaf } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProductCard from './components/ProductCard';
import Catalogue from './components/Catalogue';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const dryFruits = PRODUCTS.filter(p => p.category === 'Dry Fruit');
  const spices = PRODUCTS.filter(p => p.category === 'Spice');

  const features = [
    { icon: <Award size={32} />, title: "Premium Quality", desc: "Handpicked from the best farms." },
    { icon: <Leaf size={32} />, title: "100% Organic", desc: "Natural, chemical-free produce." },
    { icon: <ShieldCheck size={32} />, title: "Trustworthy", desc: "Serving Udaipur since 1986." },
    { icon: <Truck size={32} />, title: "Fast Delivery", desc: "Prompt doorstep service." },
  ];

  return (
    <div className="font-sans antialiased text-slate-800 selection:bg-luxury-200 selection:text-royal-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* About / Trust Section */}
        <section id="about" className="py-20 bg-cream-50">
          <div className="container mx-auto px-6">
            <SectionHeader 
              title="A Legacy of Purity" 
              subtitle="At Kanak Dry Fruits, we believe in the royal tradition of health and taste. Our products are sourced directly from origin, ensuring you get nothing but the best."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto bg-royal-800 text-luxury-500 rounded-full flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2 text-royal-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dry Fruits Section */}
        <section id="products" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeader 
              title="Royal Dry Fruits" 
              subtitle="Explore our exclusive collection of nutrient-rich nuts."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {dryFruits.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Parallax / Divider */}
        <section className="py-32 bg-royal-900 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/600?random=20')] bg-cover bg-fixed mix-blend-overlay"></div>
           <div className="relative z-10 text-center px-6">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-luxury-500 mb-6">Authentic Indian Spices</h2>
              <p className="text-cream-100 text-lg max-w-2xl mx-auto">The secret to a perfect meal lies in the purity of its spices. Experience the aroma of true quality.</p>
           </div>
        </section>

        {/* Spices Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {spices.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Catalogue Section */}
        <section id="catalogue" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
             <SectionHeader 
              title="Smart Catalogue" 
              subtitle="Quickly browse our list and order directly via WhatsApp."
            />
            <Catalogue />
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-20 bg-luxury-500">
           <div className="container mx-auto px-6 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal-900 mb-8">Ready to taste the difference?</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                  <button onClick={() => window.open('https://wa.me/919314484899', '_blank')} className="bg-royal-900 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-lg">
                    Chat on WhatsApp
                  </button>
                  <button onClick={() => window.location.href = 'tel:9314484899'} className="bg-white text-royal-900 px-8 py-4 rounded-lg font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shadow-lg">
                    Call Us Now
                  </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;