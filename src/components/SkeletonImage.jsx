import { useState, useEffect } from 'react';

const SkeletonImage = ({ src, alt, className, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = src;
    
    const handleLoad = () => {
      setIsLoading(false);
      setImageSrc(src);
    };

    image.onload = handleLoad;
    
    // Cleanup
    return () => {
      image.onload = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;
