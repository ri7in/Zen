const { default: mongoose } = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const habits = require("./routes/habitRoutes");
const users = require("./routes/userRoutes");
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is required");
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.use("/api/habits", habits);

app.use("/api/users", users);

app.use('/api/doctors', require('./routes/doctors'));
app.use('/api/appointments', require('./routes/appointments'));
app.use('/api/feedback', require('./routes/feedback'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
