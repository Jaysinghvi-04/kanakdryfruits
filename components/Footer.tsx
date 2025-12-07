import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-900 text-white pt-16 pb-8 border-t border-luxury-600/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-luxury-500 mb-4">KANAK</h2>
            <p className="text-gray-400 mb-6 font-light leading-relaxed">
              Bringing the royal heritage of Udaipur to your home with premium dry fruits and authentic spices. 
              Quality you can trust, taste you will remember.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-luxury-200">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-300 group">
                <MapPin className="shrink-0 mt-1 text-luxury-500 group-hover:text-white transition-colors" size={20} />
                <a href={CONTACT_INFO.mapLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {CONTACT_INFO.address}
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group">
                <Phone className="shrink-0 text-luxury-500 group-hover:text-white transition-colors" size={20} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group">
                <Mail className="shrink-0 text-luxury-500 group-hover:text-white transition-colors" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / Map */}
          <div>
             <h3 className="font-serif text-xl font-bold mb-6 text-luxury-200">Visit Store</h3>
             <div className="w-full h-48 bg-slate-800 rounded-lg overflow-hidden border border-white/10 relative group">
                {/* Simulated Map Placeholder */}
                <img 
                  src="https://picsum.photos/600/400?grayscale" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" 
                  alt="Map Location" 
                />
                <a 
                  href={CONTACT_INFO.mapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors"
                >
                  <span className="bg-white/90 text-royal-900 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-luxury-500 hover:text-white transition-colors flex items-center gap-2">
                    <MapPin size={14}/> Get Directions
                  </span>
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kanak Dry Fruits. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;