import React from 'react';
import { Link } from 'react-router-dom';
import './AboutClearerPath.css';

// ॲसेट्स फोल्डरमधील इमेज इंपोर्ट करा (तुमच्या फाईलच्या नावानुसार नाव बदला)
import clearerPathImg from '../../assets/images/clearer-path.webp';

function AboutClearerPath() {
  // पेज टॉपला स्क्रोल करण्यासाठी हँडलर (पहिल्या सेक्शनपासून पेज दिसावे म्हणून)
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  };

  return (
    <section className="clearer-path-section">
      <div className="clearer-path-container">
        
        {/* डावीकडील मजकूर (Left Content) */}
        <div className="clearer-path-content">

          <h2 className="path-title">
            A <span className="path-highlight">Clearer Path</span> Starts<br />
            with a Conversation.
          </h2>

          <p className="path-desc">
            We take the time to understand your individual needs,
            assess your goals and explain your available options
            clearly, so you can move forward with confidence.
          </p>

          <Link 
            to="/contact" 
            className="path-talk-btn"
            onClick={handleScrollToTop}
          >
            <span>Talk to Us</span>
            <svg viewBox="0 0 24 24" className="btn-arrow-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* उजवीकडील इमेज (Right Image - assets मधून) */}
        <div className="clearer-path-image-box">
          <img 
            src={clearerPathImg} 
            alt="A Clearer Path Starts with a Conversation" 
            className="clearer-path-img" 
          />
        </div>

      </div>
    </section>
  );
}

export default AboutClearerPath;