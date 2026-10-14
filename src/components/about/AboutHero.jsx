import React from 'react';
import './AboutHero.css';

// इमेजचा अचूक पाथ (assets फोल्डरमधील इमेज इंपोर्ट करा)
import aboutJewelleryImg from '../../assets/images/Raw Images/1.jpg'; 

function AboutHero() {
  return (
    <section className="about-hero-section">
      <div className="about-hero-container">
        
        {/* Left Content Side */}
        <div className="about-hero-left">
          <span className="about-hero-badge">-ABOUT US</span>

          <h1 className="about-hero-title">
            A Trusted Partner for<br />
            <span className="hero-highlight-journey">Your Financial Journey.</span>
          </h1>

          <p className="about-hero-description">
            Helping you unlock the true value of your gold and make informed financial decisions with confidence. 
            We provide transparent guidance, fast loan processing, and flexible solutions designed to support your 
            personal and business aspirations every step of the way. Built on the cornerstone of absolute security, 
            fair evaluations, and customer-first advisory, we stand beside you as a reliable companion dedicated 
            to turning your gold assets into opportunities for a more prosperous tomorrow.
          </p>

          <div className="about-hero-buttons">
            <a href="#services" className="btn-about-primary">
              Explore Our Services
            </a>
            <a href="#contact" className="btn-about-secondary">
              Speak to Our Team
            </a>
          </div>
        </div>

        {/* Right Visual Image Side */}
        <div className="about-hero-right">
          <div className="about-hero-img-box">
            <img 
              src={aboutJewelleryImg} 
              alt="Traditional Gold Jewellery and Weighing Scale" 
              className="about-hero-img" 
            />
          </div>

          {/* Bottom Trust Line under image */}
          <div className="about-hero-trust-bar">
            <span className="trust-divider-line"></span>
            <span className="trust-label-text">TRUST TRANSPARENCY GUIDANCE</span>
            <span className="trust-divider-line"></span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutHero;