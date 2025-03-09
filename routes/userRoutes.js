const express = require('express');
const { registerUser, getUserScore, updateUserScore } = require('../controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to get the score of a user
router.get('/:username', getUserScore);

// Route to update a user's score
router.post('/:username/score', updateUserScore);

module.exports = router;
