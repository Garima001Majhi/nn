// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../utils/constants'; // Importing navLinks from constants
import './Navbar.css'; // Importing the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg"
            alt="Naukri Logo"
            className="navbar-logo-img"
          />
        </Link>
        
        {/* Navigation Links */}
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className="navbar-item">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
