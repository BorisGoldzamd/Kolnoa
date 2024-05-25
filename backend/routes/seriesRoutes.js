import express from 'express';
const router = express.Router();
import seriesController from'../controllers/seriesController';  // Asegúrate de que la ruta está correcta.

// Definir la ruta para obtener series
router.get('/', seriesController.fetchSeries);

export default router;
