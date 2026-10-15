import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-container">
      {/* Brand Logo */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logoImg} alt="Swarna Mitra" className="logo-img" />
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links and Buttons */}
      <div className={`nav-collapse ${isOpen ? 'show' : ''}`}>
        {/* Mobile menu chya aat aadhi logo */}
        <div className="nav-mobile-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logoImg} alt="Swarna Mitra" className="mobile-logo-img" />
          </Link>
        </div>

        <ul className="nav-menu">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={closeMenu}>About Us</Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="nav-btn btn-login">Login</button>
          <button className="nav-btn btn-register">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;