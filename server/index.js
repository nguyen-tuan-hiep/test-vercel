const express = require('express');
const cors = require('cors');
const connectWithDB = require('./config/db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// connect with database
connectWithDB();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// middleware to handle json
app.use(express.json());

app.use(
  cors({
    origin: 'https://test-vercel-7nfi.vercel.app/',
    credentials: true,
  })
);

// use express router
app.use('/', require('./routes'));

app.listen('https://test-vercel-lime.vercel.app/', (err) => {
  if (err) {
    console.log('Error in connecting to server: ', err);
  }
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
