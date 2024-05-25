import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from './SearchContext';  // Importa el hook personalizado

const Navbar = () => {
    // Accede al contexto de búsqueda
    const { searchTerm, setSearchTerm, fetchSearchResults } = useSearch();

    // Maneja los cambios en el input de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);  // Actualiza el término de búsqueda en el contexto
    };

    // Maneja el envío del formulario de búsqueda
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchSearchResults(searchTerm);  // Ejecuta la búsqueda usando el término actualizado
    };

    return (
        <nav className="navbar-container">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">
                        <FontAwesomeIcon icon={faHome} className="navbar-icon" />
                        Home
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/movies" className="navbar-link">
                        <FontAwesomeIcon icon={faFilm} className="navbar-icon" />
                        Movies
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/series" className="navbar-link">
                        <FontAwesomeIcon icon={faTv} className="navbar-icon" />
                        Series
                    </Link>
                </li>
                <li className="navbar-item-settings">
                    <Link to="/settings" className="navbar-link">
                        <FontAwesomeIcon icon={faCog} className="navbar-icon" />
                        <span className="navbar-text">Settings</span>
                    </Link>
                </li>
            </ul>
            <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search movies, series..."
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;
