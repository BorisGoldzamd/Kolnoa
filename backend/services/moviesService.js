import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.MY_API_KEY_OMBd; // Asegúrate de que el nombre de la variable de entorno es correcto

export const getmovies = async (limit) => {
    const searchTerms = ["Super", "Harry Potter", "Lord of the rings", "Marvel", "Batman"];
    let moviesResults = [];

    for (let term of searchTerms) {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(term)}&type=movie`;
        try {
            const response = await axios.get(url);
            if (response.data.Response === "True") {
                moviesResults.push({
                    searchTerm: term,
                    movies: response.data.Search.slice(0, limit)
                });
            } else {
                moviesResults.push({ searchTerm: term, movies: [], message: "No results found" });
            }
        } catch (error) {
            console.error(`Error fetching movies for ${term}:`, error);
            moviesResults.push({ searchTerm: term, error: error.message });
        }
    }

    return moviesResults;
};
