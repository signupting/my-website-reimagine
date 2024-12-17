import React from 'react';

interface ImagePreviewProps {
  imageUrl: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl }) => {
  return (
    <div className="mt-8">
      <img 
        src={imageUrl} 
        alt="Generated BLAK MEME" 
        className="max-w-full h-auto rounded-lg shadow-lg animate-fade-in"
      />
    </div>
  );
};

export default ImagePreview;