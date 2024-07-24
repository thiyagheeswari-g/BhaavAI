import React, { useState } from 'react';

const ImageGenerator = () => {
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    // Add logic to call backend and generate image
    const response = await fetch('/api/images/generate');
    const data = await response.json();
    setImage(data.image);
  };

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {image && <img src={image} alt="Generated" />}
    </div>
  );
};

export default ImageGenerator;
