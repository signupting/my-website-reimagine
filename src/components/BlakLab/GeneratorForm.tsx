import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface GeneratorFormProps {
  wordInput: string;
  onInputChange: (value: string) => void;
  onGenerate: () => void;
  onSave: () => void;
  isLoading: boolean;
  hasGeneratedImage: boolean;
}

const GeneratorForm: React.FC<GeneratorFormProps> = ({
  wordInput,
  onInputChange,
  onGenerate,
  onSave,
  isLoading,
  hasGeneratedImage
}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onGenerate();
    }} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-white text-left">Create Your Legend</label>
        <Input
          type="text"
          placeholder="Word ideas?"
          value={wordInput}
          onChange={(e) => onInputChange(e.target.value)}
          className="bg-white/20 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button 
          type="submit"
          variant="outline" 
          className="w-full bg-white/20 text-white hover:bg-white/30"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            'Start'
          )}
        </Button>
        <Button 
          type="button"
          className="w-full bg-blak-red hover:bg-blak-darker text-white"
          disabled={!hasGeneratedImage}
          onClick={onSave}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default GeneratorForm;