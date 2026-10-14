import React from 'react';
import './OurHeritage.css';

// '../' वापरून components फोल्डरमधून बाहेर पडून assets फोल्डरमध्ये जा
import buildingImg from '../assets/images/Raw Images/1.jpg';
import financeImg from '../assets/images/Raw Images/1.3.jpg';

function OurHeritage() {
  return (
    <section className="heritage-section">
      <div className="heritage-container">
        
        {/* Left Side Content */}
        <div className="heritage-left">
          
          <div className="heritage-tag-wrapper">
            <span className="heritage-tag">OUR HERITAGE</span>
            <span className="heritage-tag-line"></span>
          </div>

          <h2 className="heritage-title">
            A Legacy of Trust. A<br />
            Commitment to Your<br />
            <span className="heritage-highlight-word">Financial</span> Future.
          </h2>

          <div className="heritage-desc-group">
            <p className="heritage-desc">
              At Swarna Mitra, our journey is built on a simple belief: every customer deserves transparent financial guidance, dependable support, and solutions tailored to their needs.
            </p>

            <p className="heritage-desc">
              With a customer-first approach, we assist individuals and families with goal loans, loan takeovers, financial consultancy, Gold SIP options, and auctioned gold opportunities, simplifying financial decisions through personalized and responsible guidance.
            </p>
          </div>

          <div className="heritage-signature">
            <span className="sig-dash">—</span>
            <span className="sig-text">The Founder, Swarna Mitra</span>
          </div>
        </div>

        {/* Right Side Images */}
        <div className="heritage-right">
          {/* First Image - Bottom Scroll */}
          <div className="img-frame-wrapper tall-wrapper">
            <div className="gold-border-backdrop"></div>
            <div className="img-inner-box">
              <img 
                src={buildingImg} 
                alt="Corporate Architecture" 
                className="heritage-img" 
              />
            </div>
          </div>

          {/* Second Image - Top Scroll */}
          <div className="img-frame-wrapper small-wrapper">
            <div className="gold-border-backdrop"></div>
            <div className="img-inner-box">
              <img 
                src={financeImg} 
                alt="Financial News and Coffee" 
                className="heritage-img" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default OurHeritage;