import React from 'react';
import './ServicesHero.css';

// इमेजचा पाथ
const heroImg = "https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1200&auto=format&fit=crop";

function ServicesHero() {
  return (
    <section className="services-hero-section">
      {/* ॲम्बियंट लक्झरी ग्लो */}
      <div className="services-hero-ambient"></div>

      <div className="services-hero-container">
        
        {/* Left Side Content */}
        <div className="services-hero-left">
          {/* Badge with Dash */}
          <div className="services-badge-wrap">
            <span className="services-badge-line"></span>
            <span className="services-hero-badge">OUR SERVICES</span>
          </div>

          {/* Main Heading */}
          <h1 className="services-hero-title">
            Financial Solutions<br />
            for a <span className="services-highlight-title">Brighter Tomorrow.</span>
          </h1>

          {/* Description */}
          <p className="services-hero-desc">
            We offer a range of trusted financial services designed
            to help you make the most of your assets, meet your goals
            and build a more secure future.
          </p>

          {/* Trust Indicators Bar */}
          <div className="services-hero-perks">
            <div className="service-perk-item">
              <span className="perk-bullet"></span>
              <span>Transparent Terms</span>
            </div>
            <div className="service-perk-item">
              <span className="perk-bullet"></span>
              <span>Tailored Advisory</span>
            </div>
            <div className="service-perk-item">
              <span className="perk-bullet"></span>
              <span>Confidential & Safe</span>
            </div>
          </div>
        </div>

        {/* Right Side Visual Image */}
        <div className="services-hero-right">
          <div className="services-hero-img-box">
            <img 
              src={heroImg} 
              alt="Gold coins stacked on table with notebook and pen" 
              className="services-hero-img" 
            />
            {/* Shimmer Light Reflection Effect */}
            <div className="services-hero-shimmer"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesHero;