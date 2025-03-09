const express = require('express');
const router = express.Router();
const { getRandomDestination } = require('../controllers/destinationController');

// Route to get a random destination
router.get('/random', getRandomDestination);

module.exports = router;
