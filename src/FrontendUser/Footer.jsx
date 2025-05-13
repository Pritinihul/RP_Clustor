import React from "react";
import logo1 from "../assets/logo1.png"; // Adjust the path as necessary
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        {/* Left Section */}
        <div className="footer-col footer-about">
          <img
            src={logo1}
            alt="Research Hub Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            The best digital marketing agency in Pune with a proven track record
            of consistently delivering quality service.
          </p>
          <h4 className="footer-title">Address</h4>
          <address className="footer-address">
            {/* Add full address here if needed */}
          </address>
          <h4 className="footer-title">Contacts</h4>
          <div className="footer-contact">
            <p>
              <i className="fas fa-envelope" aria-hidden="true" />{" "}
              <a href="mailto:researchpaper@gmail.com">
                researchpaper@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone" aria-hidden="true" /> +91 8459 8762
              26
            </p>
          </div>
        </div>

        {/* Center Section - Menu */}
        <div className="footer-col footer-menu">
          <h3 className="footer-title">Menu</h3>
          <ul>
             <li><a href="/#home"  >Home</a></li>
          <li><a href="/#about" >About Us</a></li>
          <li><a href="/#journals">Our Journals</a></li>
          <li><Link to="/contact" >Contact Us</Link></li>
          <li><Link to="/register">Login/Signup</Link></li>
          </ul>
        </div>

        {/* Right Section - Social */}
        <div className="footer-col footer-social">
          <h3 className="footer-title">Social</h3>
          <div className="social-icons">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="social-icon twitter"
            >
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon facebook"
            >
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="social-icon youtube"
            >
              <i className="fab fa-youtube" aria-hidden="true" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="social-icon pinterest"
            >
              <i className="fab fa-pinterest-p" aria-hidden="true" />
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="social-icon whatsapp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;