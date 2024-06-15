const Book = require('../models/Book');

// Add a new book
exports.addBook = async (req, res) => {
    const { name, author, availabilityStatus } = req.body;
    try {
        const book = new Book({ name, author, availabilityStatus });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a book
exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { name, author, availabilityStatus } = req.body;
    try {
        const book = await Book.findByIdAndUpdate(id, { name, author, availabilityStatus }, { new: true });
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
