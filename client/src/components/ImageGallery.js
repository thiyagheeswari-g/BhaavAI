import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data.images);
    };

    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`Generated ${index}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
