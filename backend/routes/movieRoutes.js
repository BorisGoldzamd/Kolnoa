import express from 'express';
import { fetchMovies } from '../controllers/moviesController.js';

const router = express.Router();

router.get('/movies', fetchMovies);

export default router;
