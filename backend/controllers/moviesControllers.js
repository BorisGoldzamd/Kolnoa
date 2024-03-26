// controllers/moviesController.js

// Import the movie model
const Movie = require('../models/movies');

// Controller to get all movies
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.query();
        res.json(movies);
    } catch (error) {
        console.error('Error fetching all movies:', error);
        res.status(500).json({ error: 'Error fetching all movies' });
    }
};

// Controller to get a movie by its ID
exports.getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.query().findById(id);
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        res.status(500).json({ error: 'Error fetching movie by ID' });
    }
};

// Controller to add a new movie
exports.addMovie = async (req, res) => {
    const newMovieData = req.body;
    try {
        const newMovie = await Movie.query().insert(newMovieData);
        res.status(201).json(newMovie);
    } catch (error) {
        console.error('Error adding a new movie:', error);
        res.status(500).json({ error: 'Error adding a new movie' });
    }
};

// Controller to update an existing movie
exports.updateMovie = async (req, res) => {
    const { id } = req.params;
    const updatedMovieData = req.body;
    try {
        const updatedMovie = await Movie.query().patchAndFetchById(id, updatedMovieData);
        if (!updatedMovie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(updatedMovie);
    } catch (error) {
        console.error('Error updating the movie:', error);
        res.status(500).json({ error: 'Error updating the movie' });
    }
};

// Controller to delete a movie
exports.deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const numDeleted = await Movie.query().deleteById(id);
        if (numDeleted === 0) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting the movie:', error);
        res.status(500).json({ error: 'Error deleting the movie' });
    }
};
