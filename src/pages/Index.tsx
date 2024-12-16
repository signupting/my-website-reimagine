import React from 'react';
import Hero from '@/components/Hero';
import GetBlak from '@/components/GetBlak';
import BlakLab from '@/components/BlakLab';
import InnerCircle from '@/components/InnerCircle';

const Index = () => {
  return (
    <div className="min-h-screen bg-blak-red">
      <Hero />
      <GetBlak />
      <BlakLab />
      <InnerCircle />
    </div>
  );
};

export default Index;