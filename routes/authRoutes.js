const express = require('express');
const { addBook, getAllBooks, updateBook, deleteBook } = require('../controllers/bookController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, addBook);
router.get('/', getAllBooks);
router.put('/:id', protect, admin, updateBook);
router.delete('/:id', protect, admin, deleteBook);

module.exports = router;
