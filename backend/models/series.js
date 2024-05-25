class Series {
    constructor(data) {
        this.title = data.Title;    // Título de la serie
        this.year = data.Year;      // Año de lanzamiento
        this.poster = data.Poster;  // URL del póster
        this.genre = data.Genre;    // Género(s) de la serie
    }
}

export default Series;
