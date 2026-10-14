import React from 'react';
import './AboutCTA.css';

function AboutCTA() {
  return (
    <section className="about-cta-section">
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
        <a href="#contact" className="about-cta-btn">
          GET IN TOUCH
        </a>

      </div>
    </section>
  );
}

export default AboutCTA;