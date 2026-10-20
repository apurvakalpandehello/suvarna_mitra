import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import AuthModal from './AuthModal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Modal उघडण्यासाठी state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' किंवा 'register'

  // User state
  const [user, setUser] = useState(null);

  // पेज लोड झाल्यावर किंवा लॉगिन स्टेट तपासण्यासाठी
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('User parse error:', err);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Login क्लिक केल्यावर
  const openLogin = () => {
    setAuthMode('login');
    setIsAuthOpen(true);
    closeMenu();
  };

  // Register क्लिक केल्यावर
  const openRegister = () => {
    setAuthMode('register');
    setIsAuthOpen(true);
    closeMenu();
  };

  // यशस्वी लॉगिननंतर चालणारे फंक्शन
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    setIsAuthOpen(false);
  };

  // Logout फंक्शन
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    closeMenu();
    window.location.reload(); // सेशन क्लिअर करण्यासाठी रीलोड
  };

  return (
    <>
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
            {user ? (
              <>
                <span className="user-greeting" style={{ marginRight: '10px', fontWeight: '500' }}>
                  Hi, {user.name}
                </span>
                <button className="nav-btn btn-login" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="nav-btn btn-login" onClick={openLogin}>
                  Login
                </button>
                <button className="nav-btn btn-register" onClick={openRegister}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Pop-up Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        initialMode={authMode}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}

export default Navbar;