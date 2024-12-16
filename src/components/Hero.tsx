import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#013220] to-[#FF0000]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Hero%20page.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL0hlcm8gcGFnZS5wbmciLCJpYXQiOjE3MzQzNDY4MjIsImV4cCI6MjA0OTcwNjgyMn0.lQtCBld0sDdLfntgqYft7sLdgERq1gyDNACaeFcjhMw)'
        }}
      />
    </div>
  );
};

export default Hero;