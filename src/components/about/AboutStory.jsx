import React from 'react';
import './AboutStory.css';

// Tumchya project madhil image path
import storyImg from '../../assets/images/trusted-by-your-need.png';

function AboutStory() {
  return (
    <section className="about-story-section">
      <div className="about-story-container">
        
        {/* Left Visual Image Block */}
        <div className="about-story-image-wrap">
          <img 
            src={storyImg} 
            alt="Financial consultation and agreement signing" 
            className="about-story-img"
          />
        </div>

        {/* Right Content Block */}
        <div className="about-story-content">
          
          {/* Adhi ani nantar horizontal lines aslela badge */}
          <div className="story-badge-wrap">
            <span className="story-badge-line"></span>
            <span className="story-badge">OUR STORY</span>
            <span className="story-badge-line"></span>
          </div>

          {/* Heading with 'Trust' in italic & #b38048 */}
          <h2 className="story-title">
            Built Around <span className="story-highlight-trust">Trust.</span><br />
            Guided by Your Needs.
          </h2>

          <p className="story-description">
            Our journey began with a simple belief-that financial support should be accessible, transparent and truly customer-centric. We are committed to providing personalised service, clear communication and responsible guidance, helping you understand your financial options and make the right decisions for a more secure future.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutStory;