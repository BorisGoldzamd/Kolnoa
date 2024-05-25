// En el componente Movies.js

import { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Realiza la solicitud al backend para obtener los datos de las películas
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <Carousel items={movies.map(movie => ({
        title: movie.title,
        description: movie.description, // Puedes usar la descripción si lo deseas
        releaseYear: movie.release_year,
        genre: movie.genre,
        videoUrl: movie.embed_code.match(/src="([^"]+)"/)[1] // Extrae la URL del src del iframe
      }))} />
    </div>
  );
};

export default Movies;
