import * as moviesService from '../services/moviesService.js';

export const fetchMovies = async (req, res) => {
    try {
        const movies = await moviesService.getMovies(10);  // Verifica el límite y el nombre de la función
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: "Internal Server Error", detail: error.message });
    }
};
