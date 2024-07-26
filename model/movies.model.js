const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema(
  {
    movieName: { 
        type: String, 
        required: true
    },
    duration: { 
        type: Number, 
        required: true,
        validate: {
            validator: Number.isInteger,
            message: 'Duration should be an integer.'
        },
        min: [1, 'Duration should be positive.']
    },
    yearOfRelease: { 
        type: Number, 
        required: true,
        validate: {
            validator: Number.isInteger,
            message: 'Year of Release should be an integer.'
        },
        min: [1, 'Year of Release should be positive.'] },
    genre: {
        type: String,
        required: true,
        enum: ['Action', 'Comedy', 'RomCom', 'Thriller', 'Classic']
    },
    director: { 
        type: String, 
        required: false
    },
    },
  { timestamps: true }
);

const Movies = mongoose.model('Movie', movieSchema);

module.exports = Movies;
