const Image = require('../models/Image');

const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json({ images });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const generateImage = async (req, res) => {
  try {
    // Add logic to generate image
    const newImage = new Image({ url: 'http://example.com/newimage.png' });
    await newImage.save();
    res.json({ image: newImage.url });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getImages,
  generateImage,
};
