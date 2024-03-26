const express = require('express');
const app = express();
const movieRoutes = require('./routes/movieRoutes');
const seriesRoutes = require('./routes/seriesRoutes');

const PORT = process.env.PORT || 3000; // Puerto predeterminado 3000 o el puerto definido en la variable de entorno PORT

// Usar las rutas definidas en los archivos movieRoutes.js y seriesRoutes.js
app.use('/movies', movieRoutes);
app.use('/series', seriesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
