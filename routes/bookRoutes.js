const express = require('express');
const router = express.Router();
const { 
  createBook, 
  getAllBooks, 
  getBookById, 
  updateBook, 
  deleteBook 
} = require('../controllers/bookController');

// @route   POST /api/books
// @desc    Create a new book
// @access  Public
router.post('/', createBook);

// @route   GET /api/books
// @desc    Get all books
// @access  Public
router.get('/', getAllBooks);

// @route   GET /api/books/:id
// @desc    Get a book by ID
// @access  Public
router.get('/:id', getBookById);

// @route   PUT /api/books/:id
// @desc    Update a book by ID
// @access  Public
router.put('/:id', updateBook);

// @route   DELETE /api/books/:id
// @desc    Delete a book by ID
// @access  Public
router.delete('/:id', deleteBook);

module.exports = router;
