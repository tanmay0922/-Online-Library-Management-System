const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new user
exports.register = async (req, res) => {
    const { username, name, email, password, contactNumber } = req.body;
    try {
        const hashedPassword = bcrypt.hashSync(password, 8);
        const user = new User({ username, name, email, password: hashedPassword, contactNumber });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login a user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, name, email, contactNumber, isAdmin } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, { username, name, email, contactNumber, isAdmin }, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
