//Navbar.js
import React, { useState } from 'react';
import './styles.css';
import {
  FaBars,
} from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import SearchBox from './SearchBar';



const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  //const [search, setSearch] = useState('');
  //const [signupVisible, setSignupVisible] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    // You can also store the theme preference in localStorage or any state management solution
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
  };


  const showSidebar = () => setSidebar(!sidebar);
  //const handleSearch = (e) => setSearch(e.target.value);

  //  const toggleSignup = () => setSignupVisible(!signupVisible);

  return (
    <header className="z-[100]">
      <nav className={`nav ${isDarkMode ? 'dark' : 'light'}`}>
        <FaBars className='w-6 h-6 mr-4 align-middle' onClick={showSidebar} />
        {sidebar && <Sidebar active={setSidebar} />}

        <SearchBox />
        <div id='theme' className='Theme'>
          <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={50} speed={1} />
        </div>
      </nav >
    </header>
  );
};

export default Navbar;

