import React from 'react';
import { Card } from '@/components/ui/card';
import { Search, ShoppingCart, TrendingUp, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Pick to stack on",
    description: "Research $BLAK before you invest"
  },
  {
    icon: ShoppingCart,
    title: "Buy on the bonding curve",
    description: "Get your $BLAK tokens"
  },
  {
    icon: TrendingUp,
    title: "Sell anytime",
    description: "Cash out when you want"
  },
  {
    icon: BarChart,
    title: "Market cap hits $100k",
    description: "Everyone is burned"
  }
];

const GetBlak = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        How to Get Your Hands on $BLAK
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <Card key={index} className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <step.icon className="w-8 h-8 text-white" />
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GetBlak;