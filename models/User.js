const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
}, {
  timestamps: true,
});

// Define the model for the 'user' collection inside the 'Globetrotter_dest' database
const User = mongoose.model('User', userSchema, 'user');

module.exports = User;
