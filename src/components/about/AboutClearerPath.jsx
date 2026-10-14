import React from 'react';
import './AboutClearerPath.css';

function AboutClearerPath() {
  return (
    <section className="clearer-path-section">
      <div className="clearer-path-container">
        
        {/* Left Side Content */}
        <div className="clearer-path-content">
          <div className="path-top-line"></div>

          <h2 className="path-title">
            A Clearer Path Starts<br />
            with a Conversation.
          </h2>

          <p className="path-desc">
            We take the time to understand your individual needs,
            assess your goals and explain your available options
            clearly, so you can move forward with confidence.
          </p>

          <a href="#contact" className="path-talk-btn">
            Talk to Us
          </a>
        </div>

        {/* Right Side Image (High Quality Working Online Image) */}
        <div className="clearer-path-image-box">
          <img 
            src="https://images.unsplash.com/photo-1618042164219-62c820f10723?q=80&w=1200&auto=format&fit=crop" 
            alt="Gold coins stacked next to a notebook and pen" 
            className="clearer-path-img" 
          />
        </div>

      </div>
    </section>
  );
}

export default AboutClearerPath;