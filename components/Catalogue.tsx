import React from 'react';
import { PRODUCTS, CONTACT_INFO } from '../constants';
import { ShoppingBag } from 'lucide-react';

const Catalogue: React.FC = () => {
  const handleOrder = (productName: string) => {
    const message = `Hi Kanak Dry Fruits, I want to order *${productName}* from your catalogue.`;
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-royal-800 text-white p-6 flex justify-between items-center">
        <h3 className="text-xl font-serif font-bold">Smart Price List</h3>
        <ShoppingBag className="text-luxury-500" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-600 uppercase text-xs tracking-wider font-bold">
            <tr>
              <th className="p-4 border-b">Product</th>
              <th className="p-4 border-b">Category</th>
              <th className="p-4 border-b text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {PRODUCTS.map((product) => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-royal-900 flex items-center gap-3">
                  <img src={product.image} alt="" className="w-8 h-8 rounded-full object-cover shadow-sm hidden sm:block"/>
                  {product.name}
                </td>
                <td className="p-4 text-slate-500 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${product.category === 'Dry Fruit' ? 'bg-orange-100 text-orange-800' : 'bg-red-100 text-red-800'}`}>
                    {product.category}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button 
                    onClick={() => handleOrder(product.name)}
                    className="text-xs font-bold text-luxury-600 hover:text-royal-800 border border-luxury-500 hover:border-royal-800 px-3 py-1.5 rounded transition-all uppercase"
                  >
                    Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Catalogue;