import React from 'react';
import './AboutCTA.css';

function AboutCTA() {
  return (
    <section className="about-cta-section">
      {/* Background Animated Ambient Lights */}
      <div className="cta-ambient-glow cta-glow-left"></div>
      <div className="cta-ambient-glow cta-glow-right"></div>

      <div className="about-cta-container">
        
        {/* Accent Brand Line */}
        <span className="cta-top-accent-line"></span>

        {/* Main Heading */}
        <h2 className="about-cta-title">
          Let’s Explore <span className="cta-highlight">Your Options.</span>
        </h2>

        {/* Subtitle */}
        <p className="about-cta-desc">
          Connect with our team for clear, personalised financial guidance.
        </p>

        {/* Action Button */}
        <a href="#contact" className="about-cta-btn">
          <span className="cta-btn-text">GET IN TOUCH</span>
          <svg viewBox="0 0 24 24" className="cta-btn-arrow" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

      </div>
    </section>
  );
}

export default AboutCTA;