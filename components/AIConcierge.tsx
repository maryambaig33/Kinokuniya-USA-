import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, BookOpen } from 'lucide-react';
import { getBookRecommendations } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Konnichiwa! I am your Kinokuniya literary concierge. Tell me your mood or what you enjoy reading, and I shall find the perfect book for you." }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const recommendations = await getBookRecommendations(userMsg.text);
      const modelMsg: ChatMessage = {
        role: 'model',
        text: "Here are some curated selections for you:",
        recommendations: recommendations
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Gomen nasai (I'm sorry). I am having trouble connecting to the library archives right now." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-kino-navy text-white'}`}
      >
        <Sparkles size={24} />
        <span className="font-serif font-medium hidden md:inline">Ask Concierge</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-full md:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right border border-gray-100
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-kino-navy text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-kino-gold flex items-center justify-center text-kino-navy">
              <BookOpen size={16} />
            </div>
            <div>
              <h3 className="font-serif font-semibold">Kinokuniya Concierge</h3>
              <p className="text-xs text-gray-300">Powered by Gemini AI</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-kino-cream">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-kino-navy text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                
                {msg.recommendations && (
                  <div className="mt-3 space-y-3">
                    {msg.recommendations.recommendations.map((book, bIdx) => (
                      <div key={bIdx} className="bg-gray-50 p-3 rounded-lg border-l-2 border-kino-gold">
                        <p className="font-serif font-bold text-kino-navy">{book.title}</p>
                        <p className="text-xs text-gray-500 mb-1">by {book.author}</p>
                        <p className="text-xs italic text-gray-600">{book.reason}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-kino-navy rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-kino-navy rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-kino-navy rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2 border border-gray-200 focus-within:border-kino-navy focus-within:ring-1 focus-within:ring-kino-navy transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="I'm looking for..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
            <button 
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="p-2 bg-kino-navy text-white rounded-full hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};