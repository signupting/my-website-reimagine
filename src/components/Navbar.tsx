import React from 'react';
import { Telegram, X } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">BLAK</h1>
        
        <div className="flex gap-4">
          <a 
            href="https://t.me/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <Telegram className="w-6 h-6 text-white" />
          </a>
          <a 
            href="https://x.com/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;