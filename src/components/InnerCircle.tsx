import React from 'react';
import { Card } from '@/components/ui/card';
import { Gift, Users, Trophy, Star } from 'lucide-react';

const benefits = [
  {
    icon: Gift,
    title: "Daily NFTs delivered straight to your wallet",
  },
  {
    icon: Users,
    title: "Exclusive giveaways for the real ones",
  },
  {
    icon: Trophy,
    title: "First access to new legend reveals",
  },
  {
    icon: Star,
    title: "Build contracts w/ DJ Khaled",
  },
];

const InnerCircle = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">THE INNER CIRCLE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <benefit.icon className="w-8 h-8 text-white" />
              <p className="text-white">{benefit.title}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InnerCircle;