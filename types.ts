export interface Product {
  id: string;
  name: string;
  category: 'Dry Fruit' | 'Spice' | 'Gift Box';
  price?: string; // Optional if price varies
  image: string;
  description: string;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}