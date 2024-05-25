import { useState, useEffect } from 'react';
import fetchMovies from '../services/getMovies';
import Carousel from '../components/Carousel/Carousel';
import StreamingModal from '../components/StreamingModal';  
import searchMovieAvaiable from '../services/searchMovieAvaiable';
function Movies() {
    const [movies, setMovies] = useState([]);
    const [streamingInfo, setStreamingInfo] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        const getMovies = async () =>{
            const movies = await fetchMovies();
            setMovies(movies);
        }
        getMovies();
    }, []);

    const onMovieClick = async (title) => {
        setIsModalOpen(true);
        const searchMovie = await searchMovieAvaiable(title);
        setStreamingInfo(searchMovie);
    };
    

    return (
        <div>
            <h1>Movies</h1>
            <Carousel items={movies} onMovieClick={onMovieClick}/>
            {isModalOpen && <StreamingModal info={streamingInfo} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
export default Movies;
