const express = require('express');
const router = express.Router();
const { addBook, getAllBooks } = require('../controllers/bookController');

// Temporarily disable JWT middleware for testing
router.post('/', addBook);
router.get('/', getAllBooks);

module.exports = router;
