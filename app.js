const mongoose = require('mongoose');
require('dotenv').config();  // Make sure dotenv is loaded to use .env variables

// MongoDB URI from .env file
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
