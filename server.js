const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Define your routes
app.use("/api/destinations", require("./routes/destinationRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Define a default route
app.get("/", (req, res) => {
  res.send("Hello!");
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
