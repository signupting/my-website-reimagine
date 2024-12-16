import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BlakLab = () => {
  const [wordInput, setWordInput] = useState('');

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-2">BLAK LAB</h2>
        <p className="text-white/70 mb-12">Create legendary BLAK MEME's with our AI generator</p>

        <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-white text-left">Create Your Legend</label>
              <Input
                type="text"
                placeholder="Word ideas?"
                value={wordInput}
                onChange={(e) => setWordInput(e.target.value)}
                className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full bg-white/20 text-white hover:bg-white/30">
                Start
              </Button>
              <Button className="w-full bg-blak-red hover:bg-blak-darker text-white">
                Save
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default BlakLab;