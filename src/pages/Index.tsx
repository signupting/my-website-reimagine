import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Promotions from '@/components/Promotions';
import BlakLab from '@/components/BlakLab';
import InnerCircle from '@/components/InnerCircle';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blak-red">
      <Navbar />
      <Hero />
      <Promotions />
      <BlakLab />
      <InnerCircle />
    </div>
  );
};

export default Index;