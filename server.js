const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config.json');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
const mongoUri = config.mongoUri;

// Middleware setup
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB database connection established successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

const connection = mongoose.connection;

// Event listener for MongoDB connection errors
connection.on('error', (error) => {
  console.error("MongoDB connection error:", error);
});

// Routes
const moviesRouter = require('./routes/movies');
app.use('/movies', moviesRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;  