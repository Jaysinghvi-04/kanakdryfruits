import { Product, Testimonial } from './types';

export const CONTACT_INFO = {
  name: "Kanak Dry Fruits",
  address: "28, Rishabh Housing Society, Tagore Nagar, Sector 4, Udaipur",
  phone: "9314484899",
  whatsapp: "919314484899", // Format for API
  email: "kanakdryfruits1986@gmail.com",
  mapLink: "https://www.google.com/maps/search/?api=1&query=28+Rishabh+Housing+Society+Tagore+Nagar+Sector+4+Udaipur"
};

export const PRODUCTS: Product[] = [
  // Dry Fruits
  {
    id: 'df-1',
    name: 'Premium Jumbo Cashews',
    category: 'Dry Fruit',
    price: '₹1,200 / kg',
    image: 'https://images.unsplash.com/photo-1509811409322-297eb040c476?auto=format&fit=crop&q=80&w=1000',
    description: 'Crunchy, sweet, and hand-picked W320 grade cashews. These jumbo nuts are perfect for gifting or healthy snacking.',
    isBestSeller: true
  },
  {
    id: 'df-2',
    name: 'Royal Mamra Almonds',
    category: 'Dry Fruit',
    price: '₹3,500 / kg',
    image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?auto=format&fit=crop&q=80&w=1000',
    description: 'Rich in oil and authentic taste. Direct from Kashmir. Known for their high nutritional value and superior crunch.',
    isBestSeller: true
  },
  {
    id: 'df-3',
    name: 'Roasted Salted Pistachios',
    category: 'Dry Fruit',
    price: '₹1,450 / kg',
    image: 'https://images.unsplash.com/photo-1600189020959-1f06143c79c8?auto=format&fit=crop&q=80&w=1000',
    description: 'Perfectly roasted, lightly salted, jumbo pistachios. A delightful snack that is both healthy and addictive.',
  },
  {
    id: 'df-4',
    name: 'Kishmish (Raisins)',
    category: 'Dry Fruit',
    price: '₹450 / kg',
    image: 'https://images.unsplash.com/photo-1606758688467-27e1f82c488c?auto=format&fit=crop&q=80&w=1000',
    description: 'Sweet, long green raisins full of natural energy. Sourced from the best vineyards for a luscious taste.',
  },
  {
    id: 'df-5',
    name: 'Kashmiri Walnuts',
    category: 'Dry Fruit',
    price: '₹1,100 / kg',
    image: 'https://images.unsplash.com/photo-1609195232938-1a5c60205567?auto=format&fit=crop&q=80&w=1000',
    description: 'Soft shell walnuts with high omega-3 content. Easy to break and packed with brain-boosting nutrients.',
  },
  {
    id: 'df-6',
    name: 'Dried Figs (Anjeer)',
    category: 'Dry Fruit',
    price: '₹1,600 / kg',
    image: 'https://images.unsplash.com/photo-1605295489728-f68800f72368?auto=format&fit=crop&q=80&w=1000',
    description: 'Nutrient-rich, premium quality dried figs. A traditional remedy and a sweet treat for any occasion.',
  },
  // Spices
  {
    id: 'sp-1',
    name: 'Kesar (Saffron)',
    category: 'Spice',
    price: '₹250 / gm',
    image: 'https://images.unsplash.com/photo-1598502392762-d98c25db2a66?auto=format&fit=crop&q=80&w=1000',
    description: '100% pure Mongra saffron strings. Deep red color and potent aroma to elevate your culinary creations.',
    isBestSeller: true
  },
  {
    id: 'sp-2',
    name: 'Green Cardamom',
    category: 'Spice',
    price: '₹2,800 / kg',
    image: 'https://images.unsplash.com/photo-1569041951508-36c64633e717?auto=format&fit=crop&q=80&w=1000',
    description: 'Bold, aromatic 8mm green cardamom pods. Essential for authentic chai and rich deserts.',
  },
  {
    id: 'sp-3',
    name: 'Clove (Laung)',
    category: 'Spice',
    price: '₹1,200 / kg',
    image: 'https://images.unsplash.com/photo-1618215984266-9e5871f3b397?auto=format&fit=crop&q=80&w=1000',
    description: 'Premium quality cloves rich in essential oil. Adds a spicy warmth and medicinal benefits to your food.',
  },
  {
    id: 'sp-4',
    name: 'Black Pepper',
    category: 'Spice',
    price: '₹850 / kg',
    image: 'https://images.unsplash.com/photo-1587049442654-2c262a265691?auto=format&fit=crop&q=80&w=1000',
    description: 'Tellicherry black pepper garbled extra bold. The king of spices, offering sharp heat and robust flavor.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh S.',
    text: 'The quality of Mamra almonds is unmatched in Udaipur. Truly royal taste!',
    rating: 5
  },
  {
    id: 't2',
    name: 'Priya M.',
    text: 'Excellent packaging and prompt delivery. The saffron aroma is incredibly potent.',
    rating: 5
  },
  {
    id: 't3',
    name: 'Amit K.',
    text: 'Trustworthy vendor. I have been buying bulk spices for my restaurant for years.',
    rating: 4
  }
];