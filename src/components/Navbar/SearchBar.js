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
        <div id="center" className='flex flex-row'>
            <div className="flex items-center flex-shrink-1 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-2 rounded-l-full sm:w-full h-9">
                <form id="search-form" action="/results" className="flex items-center justify-center p-2 w-full" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent text-black dark:text-white w-full focus:outline-none"
                        aria-label='Search'
                        value={searchQuery}
                        onChange={handleInputChange} // Call handleInputChange function on input change
                    />
                </form>
            </div>
            <button
                type="submit"
                id="search-icon"
                className='flex justify-end items-center bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white p-2 rounded-r-full h-9 hover:bg-slate-500'
                aria-label="Search"
                onClick={handleSubmit}
            > {/* Corrected typo here */}
                <FaSearch className='text-black' />
            </button>
        </div>

    );
}

export default SearchBox;

