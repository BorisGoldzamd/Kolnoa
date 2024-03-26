// routes/series.js

const express = require('express');
const router = express.Router();

// Importar el controlador de series
const seriesController = require('../controllers/seriesController');

// Ruta para obtener todas las series
router.get('/series', seriesController.getAllSeries);

// Ruta para obtener una serie por su ID
router.get('/series/:id', seriesController.getSeriesById);

// Ruta para agregar una nueva serie
router.post('/series', seriesController.addSeries);

// Ruta para actualizar una serie existente
router.put('/series/:id', seriesController.updateSeries);

// Ruta para eliminar una serie
router.delete('/series/:id', seriesController.deleteSeries);

module.exports = router;
