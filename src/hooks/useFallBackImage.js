
import { useState } from 'react';

const useFallbackImage = (src, fallback) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return [imgSrc, handleError];
};

export default useFallbackImage;
