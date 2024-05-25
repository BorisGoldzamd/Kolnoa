import {Routes, Route } from 'react-router-dom'; // Solo una importación de Route
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Movies from './pages/Movies.jsx';
import Series from './pages/Series.jsx';
import Settings from './pages/Settings.jsx';
import { SearchProvider } from './components/SearchContext.jsx';

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                <SearchProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/series" element={<Series />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </SearchProvider>
            </div>
        </>
    );
}

export default App;
