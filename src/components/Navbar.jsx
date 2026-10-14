import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <a href="/#services">Services</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-actions">
        <button className="nav-btn btn-login">Login</button>
        <button className="nav-btn btn-register">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;