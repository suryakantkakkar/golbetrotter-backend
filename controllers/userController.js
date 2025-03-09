const User = require('../models/User');

// Register a new user
const registerUser = async (req, res) => {
  const { username } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Create a new user if not exists
    user = new User({
      username,
      score: 0,  // Set initial score to 0
    });

    await user.save();
    res.json({ success: true, message: 'User registered successfully', user });  // Added success field
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error registering user' });
  }
};


// Get the user's score by username
const getUserScore = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, username: user.username, score: user.score });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error fetching user score' });
  }
};


// Update the user's score by username
const updateUserScore = async (req, res) => {
  const { username } = req.params;
  const { score } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { score },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User score updated successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating score' });
  }
};

module.exports = { registerUser, getUserScore, updateUserScore };
