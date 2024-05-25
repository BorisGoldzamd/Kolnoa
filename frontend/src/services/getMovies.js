import url from './url.js';
async function fetchMovies() {
    try {
        const response = await fetch(`${url}/movies`);
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const data = await response.json();
        console.log("API Response:", data);  // Muestra toda la respuesta de la API.
        
        // Asumiendo que cada item en data es un objeto con una propiedad 'movies'
        const allMovies = data.reduce((acc, item) => {
            const transformed = item.movies.map(movie => ({
                posterUrl: movie.Poster,
                title: movie.Title
            }));
            return acc.concat(transformed);
        }, []);

        return allMovies;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}


export default fetchMovies;

