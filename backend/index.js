// Importaciones necesarias
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


// Importa tus archivos de rutas
import movieRoutes from './routes/movieRoutes.js';
import seriesRoutes from './routes/seriesRoutes.js';
import searchRoutes from './routes/searchRoutes.js';

// Inicializar dotenv para usar variables de entorno
dotenv.config();

// Crear una instancia de express
const app = express();

// Configuraciones básicas de middleware
app.use(express.json()); // Para parsear JSON
app.use(cors()); // Habilita CORS si necesitas soporte para CORS

// Utilizar las rutas
app.use('/movies', movieRoutes);
app.use('/series', seriesRoutes);
app.use('/search', searchRoutes);

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!");
});

// Configurar el puerto y poner el servidor a escuchar peticiones
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

