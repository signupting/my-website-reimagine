import React from 'react';
import { Card } from '@/components/ui/card';

const Promotions = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-blak-red to-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Text Sections */}
        <div className="space-y-8 text-center">
          <img 
            src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20text%201.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogdGV4dCAxLnN2ZyIsImlhdCI6MTczNDM0NTMyMCwiZXhwIjoyMDQ5NzA1MzIwfQ.-zF0PoUNcIVkmAWKE9KUTeuuVKRGKEP9SAFPX7oPIkM"
            alt="First Text Section"
            className="max-w-full h-auto mx-auto animate-fade-in"
          />
          <img 
            src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20text%202.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogdGV4dCAyLnN2ZyIsImlhdCI6MTczNDM0NTM5MiwiZXhwIjoyMDQ5NzA1MzkyfQ.O-WtotR2CKpw_JWyLbdg-LoT_OiHyr7kePAdtH6_57c"
            alt="Second Text Section"
            className="max-w-full h-auto mx-auto animate-fade-in"
          />
        </div>

        {/* Promotional Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
            <img 
              src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20Telegram.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogVGVsZWdyYW0ucG5nIiwiaWF0IjoxNzM0MzQ1NTAyLCJleHAiOjIwNDk3MDU1MDJ9.iVqGC8EDBKspYGxPExdnMtnA2LalanPQ2pd9UrFiHUQ"
              alt="Telegram Promotion"
              className="w-full h-auto rounded-lg animate-fade-in"
            />
          </Card>
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300">
            <img 
              src="https://tryktqmmjylhzmuibcmi.supabase.co/storage/v1/object/sign/blak-assets/Project%20files/Page%202:%20X.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJibGFrLWFzc2V0cy9Qcm9qZWN0IGZpbGVzL1BhZ2UgMjogWC5zdmciLCJpYXQiOjE3MzQzNDU1NDksImV4cCI6MjA0OTcwNTU0OX0.kHDB-D4IqoC79LgGfQ9NOCCvvehVNHjlxIwIzeVqBJ4"
              alt="X Promotion"
              className="w-full h-auto rounded-lg animate-fade-in"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Promotions;