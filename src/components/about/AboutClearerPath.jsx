import React from 'react';
import './AboutClearerPath.css';

function AboutClearerPath() {
  return (
    <section className="clearer-path-section">
      <div className="clearer-path-container">
        
        {/* डावीकडील मजकूर (Left Content) */}
        <div className="clearer-path-content">
          <div className="path-top-line"></div>

          <h2 className="path-title">
            A <span className="path-highlight">Clearer Path</span> Starts<br />
            with a Conversation.
          </h2>

          <p className="path-desc">
            We take the time to understand your individual needs,
            assess your goals and explain your available options
            clearly, so you can move forward with confidence.
          </p>

          <a href="#contact" className="path-talk-btn">
            <span>Talk to Us</span>
            <svg viewBox="0 0 24 24" className="btn-arrow-icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        {/* उजवीकडील इमेज (Right Image) */}
        <div className="clearer-path-image-box">
          <img 
            src="https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1200&auto=format&fit=crop" 
            alt="Gold coins and notebook representing clear financial planning" 
            className="clearer-path-img" 
          />
        </div>

      </div>
    </section>
  );
}

export default AboutClearerPath;