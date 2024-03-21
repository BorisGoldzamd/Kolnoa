import React from 'react';
import Carousel from './Carousel';

const Series = () => {
  // Aquí recuperas los datos de las series desde tu base de datos o cualquier otra fuente
  const seriesData = [
    { videoUrl: 'https://www.youtube.com/embed/EySdVK0NK1Y?si=W7iiW9gE7ABK1EgN', title: 'Serie 1' },
    { videoUrl: 'https://www.youtube.com/embed/_inKs4eeHiI?si=g1HhqbEuuIJG9gJG', title: 'Serie 2' }
    // Agrega más datos de series según sea necesario
  ];

  return (
    <div>
      <h2>Series</h2>
      <Carousel items={seriesData} />
    </div>
  );
};

export default Series;
