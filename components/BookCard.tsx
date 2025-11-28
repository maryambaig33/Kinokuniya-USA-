import React from 'react';
import { Book } from '../types';
import { ShoppingBag, Star } from 'lucide-react';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="group relative bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 ease-out flex flex-col h-full overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {book.isNew && (
          <span className="absolute top-2 left-2 bg-kino-gold text-white text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
            New Arrival
          </span>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-kino-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <p className="text-white text-sm text-center font-light leading-relaxed line-clamp-6">
            {book.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-kino-gold font-bold tracking-wider uppercase mb-1">{book.category}</p>
        <h3 className="font-serif text-lg text-kino-navy leading-tight mb-1 group-hover:text-kino-gold transition-colors line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{book.author}</p>
        
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
          <span className="font-serif text-lg font-medium text-gray-900">${book.price.toFixed(2)}</span>
          <button className="text-gray-400 hover:text-kino-navy transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};