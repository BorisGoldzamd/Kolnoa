const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

// Rutas para la página principal
router.get('/', HomeController.getHomePage);
router.get('/settings', HomeController.getHomeSettings);
// Otras rutas relacionadas con la página principal...

module.exports = router;
