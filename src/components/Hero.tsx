import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Hero%20page%20image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL0hlcm8gcGFnZSBpbWFnZS5wbmciLCJpYXQiOjE3MzQzNDUyNjEsImV4cCI6MjA0OTcwNTI2MX0.Ct8gQ3dgXi9ypGqQAw6F8SBrgqZG6wUY1BOvp2H52Hc)'
        }}
      />
      
      <div className="relative z-10 text-center space-y-8 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">BLAK SANTA</h1>
        <div className="space-y-4">
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
    </div>
  );
};

export default Hero;