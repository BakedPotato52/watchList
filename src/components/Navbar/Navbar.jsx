//Navbar.js
import React, { useState } from 'react';
import './styles.css';
import {
  FaBars,
} from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';

import 'reactjs-popup/dist/index.css';

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
    <nav className={`nav ${isDarkMode ? 'dark' : 'light'}`}>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}

      <div className='navbar_Search'>

        <SearchBox />

      </div>

      <div id='theme' className='Theme'>
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={50} speed={1} />
      </div>
    </nav>
  );
};

export default Navbar;
