import React from 'react';
import './WhyChooseUs.css';

// Tumchya projectmadhil imagecha path
import goldJewelleryImg from '../assets/images/gold-loan.png';

function WhyChooseUs() {
  return (
    <section className="wcu-section">
      <div className="wcu-container">
        {/* Header */}
        <div className="wcu-header">
          <div className="wcu-tag-wrapper">
            <span className="wcu-tag-line"></span>
            <span className="wcu-tag">WHY CHOOSE US</span>
          </div>
          <h2 className="wcu-title">
            Your Gold. Your <span className="wcu-highlight-word">Opportunity.</span>
          </h2>
          <p className="wcu-subtitle">
            A simple, secure way to access funds when you need them.
          </p>
        </div>

        {/* Content Grid */}
        <div className="wcu-content-grid">
          {/* Image Wrapper */}
          <div className="wcu-image-wrapper">
            <img 
              src={goldJewelleryImg} 
              alt="Traditional Gold Jewellery" 
              className="wcu-img" 
            />
          </div>

          {/* Features List */}
          <div className="wcu-info-wrapper">
            <div className="wcu-features-list">
              
              {/* Feature 1: 24 Hours Express Loan */}
              <div className="wcu-feature-item">
                <div className="wcu-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 12" />
                    <path d="M16.5 16.5 L20 16.5" strokeWidth="1.4" />
                    <path d="M17.5 19 L20 19" strokeWidth="1.4" />
                  </svg>
                </div>
                <div className="wcu-feature-text">
                  <h3>Get a Gold Loan Within 24 Hours</h3>
                </div>
              </div>

              {/* Feature 2: Fast Processing & Verification */}
              <div className="wcu-feature-item">
                <div className="wcu-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6" />
                    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                    <path d="M14 2l6 6" />
                    <circle cx="17.5" cy="17.5" r="4.5" />
                    <polyline points="15.8 17.5 17 18.7 19.4 16.3" />
                  </svg>
                </div>
                <div className="wcu-feature-text">
                  <h3>Fast Processing & Verification</h3>
                </div>
              </div>

              {/* Feature 3: Quick Rupee Fund Transfer */}
              <div className="wcu-feature-item">
                <div className="wcu-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 5h7.5M6 8.5h7.5M6 5v6c2.5 0 4.5-1.5 4.5-3.5S8.5 5 6 5zM8.5 12l5 7" />
                    <polyline points="15.5 8 19 11.5 15.5 15" />
                    <line x1="12" y1="11.5" x2="18.5" y2="11.5" />
                  </svg>
                </div>
                <div className="wcu-feature-text">
                  <h3>Quick Fund Transfer</h3>
                </div>
              </div>

              {/* Feature 4: Safe Vault & Gold Security */}
              <div className="wcu-feature-item">
                <div className="wcu-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z" />
                    <rect x="9.5" y="10.5" width="5" height="4" rx="1" />
                    <path d="M10.5 10.5V9a1.5 1.5 0 0 1 3 0v1.5" />
                  </svg>
                </div>
                <div className="wcu-feature-text">
                  <h3>Safe & Secure Gold Handling</h3>
                </div>
              </div>

              {/* Feature 5: Simple Document & Pen Assistance */}
              <div className="wcu-feature-item">
                <div className="wcu-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                    <polyline points="13 2 13 8 19 8" />
                    <line x1="8" y1="13" x2="12" y2="13" />
                    <line x1="8" y1="17" x2="14" y2="17" />
                    <path d="M17.5 12.5l3.5 3.5-5 5-3.5-3.5 5-5z" strokeWidth="1.4" />
                  </svg>
                </div>
                <div className="wcu-feature-text">
                  <h3>Simple Documentation</h3>
                </div>
              </div>

            </div>

            {/* Descriptions */}
            <div className="wcu-descriptions">
              <p className="wcu-desc-para">
                Easy-to-understand documentation and guided assistance.
              </p>
              <p className="wcu-desc-para">
                Seamless disbursement after approval for faster transactions. A streamlined process designed to reduce waiting time.
              </p>
            </div>

            {/* Button */}
            <div className="wcu-btn-wrapper">
              <button className="wcu-btn">
                Explore Gold Loan <span className="wcu-arrow">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;