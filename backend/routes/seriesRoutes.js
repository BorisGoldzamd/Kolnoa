// routes/series.js

const express = require('express');
const router = express.Router();

// Importar el controlador de series
const seriesController = require('../controllers/seriesController');

// Ruta para obtener todas las series
router.get('/', seriesController.getAllSeries);

// Ruta para obtener una serie por su ID
router.get('/:id', seriesController.getSeriesById);

// Ruta para agregar una nueva serie
router.post('/', seriesController.addSeries);

// Ruta para actualizar una serie existente
router.put('/:id', seriesController.updateSeries);

// Ruta para eliminar una serie
router.delete('/:id', seriesController.deleteSeries);

module.exports = router;
