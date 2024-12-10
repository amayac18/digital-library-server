const mongoose = require('mongoose');

// Define a schema for books
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  isFiction: { type: Boolean },
});

// Create a model for books
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
