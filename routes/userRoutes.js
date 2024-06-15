const express = require('express');
const { register, login, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', protect, admin, getAllUsers);
router.put('/:id', protect, admin, updateUser);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
