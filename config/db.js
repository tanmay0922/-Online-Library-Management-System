const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
            useNewUrlParser: true, // Optional, useNewUrlParser is true by default
            useUnifiedTopology: true, // Optional, useUnifiedTopology is true by default
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
