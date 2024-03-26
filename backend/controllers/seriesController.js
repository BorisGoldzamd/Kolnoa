// controllers/seriesController.js

// Import the series model
const Series = require('../models/series');

// Controller to get all series
exports.getAllSeries = async (req, res) => {
    try {
        const series = await Series.query();
        res.json(series);
    } catch (error) {
        console.error('Error fetching all series:', error);
        res.status(500).json({ error: 'Error fetching all series' });
    }
};

// Controller to get a series by its ID
exports.getSeriesById = async (req, res) => {
    const { id } = req.params;
    try {
        const series = await Series.query().findById(id);
        if (!series) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.json(series);
    } catch (error) {
        console.error('Error fetching series by ID:', error);
        res.status(500).json({ error: 'Error fetching series by ID' });
    }
};

// Controller to add a new series
exports.addSeries = async (req, res) => {
    const newSeriesData = req.body;
    try {
        const newSeries = await Series.query().insert(newSeriesData);
        res.status(201).json(newSeries);
    } catch (error) {
        console.error('Error adding a new series:', error);
        res.status(500).json({ error: 'Error adding a new series' });
    }
};

// Controller to update an existing series
exports.updateSeries = async (req, res) => {
    const { id } = req.params;
    const updatedSeriesData = req.body;
    try {
        const updatedSeries = await Series.query().patchAndFetchById(id, updatedSeriesData);
        if (!updatedSeries) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.json(updatedSeries);
    } catch (error) {
        console.error('Error updating the series:', error);
        res.status(500).json({ error: 'Error updating the series' });
    }
};

// Controller to delete a series
exports.deleteSeries = async (req, res) => {
    const { id } = req.params;
    try {
        const numDeleted = await Series.query().deleteById(id);
        if (numDeleted === 0) {
            return res.status(404).json({ error: 'Series not found' });
        }
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting the series:', error);
        res.status(500).json({ error: 'Error deleting the series' });
    }
};
