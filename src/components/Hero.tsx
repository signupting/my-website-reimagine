import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blak-darker to-blak-red -z-10" />
      
      <div className="flex flex-col items-center space-y-4 animate-float">
        <img 
          src="/lovable-uploads/d67d42cd-9a50-40ee-af1d-b80d888b1b25.png" 
          alt="Blak Santa Logo" 
          className="w-48 h-48 object-contain"
        />
        <h1 className="text-6xl font-bold text-white mb-4">BLAK SANTA</h1>
      </div>

      <div className="text-center mt-8 space-y-4">
        <h2 className="text-4xl font-bold text-white">YOUR FAVORITE LEGEND..?</h2>
        <p className="text-2xl text-white/80">PROBABLY... BLAK</p>
        
        <div className="max-w-md mx-auto text-center text-white/70 space-y-2">
          <p>Born from the darkest corners of the Internet,</p>
          <p>raised by meme lords</p>
          <p>we're now exposing... ANYTHING...</p>
          <p className="italic">that changes everything!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;