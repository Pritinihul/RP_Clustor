import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png';
import Forauthors from './Forauthors';
import Qualityreports from './Qualityreports';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo2} alt="logo" />
      </div>

      <nav className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/" onClick={closeMenu}>Our Journals</Link></li>
          <li><Link to="/" onClick={closeMenu}>{<Forauthors/>}</Link></li>
          <li><Link to="/" onClick={closeMenu}>{<Qualityreports/>}</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          <li><Link to="/register" onClick={closeMenu}>Login/Signup</Link></li>
        </ul>
      </nav>

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
  );
};

export default Navbar;
