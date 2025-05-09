import React, { useState } from 'react';

import logo2 from '../assets/logo2.png'
import Forauthors from './Forauthors';
import Qualityreports from './Qualityreports';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="navbar">
        <div className="navbar__logo">
          <img src={logo2} alt="logo" />
        </div>

        <nav className={`navbar__links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}>About us</a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Our Journals</a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}><Forauthors/></a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}><Qualityreports/></a></li>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
            <li>
              <button className="login-btn" onClick={() => setMenuOpen(false)}>Login/Signup</button>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon */}
        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </div>
      </header>
    </>
  );
};

export default Navbar;