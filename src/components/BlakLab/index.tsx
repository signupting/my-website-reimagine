import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import GeneratorForm from './GeneratorForm';
import ImagePreview from './ImagePreview';
import type { ToastMessage } from '@/types';

const BlakLab: React.FC = () => {
  const [wordInput, setWordInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const showToast = ({ title, description, variant = "default" }: ToastMessage) => {
    toast({ title, description, variant });
  };

  const generateImage = async () => {
    if (!wordInput) {
      showToast({
        title: "Input required",
        description: "Please enter a prompt before starting.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/signupting/blak-lora-model', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify({ inputs: wordInput })
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setGeneratedImage(imageUrl);
      
      showToast({
        title: "Success!",
        description: "Your BLAK MEME has been generated."
      });
    } catch (error) {
      showToast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive"
      });
      console.error('Image generation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'blak-meme.png';
      link.click();
    }
  };

  return (
    <section className="py-20 px-4" aria-labelledby="blak-lab-title">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="blak-lab-title" className="text-4xl font-bold text-white mb-2">BLAK LAB</h2>
        <p className="text-white/70 mb-12">Create legendary BLAK MEME's with our AI generator</p>

        <Card className="p-8 bg-white/10 backdrop-blur-lg border-white/20">
          <GeneratorForm
            wordInput={wordInput}
            onInputChange={setWordInput}
            onGenerate={generateImage}
            onSave={handleSave}
            isLoading={isLoading}
            hasGeneratedImage={!!generatedImage}
          />

          {generatedImage && <ImagePreview imageUrl={generatedImage} />}
        </Card>
      </div>
    </section>
  );
};

export default BlakLab;