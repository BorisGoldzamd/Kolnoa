import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import '../assets/navbar.css';

const Navbar = () => {
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
        </nav>
    );
}

export default Navbar;
