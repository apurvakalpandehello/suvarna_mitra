import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Main 4-Column Layout */}
        <div className="footer-top-grid">
          {/* Column 1: Brand & Contact Info */}
          <div className="footer-col brand-col">
            <div className="footer-heading-wrap">
              <h3 className="footer-brand-title">Swarna Mitra</h3>
              <div className="gold-dash"></div>
            </div>

            <p className="footer-tagline">
              Providing simple, secure and reliable financial solutions to help
              you achieve your personal and business goals.
            </p>

            <div className="footer-contact-details">
              <div className="contact-row">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Andheri West, Mumbai</span>
              </div>

              <div className="contact-row">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>9096288868</span>
              </div>

              <div className="contact-row">
                <svg
                  className="contact-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>Info@swarnamitra.co.in</span>
              </div>
            </div>
          </div>

          <div className="col-divider"></div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <div className="footer-heading-wrap">
              <h4 className="footer-heading">QUICK LINKS</h4>
              <div className="gold-dash"></div>
            </div>
            <ul className="footer-links-list">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-divider"></div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <div className="footer-heading-wrap">
              <h4 className="footer-heading">OUR SERVICES</h4>
              <div className="gold-dash"></div>
            </div>
            <ul className="footer-links-list">
              <li>
                <a href="#services">Financial Consultancy</a>
              </li>
              <li>
                <a href="#services">Loan Takeover</a>
              </li>
              <li>
                <a href="#services">Gold SIP</a>
              </li>
              <li>
                <a href="#services">Auctioned Gold</a>
              </li>
            </ul>
          </div>

          <div className="col-divider"></div>

          {/* Column 4: About This Website */}
          <div className="footer-col about-col">
            <div className="footer-heading-wrap">
              <h4 className="footer-heading">ABOUT THIS COMPANY</h4>
              <div className="gold-dash"></div>
            </div>
            <p className="footer-about-text">
              At Swarna Mitra, we offer trusted financial guidance for Gold Loans, Loan Takeover Assistance, Gold SIP and Auctioned Gold opportunities. Our focus is on transparency, convenience and helping you make informed financial decisions with confidence.
            </p>
          </div>
        </div>

        {/* Gold Horizontal Full Divider */}
        <div className="footer-gold-divider"></div>

        {/* Bottom Bar: Left (Copyright) | Center (Developed by) | Right (Legal Links) */}
        {/* Bottom Bar: Left (Copyright) | Center (Developed by) | Right (Legal Links) */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p className="footer-copyright-text">
              © 2026 Swarna Mitra Finance. All Rights Reserved.
            </p>
          </div>

          <div className="footer-bottom-center">
            <p className="footer-dev-text">
              Developed by{" "}
              <a
                href="https://www.reettechit.com/"
                target="_blank"
                rel="noreferrer"
              >
                Reet Technologies
              </a>
            </p>
          </div>

          <div className="footer-bottom-right">
            <Link to="/pages/policies/termsConditions">
              Terms &amp; Conditions
            </Link>
            <span className="social-sep">|</span>
            <Link to="/pages/policies/privacyPolicy">Privacy Policy</Link>
            <span className="social-sep">|</span>
            <Link to="/pages/policies/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
