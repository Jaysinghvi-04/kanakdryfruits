import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Eye, X, CheckCircle, Minus, Plus, Maximize2 } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const openModal = () => {
    setQuantity(1);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleOrder = () => {
    // Attempt to extract unit from price string (e.g. "₹1,200 / kg" -> "kg")
    const unitPart = product.price?.split('/')[1]?.trim();
    const unitText = unitPart ? ` ${unitPart}` : '';
    
    const message = `Hi Kanak Dry Fruits, I am interested in ordering *${quantity}${unitText}* of *${product.name}*. Please let me know the total price and availability.`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const incrementQty = () => setQuantity(q => q + 1);
  const decrementQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group border border-slate-100 flex flex-col h-full"
      >
        <div className="relative overflow-hidden aspect-square cursor-pointer" onClick={openModal}>
          <motion.img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          
          {product.isBestSeller && (
            <div className="absolute top-4 left-4 bg-luxury-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md z-10">
              Best Seller
            </div>
          )}

          <button
            onClick={openLightbox}
            className="absolute top-4 right-4 bg-black/40 hover:bg-luxury-500/90 backdrop-blur-md text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 shadow-lg"
            title="View Full Image"
            aria-label="View Full Image"
          >
            <Maximize2 size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <div className="text-xs font-bold text-luxury-600 uppercase tracking-widest">
              {product.category}
            </div>
            {product.price && (
              <div className="text-lg font-bold text-royal-800">
                {product.price}
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-serif font-bold text-royal-800 mb-2 group-hover:text-luxury-600 transition-colors cursor-pointer" onClick={openModal}>
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button
              onClick={openModal}
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-luxury-500 text-luxury-700 font-medium hover:bg-luxury-50 transition-colors group/btn"
            >
              <Eye size={18} className="group-hover/btn:scale-110 transition-transform" />
              <span>Details</span>
            </button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOrder}
              className="flex items-center justify-center gap-2 bg-royal-800 text-white py-3 rounded-lg hover:bg-royal-900 transition-colors hover:shadow-lg font-medium group/btn"
            >
              <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
              <span>Order</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Details Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-royal-900/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white text-gray-500 hover:text-red-500 transition-colors shadow-sm"
              >
                <X size={24} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100 relative group cursor-pointer overflow-hidden" onClick={(e) => openLightbox(e)}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100">
                       <Maximize2 size={24} />
                    </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-luxury-600 uppercase tracking-widest border border-luxury-200 px-2 py-1 rounded">
                      {product.category}
                    </span>
                    {product.isBestSeller && (
                      <span className="text-xs font-bold text-white bg-luxury-500 uppercase tracking-widest px-2 py-1 rounded flex items-center gap-1">
                        <CheckCircle size={12} /> Best Seller
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-royal-800 mb-2">{product.name}</h2>
                  {product.price && (
                    <div className="text-2xl font-bold text-luxury-600 mb-4">{product.price}</div>
                  )}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <div className="bg-cream-50 p-4 rounded-lg border border-luxury-100 mb-6">
                    <h4 className="font-bold text-royal-800 mb-2 text-sm">Why Choose Kanak?</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-center gap-2">✓ Premium Grade Quality</li>
                      <li className="flex items-center gap-2">✓ 100% Natural & Organic</li>
                      <li className="flex items-center gap-2">✓ Traditional Sourcing</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4 mb-4">
                    <label className="text-sm font-bold text-royal-800 uppercase tracking-wide">Quantity:</label>
                    <div className="flex items-center border border-luxury-200 rounded-lg bg-slate-50 shadow-sm">
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={decrementQty}
                        className="p-3 hover:bg-luxury-100 text-royal-800 transition-colors rounded-l-lg"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </motion.button>
                      <div className="w-12 text-center font-serif font-bold text-lg text-royal-800 select-none">
                        {quantity}
                      </div>
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={incrementQty}
                        className="p-3 hover:bg-luxury-100 text-royal-800 transition-colors rounded-r-lg"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </motion.button>
                    </div>
                    {product.price && product.price.includes('/') && (
                       <span className="text-sm text-gray-500 font-medium">
                         {product.price.split('/')[1].trim()}
                       </span>
                    )}
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOrder}
                    className="w-full flex items-center justify-center gap-2 bg-royal-800 text-white py-4 rounded-xl hover:bg-royal-900 transition-colors hover:shadow-xl font-bold text-lg shadow-lg"
                  >
                    <MessageCircle size