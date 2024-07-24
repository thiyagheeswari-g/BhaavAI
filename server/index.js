const express = require('express');
const connectDB = require('./config/db');
const imageRoutes = require('./routes/imageRoutes');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/images', imageRoutes);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
