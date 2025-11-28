import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-kino-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold tracking-wider">KINOKUNIYA</h2>
              <p className="text-xs tracking-[0.2em] text-gray-400 mt-1">EST. 1927 TOKYO</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing Japanese culture and the joy of reading to the world. Explore our curated selection of books, magazines, and stationery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-kino-navy transition-all"><Instagram size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-kino-navy transition-all"><Twitter size={18}/></a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-kino-navy transition-all"><Facebook size={18}/></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-kino-gold">Discover</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Staff Picks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Upcoming Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kinokuniya Membership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>

           {/* Support */}
           <div>
            <h3 className="font-serif text-lg mb-6 text-kino-gold">Support</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-kino-gold">Stay Connected</h3>
            <p className="text-sm text-gray-300 mb-4">Subscribe to receive updates on new arrivals and exclusive events.</p>
            <div className="flex border-b border-gray-500 pb-2">
              <input type="email" placeholder="Email Address" className="bg-transparent w-full outline-none text-white placeholder-gray-500" />
              <button className="text-gray-400 hover:text-white"><Mail size={20} /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Kinokuniya Book Stores of America Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};