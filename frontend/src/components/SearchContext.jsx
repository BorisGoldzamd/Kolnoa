import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchSearchResults = async (search) => {
        try {
            const response = await fetch(`/search?search=${encodeURIComponent(search)}`);
            const data = await response.json();
            setSearchResults(data);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <SearchContext.Provider value={{ searchResults, searchTerm, setSearchTerm, fetchSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};
