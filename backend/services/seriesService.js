import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const apiKey = process.env.MY_API_KEY_OMBd;  // Asegúrate de que esto es correcto

export const getSeries = async (limit) => {
    const searchTerms = ["Doctor House", "Grey's Anatomy", "Friends", "One Piece", "Los Simpson"];
    let seriesResults = [];

    for (let term of searchTerms) {
        const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(term)}&type=series`;
        try {
            const response = await axios.get(url);
            if (response.data.Response === "True") {
                seriesResults.push({
                    searchTerm: term,
                    series: response.data.Search.slice(0, limit)
                });
            } else {
                seriesResults.push({ searchTerm: term, series: [], message: "No results found" });
            }
        } catch (error) {
            console.error(`Error fetching series for ${term}:`, error);
            seriesResults.push({ searchTerm: term, error: error.message });
        }
    }

    return seriesResults;
};
