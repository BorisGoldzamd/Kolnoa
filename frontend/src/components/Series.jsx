import { useState, useEffect } from 'react';
import Carousel from './Carousel';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Realiza la solicitud al backend para obtener los datos de las series
    fetch('http://localhost:3000/series')
      .then(response => response.json())
      .then(data => setSeries(data))
      .catch(error => console.error('Error fetching series:', error));
  }, []);

  return (
    <div>
      <h1>Series</h1>
      <Carousel items={series.map(serie => ({
        title: serie.title,
        description: serie.description, // Puedes usar la descripción si lo deseas
        releaseYear: serie.release_year,
        genre: serie.genre,
        videoUrl: serie.embed_code.match(/src="([^"]+)"/)[1] // Extrae la URL del src del iframe
      }))} />
    </div>
  );
};

export default Series;
