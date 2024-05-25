import axios from 'axios';

export const searchOMDB = async (req, res) => {
    const { search } = req.query;
    let type = req.path.includes('/movies') ? 'movie' :
               req.path.includes('/series') ? 'series' : undefined;

    const apiKey = process.env.MY_API_KEY_OMBd;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(search)}` + (type ? `&type=${type}` : '');

    try {
        const response = await axios.get(url);
        if (response.data.Response === "True") {
            res.json(response.data.Search);
        } else {
            res.status(404).json({ message: response.data.Error });
        }
    } catch (error) {
        console.error('Error in searchOMDB:', error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getStreamingInfo = async (req, res) => {
    const { title } = req.params;
    const apiKey = process.env.MY_API_KEY_RapidApi;
    const url = `https://streaming-availability.p.rapidapi.com/search/title?title=${encodeURIComponent(title)}&country=il&show_type=all&output_language=en`;
    const options = {
        headers: {
            "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
            "x-rapidapi-key": apiKey
        }
    };

    try {
        const response = await axios.get(url, options);
        const data = response.data;
        if (response.status === 200) {
            res.json(data.result[0]?.streamingInfo?.il || {});
        } else {
            res.status(response.status).json({ message: data.message });
        }
    } catch (error) {
        console.error('Error in getStreamingInfo:', error);
        res.status(500).json({ message: "Server error" });
    }
};
