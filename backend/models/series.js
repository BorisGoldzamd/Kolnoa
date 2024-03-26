const knex = require('knex');
const knexConfig = require('../config/dbConfig');

const db = knex(knexConfig);

module.exports = {
    getAllSeries: async () => {
        try {
            const series = await db.select('*').from('series');
            return series;
        } catch (error) {
            console.error('Error fetching series:', error);
            throw error;
        }
    },
    // Add more functions for CRUD operations if needed
};
