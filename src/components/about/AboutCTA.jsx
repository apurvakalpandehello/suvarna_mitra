import React from 'react';
import { Link } from 'react-router-dom';
import './AboutCTA.css';

function AboutCTA() {
  // पेज टॉपला स्क्रोल करण्यासाठी हँडलर
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // पेज लगेच पहिल्या सेक्शनपासून लोड होईल
    });
  };

  return (
    <section className="about-cta-section">
      {/* Background Animated Ambient Lights */}
      <div className="cta-ambient-glow cta-glow-left"></div>
      <div className="cta-ambient-glow cta-glow-right"></div>

      <div className="about-cta-container">

        {/* Main Heading */}
        <h2 className="about-cta-title">
          Let’s Explore <span className="cta-highlight">Your Options.</span>
        </h2>

        {/* Subtitle */}
        <p className="about-cta-desc">
          Connect with our team for clear, personalised financial guidance.
        </p>

        {/* Action Button */}
        <Link 
          to="/contact" 
          className="about-cta-btn" 
          onClick={handleScrollToTop}
        >
          <span className="cta-btn-text">GET IN TOUCH</span>
          <svg viewBox="0 0 24 24" className="cta-btn-arrow" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>

      </div>
    </section>
  );
}

export default AboutCTA;