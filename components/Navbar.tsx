import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Catalogue', href: '#catalogue' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-royal-800/95 backdrop-blur-md shadow-xl py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col group">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight ${scrolled ? 'text-luxury-500' : 'text-white'}`}>
              KANAK
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-gray-300' : 'text-gray-200'}`}>
              Dry Fruits
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-luxury-400 ${
                  scrolled ? 'text-gray-100' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all ${
                scrolled 
                  ? 'border-luxury-500 text-luxury-500 hover:bg-luxury-500 hover:text-royal-900' 
                  : 'border-white text-white hover:bg-white hover:text-royal-800'
              }`}
            >
              <Phone size={14} />
              <span className="text-xs font-bold uppercase">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-royal-900 shadow-2xl border-t border-white/10 p-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-white text-lg font-serif hover:text-luxury-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
             <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-luxury-400">
                <Phone size={18} /> {CONTACT_INFO.phone}
             </a>
             <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-1 shrink-0" /> 
                {CONTACT_INFO.address}
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;