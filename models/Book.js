const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    availabilityStatus: { type: Boolean, default: true },
});

module.exports = mongoose.model('Book', BookSchema);
