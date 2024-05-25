import { useState, useEffect } from 'react';
import fetchSeries from '../services/getSeries'; // Asumiendo que tienes una función similar para series
import Carousel from '../components/Carousel/Carousel';
import StreamingModal from '../components/StreamingModal';  
import searchSeriesAvailable from '../services/searchSeriesAvailable'; // Asumiendo que tienes una función similar para series

function Series() {
    const [series, setSeries] = useState([]);
    const [streamingInfo, setStreamingInfo] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getSeries = async () => {
            const series = await fetchSeries();
            setSeries(series);
        }
        getSeries();
    }, []);

    const onSeriesClick = async (title) => {
        setIsModalOpen(true);
        const searchSeries = await searchSeriesAvailable(title);
        setStreamingInfo(searchSeries);
    };

    return (
        <div>
            <h1>Series</h1>
            <Carousel items={series} onSeriesClick={onSeriesClick} />
            {isModalOpen && <StreamingModal info={streamingInfo} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}

export default Series;
