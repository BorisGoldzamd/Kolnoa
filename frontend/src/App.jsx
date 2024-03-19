import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Solo una importación de Route
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Movies from './components/Movies.jsx';
import Series from './components/Series.jsx';
import Settings from './components/Settings.jsx';

const App = () => {
    return (
        <>
            <div>
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/series" element={<Series />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
            </div>
        </>
    );
}

export default App;
