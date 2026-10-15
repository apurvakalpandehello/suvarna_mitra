import React from 'react';
import './ContactCTASection.css';

function ContactCTASection() {
  return (
    <section className="contact-cta-section">
      {/* Decorative leaf shadow/overlay on side */}
      <div className="cta-leaf-overlay"></div>

      <div className="contact-cta-container">
        
        {/* Main CTA Heading */}
        <h2 className="contact-cta-title">
          A clearer financial future starts with a conversation.
        </h2>

        {/* Subtitle text */}
        <p className="contact-cta-subtitle">
          Take the first step towards your goals with personalized financial guidance.
        </p>

        {/* Outline Button */}
        <a href="#contact-form" className="contact-cta-btn">
          <span>BOOK A CONSULTATION</span>
          <span className="cta-btn-arrow">&rarr;</span>
        </a>

      </div>
    </section>
  );
}

export default ContactCTASection;