// SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css'
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
