const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to Globetrotter_dest database
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Globetrotter_dest', // Specify the database for destinations
    });
    console.log('MongoDB Globetrotter_dest Connected');

    // Connect to the user database
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Globetrotter_dest', // Connect to the same database where the user collection is stored
    });
    console.log('MongoDB user Connected');
    
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
