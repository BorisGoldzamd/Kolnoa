import express from 'express';
const router = express.Router();
const homeRoutes = require('./homeRoutes');
const movieRoutes = require('./movieRoutes');
const seriesRoutes = require('./seriesRoutes');

router.use('/', homeRoutes);
router.use('/', movieRoutes);
router.use('/', seriesRoutes);

export default router;
