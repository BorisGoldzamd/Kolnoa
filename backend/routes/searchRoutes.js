import express from 'express';
const router = express.Router();

// Importa los controladores necesarios
const searchController = require('../controllers/searchController');

// Ruta para buscar en OMDB usando términos de búsqueda
router.get('/', searchController.searchOMDB);  // Uso de '/search'

// Ruta para obtener información de streaming basada en el título de la película
router.get('/available/:title', searchController.getStreamingInfo);  // Uso de '/search/available/:title'

export default router;