const Destination = require("../models/Destination");

exports.getRandomDestination = async (req, res) => {
  try {
    // Fetch all destinations from the 'Globetrotter_dest' collection
    const destinations = await Destination.find();

    if (destinations.length === 0) {
      return res.status(404).json({ message: 'No destinations found' });
    }

    // Randomize and pick one destination
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];

    res.json(randomDestination);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching random destination', error: err });
  }
};
