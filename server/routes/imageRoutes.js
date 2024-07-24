const express = require('express');
const { getImages, generateImage } = require('../controllers/imageController');
const router = express.Router();

router.get('/', getImages);
router.post('/generate', generateImage);

module.exports = router;
