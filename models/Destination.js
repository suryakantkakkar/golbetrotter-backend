const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  clues: [String],
  fun_fact: [String],
  trivia: [String]
}, {
  timestamps: true,
});

// Define the model for the 'Globetrotter_dest' collection in the 'Globetrotter_dest' database
const Destination = mongoose.model('Destination', destinationSchema, 'destination');

module.exports = Destination;
