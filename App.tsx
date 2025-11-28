import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookCard } from './components/BookCard';
import { AIConcierge } from './components/AIConcierge';
import { ArrowRight, Sparkles, PenTool } from 'lucide-react';
import { Book } from './types';

// Mock Data
const featuredBooks: Book[] = [
  {
    id: '1',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    price: 18.99,
    category: 'Literature',
    coverUrl: 'https://picsum.photos/seed/norwegian/400/600',
    description: 'A magnificent coming-of-age story steeped in nostalgia, exploring the difficult transition from youth to adulthood through the lens of loss and sexuality.',
    isNew: false
  },
  {
    id: '2',
    title: 'Days at the Morisaki Bookshop',
    author: 'Satoshi Yagisawa',
    price: 16.50,
    category: 'Fiction',
    coverUrl: 'https://picsum.photos/seed/morisaki/400/600',
    description: 'A charming, heartwarming story about a young woman who discovers the healing power of books and family at her uncle\'s secondhand bookstore in Jimbocho.',
    isNew: true
  },
  {
    id: '3',
    title: 'Spy x Family, Vol. 11',
    author: 'Tatsuya Endo',
    price: 11.99,
    category: 'Manga',
    coverUrl: 'https://picsum.photos/seed/spy/400/600',
    description: 'The master spy Twilight has his hands full with his telepathic daughter and assassin wife in this action-packed comedy.',
    isNew: true
  },
  {
    id: '4',
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    price: 15.00,
    category: 'Fiction',
    coverUrl: 'https://picsum.photos/seed/coffee/400/600',
    description: 'In a small back alley in Tokyo, there is a café that has been serving carefully brewed coffee for more than one hundred years. It also offers a unique experience: the chance to travel back in time.',
    isNew: false
  }
];

const stationeryItems: Book[] = [
  {
    id: '5',
    title: 'Pilot Custom 823 Fountain Pen',
    author: 'Pilot Japan',
    price: 288.00,
    category: 'Writing',
    coverUrl: 'https://picsum.photos/seed/pen/400/600',
    description: 'A luxurious demonstrator fountain pen with a unique vacuum filling system, prized by enthusiasts worldwide.',
  },
  {
    id: '6',
    title: 'Midori MD Notebook - A5',
    author: 'Midori',
    price: 14.95,
    category: 'Paper',
    coverUrl: 'https://picsum.photos/seed/midori/400/600',
    description: 'Minimalist Japanese notebook featuring high-quality paper designed for comfort in writing. Opens completely flat.',
  },
  {
    id: '7',
    title: 'Washi Tape Gift Set - Seasons',
    author: 'MT Tape',
    price: 24.50,
    category: 'Crafts',
    coverUrl: 'https://picsum.photos/seed/washi/400/600',
    description: 'A curated collection of Japanese masking tapes featuring seasonal motifs suitable for journaling and wrapping.',
  },
  {
    id: '8',
    title: 'Traveler\'s Notebook - Camel',
    author: 'Traveler\'s Company',
    price: 54.00,
    category: 'Journaling',
    coverUrl: 'https://picsum.photos/seed/traveler/400/600',
    description: 'The iconic leather notebook that ages beautifully with use. Customizable with various refills to suit your lifestyle.',
    isNew: true
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#F9F7F2]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/library2/1920/1080" 
            alt="Kinokuniya Bookstore Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kino-navy/90 via-kino-navy/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="h-[1px] w-12 bg-kino-gold"></span>
              <span className="text-kino-gold uppercase tracking-[0.2em] text-sm font-medium">Since 1927</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8">
              Discover Japan <br/>
              <span className="italic text-gray-200">Between the Lines</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Your gateway to Japanese culture, literature, and art. Explore our vast collection of books, manga, and exclusive stationery imported directly from Tokyo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-kino-gold text-white px-8 py-4 rounded-sm font-medium hover:bg-white hover:text-kino-navy transition-all duration-300 flex items-center justify-center gap-2">
                Shop New Arrivals
                <ArrowRight size={18} />
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-sm font-medium hover:bg-white hover:text-kino-navy transition-all duration-300">
                Find a Store
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl text-kino-navy mb-3">Curated Selections</h2>
            <p className="text-gray-500 font-light">Hand-picked favorites from our staff across the US.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-kino-gold hover:text-kino-navy transition-colors text-sm font-bold tracking-widest uppercase">
            View All <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map(book => (
            <div key={book.id} className="h-[480px]">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </section>

      {/* Stationery Banner */}
      <section className="bg-kino-navy py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <PenTool size={600} strokeWidth={0.5} color="white" className="transform rotate-12 translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3 text-white">
              <div className="flex items-center gap-3 mb-6">
                 <Sparkles className="text-kino-gold" size={20} />
                 <span className="text-kino-gold uppercase tracking-[0.2em] text-sm font-medium">Fine Stationery</span>
              </div>
              <h2 className="font-serif text-5xl mb-6">The Art of Writing</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Elevate your desk with our premium selection of Japanese stationery. From fountain pens engineered for perfection to paper that transforms writing into a sensory experience.
              </p>
              <button className="border-b border-kino-gold text-kino-gold pb-1 hover:text-white hover:border-white transition-all">
                Explore Stationery Collection
              </button>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {stationeryItems.map(item => (
                 <div key={item.id} className="h-[380px]">
                   <BookCard book={item} />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <div className="bg-white p-12 md:p-20 border border-gray-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-kino-gold"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
               <div className="max-w-xl">
                 <h2 className="font-serif text-3xl md:text-4xl text-kino-navy mb-4">Join Kinokuniya Membership</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                   Become a member today and enjoy exclusive benefits, including 10% off books and magazines, special invitations to author events, and early access to sales.
                 </p>
                 <div className="flex gap-4">
                   <button className="bg-kino-navy text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-all">
                     Join Now
                   </button>
                   <button className="text-kino-navy font-medium hover:text-kino-gold transition-colors px-4 py-3">
                     Learn More
                   </button>
                 </div>
               </div>
               <div className="flex-shrink-0">
                  <div className="w-64 h-40 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl flex flex-col justify-between p-6 text-white relative border-t border-gray-700">
                     <div className="flex justify-between items-start">
                        <span className="font-serif text-lg tracking-widest">KINOKUNIYA</span>
                        <div className="w-8 h-8 rounded-full bg-kino-gold/20 flex items-center justify-center">
                           <div className="w-4 h-4 rounded-full bg-kino-gold"></div>
                        </div>
                     </div>
                     <div>
                        <p className="text-xs text-gray-400 tracking-widest uppercase mb-1">Member ID</p>
                        <p className="font-mono text-lg tracking-widest">8820 1928 3746</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
      <AIConcierge />
    </div>
  );
}

export default App;