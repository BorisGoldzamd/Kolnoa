const knex = require('knex');
const knexConfig = require('../config/dbConfig');

const db = knex(knexConfig);

module.exports = {
    getAllMovies: async () => {
        try {
            const movies = await db.select('*').from('movies');
            return movies;
        } catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    },
    // Add more functions for CRUD operations if needed
};
