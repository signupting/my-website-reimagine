import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Promotions from '@/components/Promotions';
import BlakLab from '@/components/BlakLab';
import InnerCircle from '@/components/InnerCircle';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="bg-[#FF0000]">
        <Promotions />
        <BlakLab />
        <InnerCircle />
      </div>
    </div>
  );
};

export default Index;