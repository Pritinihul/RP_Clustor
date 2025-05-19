import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // make sure useNavigate is imported
import axios from 'axios';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [author, setAuthor] = useState(null);
  const navigate = useNavigate();  // 🔴 Required for navigation

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // 🔁 Fetch author data if logged in
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      axios.get('http://localhost:8000/api/current-author/', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => setAuthor(res.data))
      .catch(err => {
        console.error("Token invalid or expired:", err);
        setAuthor(null);
      });
    }
  }, []);

  // 🔐 Logout function — ⬇️ Add this here
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('authorData');
    setAuthor(null);
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo2} alt="logo" />
      </div>

      <nav className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/#home"  onClick={closeMenu}>Home</a></li>
          <li><a href="/#about" onClick={closeMenu}>About Us</a></li>
          <li><a href="/#journals" onClick={closeMenu}>Our Journals</a></li>
          <li><Link to="/" onClick={closeMenu}>For Authors</Link></li>
          <li><Link to="/" onClick={closeMenu}>Quality Reports</Link></li>
          <li><Link to="/contact"  onClick={closeMenu}>Contact Us</Link></li>

          {author ? (
  <>
    <li>
      <span 
        onClick={() => navigate('/dashboard')} 
        style={{ cursor: 'pointer' }}
        title="Go to Dashboard"
      >
        👤 {author.Name}
      </span>
    </li>
    <li><button onClick={handleLogout}>Logout</button></li>
  </>
) : (
  <li><Link to="/register" onClick={closeMenu}>Login/Signup</Link></li>
)}

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
