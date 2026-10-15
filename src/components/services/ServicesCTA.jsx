import React from 'react';
import './ServicesCTA.css';

// उजव्या बाजूच्या पेन आणि डॉक्युमेंट व्हिज्युअलसाठी ऑनलाइन इमेज
const ctaPenImg = "https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=1000&auto=format&fit=crop";

function ServicesCTA() {
  return (
    <section className="services-cta-section">
      {/* बॅकग्राउंड लक्झरी ॲम्बियंट ग्लो */}
      <div className="cta-light-ambient cta-glow-left"></div>
      <div className="cta-light-ambient cta-glow-right"></div>

      <div className="services-cta-container">
        
        {/* Left Side: Badge & Title */}
        <div className="services-cta-left">
          <span className="services-cta-badge">-LET'S GET STARTED</span>
          <h2 className="services-cta-title">
            Your Financial Goals<br />
            Are <span className="cta-highlight-reach">Within Reach.</span>
          </h2>
        </div>

        {/* Center: Description & Enquire Button */}
        <div className="services-cta-center">
          <p className="services-cta-desc">
            Explore our services and take the first step<br />
            towards a more secure and prosperous future.
          </p>
          <a href="#contact" className="services-cta-btn">
            <span className="cta-btn-text">ENQUIRE NOW</span>
            <svg viewBox="0 0 24 24" className="cta-btn-arrow" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* Right Side: Visual Graphic (Fountain Pen / Document) */}
        <div className="services-cta-right">
          <div className="services-cta-img-box">
            <img 
              src={ctaPenImg} 
              alt="Fountain pen and notebook background with gold coins" 
              className="services-cta-img" 
            />
            {/* Shimmer Light Effect on Hover */}
            <div className="services-cta-shimmer"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;