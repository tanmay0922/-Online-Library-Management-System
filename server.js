const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Debugging statements to check environment variables
console.log('Mongo URI:', process.env.MONGO_URI); 
console.log('JWT Secret:', process.env.JWT_SECRET); 

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', require('./routes/userRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
