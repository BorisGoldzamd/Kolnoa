// routes/movies.js

const express = require('express');
const router = express.Router();

// Importar el controlador de películas
const moviesController = require('../controllers/moviesControllers');

// Ruta para obtener todas las películas
router.get('/', moviesController.getAllMovies);

// Ruta para obtener una película por su ID
router.get('/:id', moviesController.getMovieById);

// Ruta para agregar una nueva película
router.post('/', moviesController.addMovie);

// Ruta para actualizar una película existente
router.put('/:id', moviesController.updateMovie);

// Ruta para eliminar una película
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
