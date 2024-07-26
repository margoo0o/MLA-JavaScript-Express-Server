const express = require('express');
const router = express.Router();
const Movie = require('../models/movies.model');


// GET: Retrieve all movies stored in the Mongo DB
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (error) {
      res.status(400).json({ error: 'Error: ' + error.message });
    }
  });
  
// POST: Add a new exercise
router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    const { movieName, duration, yearOfRelease, genre, director } = req.body;

    const m = new Movie({
      movieName,
      duration: Number(duration),
      yearOfRelease: Number(yearOfRelease),
      genre,
      director,
    });

    const result = await m.save();
    res.json({ message: 'New Movie added!', id: result._id });
  } catch (error) {
    res.status(400).json({ error: 'Error: ' + error.message });
  }
});