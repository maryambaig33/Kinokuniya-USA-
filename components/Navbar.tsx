import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag, User, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-kino-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={24} />
            </button>
            <div className="flex flex-col">
              <span className={`font-serif text-2xl tracking-tighter font-bold ${isScrolled ? 'text-kino-navy' : 'text-kino-navy lg:text-white'}`}>
                KINOKUNIYA
              </span>
              <span className={`text-[10px] tracking-[0.3em] uppercase ${isScrolled ? 'text-gray-500' : 'text-gray-400 lg:text-gray-200'}`}>
                Books • Stationery • Gifts
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className={`hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
            <a href="#" className="hover:text-kino-gold transition-colors">NEW ARRIVALS</a>
            <a href="#" className="hover:text-kino-gold transition-colors">JAPANESE BOOKS</a>
            <a href="#" className="hover:text-kino-gold transition-colors">MANGA</a>
            <a href="#" className="hover:text-kino-gold transition-colors">STATIONERY</a>
            <a href="#" className="hover:text-kino-gold transition-colors">MEMBERSHIP</a>
          </div>

          {/* Icons */}
          <div className={`flex items-center gap-6 ${isScrolled ? 'text-kino-navy' : 'text-kino-navy lg:text-white'}`}>
            <button className="hover:scale-110 transition-transform hidden sm:block">
               <Search size={20} />
            </button>
            <button className="hover:scale-110 transition-transform hidden sm:block">
               <MapPin size={20} />
            </button>
            <button className="hover:scale-110 transition-transform">
               <User size={20} />
            </button>
            <div className="relative group cursor-pointer">
              <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-kino-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-kino-navy z-50 transform transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8">
           <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-2xl text-white font-bold">KINOKUNIYA</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white">
                <Menu size={24} />
              </button>
           </div>
           <div className="flex flex-col gap-6 text-white text-lg font-serif">
              <a href="#" className="border-b border-white/10 pb-4">New Arrivals</a>
              <a href="#" className="border-b border-white/10 pb-4">Japanese Books</a>
              <a href="#" className="border-b border-white/10 pb-4">Manga & Anime</a>
              <a href="#" className="border-b border-white/10 pb-4">Stationery</a>
              <a href="#" className="border-b border-white/10 pb-4">Store Locator</a>
           </div>
        </div>
      </div>
    </nav>
  );
};