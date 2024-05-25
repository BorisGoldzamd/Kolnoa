import axios from 'axios';
import dotenv from 'dotenv';
import Movie from '../models/movies.js';
import Series from '../models/series.js';

dotenv.config();

export const searchOMDB = async (req, res) => {
    const { search, type } = req.query;
    const apiKey = process.env.MY_API_KEY_OMBd;
    let searchUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}&type=${type}`;

    try {
        let searchResponse = await axios.get(searchUrl);
        if (searchResponse.data.Response === "True") {
            // Decidir qué modelo usar basado en el tipo
            const Model = type === 'series' ? Series : Movie;
            const results = await Promise.all(
                searchResponse.data.Search.map(async item => {
                    let detailUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(item.Title)}`;
                    let detailResponse = await axios.get(detailUrl);
                    return new Model(detailResponse.data); // Usar el modelo apropiado para formatear los datos
                })
            );
            res.json(results); // Devuelve una lista de instancias del modelo correspondiente con detalles completos
        } else {
            res.status(404).json({ message: searchResponse.data.Error });
        }
    } catch (error) {
        console.error('Error in searchOMDB:', error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getStreamingInfo = async (req, res) => {
    const { title } = req.params;  // Recibe el título como parametro en la URL
    const apiKey1 = process.env.MY_API_KEY_RapidApi;
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${encodeURIComponent(title)}&country=il&show_type=all&output_language=en`;
    const options = {
        headers: {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": apiKey1
        }
    };

    try {
        const response = await axios.get(url, options);
        const data = response.data; // La respuesta ya viene parseada con axios
        if (response.status === 200) {
            res.json(data.result[0]?.streamingInfo?.il || []);
        } else {
            res.status(response.status).json({ message: data.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
