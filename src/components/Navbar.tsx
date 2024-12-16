import React from 'react';

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
            <img 
              src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/telegram%20icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL3RlbGVncmFtIGljb24uc3ZnIiwiaWF0IjoxNzM0MzQ1NjE5LCJleHAiOjIwNDk3MDU2MTl9.off6P32IyKcnmYqOhyJiIJdFMSBpTdi4oKvRpuE70i8" 
              alt="Telegram"
              className="w-6 h-6"
            />
          </a>
          <a 
            href="https://x.com/placeholder" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <img 
              src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/x%20icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL3ggaWNvbi5zdmciLCJpYXQiOjE3MzQzNDU2OTAsImV4cCI6MjA0OTcwNTY5MH0.o-5COb3KCE0EENWnF7-Du-mdDrm32cx24qq6IngLOVE" 
              alt="X"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;