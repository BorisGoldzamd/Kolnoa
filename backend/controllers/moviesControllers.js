const knex = require('knex');
const dbConfig = require('../config/dbConfig');

const db = knex(dbConfig);

// Controller to get all movies
exports.getAllMovies = (req, res) => {
    db('movies')
        .select('*')
        .then(movies => {
            res.json(movies);
        })
        .catch(error => {
            console.error('Error fetching all movies:', error);
            res.status(500).json({ error: 'Error fetching all movies' });
        });
};

// Controller to get a movie by its ID
exports.getMovieById = (req, res) => {
    const { id } = req.params;
    db('movies')
        .where({ id })
        .first()
        .then(movie => {
            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.json(movie);
        })
        .catch(error => {
            console.error('Error fetching movie by ID:', error);
            res.status(500).json({ error: 'Error fetching movie by ID' });
        });
};

// Controller to add a new movie
exports.addMovie = (req, res) => {
    const newMovieData = req.body;
    db('movies')
        .insert(newMovieData)
        .returning('*')
        .then(newMovie => {
            res.status(201).json(newMovie[0]);
        })
        .catch(error => {
            console.error('Error adding a new movie:', error);
            res.status(500).json({ error: 'Error adding a new movie' });
        });
};

// Controller to update an existing movie
exports.updateMovie = (req, res) => {
    const { id } = req.params;
    const updatedMovieData = req.body;
    db('movies')
        .where({ id })
        .update(updatedMovieData)
        .returning('*')
        .then(updatedMovie => {
            if (!updatedMovie) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.json(updatedMovie[0]);
        })
        .catch(error => {
            console.error('Error updating the movie:', error);
            res.status(500).json({ error: 'Error updating the movie' });
        });
};

// Controller to delete a movie
exports.deleteMovie = (req, res) => {
    const { id } = req.params;
    db('movies')
        .where({ id })
        .del()
        .then(numDeleted => {
            if (numDeleted === 0) {
                return res.status(404).json({ error: 'Movie not found' });
            }
            res.status(204).end();
        })
        .catch(error => {
            console.error('Error deleting the movie:', error);
            res.status(500).json({ error: 'Error deleting the movie' });
        });
};
