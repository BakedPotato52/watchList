//SearchBar.js
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './styles.css';


function SearchBox() {
    const [searchQuery, setSearchQuery] = useState(''); // State for the search query

    // Function to handle input change
    const handleInputChange = (event) => {
        console.log('Input changed:', event.target.value); // This line will log the entered value
        setSearchQuery(event.target.value); // Update searchQuery state with the input value
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Handle form submission (you can replace this with your logic)
        console.log('Search Query:', searchQuery); // Log the search query to console
    };

    return (
        <div id="center" className="masthead">
            <form id="search-form" action="/results" className="Search" onSubmit={handleSubmit}>
                <div id="container" className="style-scope ytd-searchbox">
                    <div id="search-input" className="ytd-searchbox-spt" slot="search-input">
                        <input
                            id="search"
                            autoComplete="off"
                            name="search_query"
                            type="text"
                            placeholder="Search..."
                            aria-label="Search..."
                            value={searchQuery}
                            onChange={handleInputChange} // Call handleInputChange function on input change
                        />
                        {/* Submit button */}
                        <button type="submit" id="search-icon" className="searchIcon" aria-label="Search" onClick={handleSubmit}> {/* Corrected typo here */}
                            <FaSearch />
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
}

export default SearchBox;

