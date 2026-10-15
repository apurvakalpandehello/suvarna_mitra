import React from 'react';
import './ContactCTASection.css';

function ContactCTASection() {
  return (
    <section className="contact-cta-section">
      {/* Dynamic Animated Ambient Glow Backgrounds */}
      <div className="cta-ambient-glow glow-left"></div>
      <div className="cta-ambient-glow glow-right"></div>
      <div className="cta-leaf-overlay"></div>

      <div className="contact-cta-container">
        
        {/* Subtle Decorative Badge */}
        <div className="cta-badge-wrap">
          <span className="cta-badge-dot"></span>
          <span className="cta-badge-text">TAKE THE NEXT STEP</span>
        </div>

        {/* Main CTA Heading with italic accent */}
        <h2 className="contact-cta-title">
          A clearer financial future starts with a{' '}
          <span className="cta-title-accent">conversation.</span>
        </h2>

        {/* Subtitle text */}
        <p className="contact-cta-subtitle">
          Take the first step towards your goals with personalized financial guidance designed around your priorities.
        </p>

        {/* Animated Interactive Button */}
        <a href="#contact-form" className="contact-cta-btn">
          <span className="cta-btn-shimmer"></span>
          <span className="cta-btn-text">BOOK A CONSULTATION</span>
          <span className="cta-btn-arrow">&rarr;</span>
        </a>

      </div>
    </section>
  );
}

export default ContactCTASection;