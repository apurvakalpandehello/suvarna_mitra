import React from 'react';
import './ContactHero.css';

// Local assets madhun image correct format madhe import keli ahe
import contactHeroImg from '../../assets/images/contactHeroImg.png';

function ContactHero() {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-container">
        
        {/* Davyakadil Content Area */}
        <div className="contact-hero-left">
          
          {/* Badge + Line */}
          <div className="contact-badge-box">
            <span className="contact-badge-text">GET IN TOUCH</span>
            <span className="contact-badge-line"></span>
          </div>

          {/* Heading */}
          <h1 className="contact-hero-title">
            Let’s Talk About<br />
            Your Financial Future.
          </h1>

          {/* Description */}
          <p className="contact-hero-description">
            Get personalized guidance from our experts to help you make informed decisions, achieve your goals and build a more secure tomorrow.
          </p>

          {/* 3 Value Proposition Features */}
          <div className="contact-features-wrap">
            
            {/* Feature 1 */}
            <div className="contact-feature-col">
              <div className="contact-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h4 className="feature-head">Confidential & Secure</h4>
              <p className="feature-desc">Your information stays private</p>
            </div>

            {/* Separator Divider */}
            <span className="contact-col-divider"></span>

            {/* Feature 2 */}
            <div className="contact-feature-col">
              <div className="contact-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="feature-head">Personal Guidance</h4>
              <p className="feature-desc">Expert advice tailored to you</p>
            </div>

            {/* Separator Divider */}
            <span className="contact-col-divider"></span>

            {/* Feature 3 */}
            <div className="contact-feature-col">
              <div className="contact-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h4 className="feature-head">Clear Next Steps</h4>
              <p className="feature-desc">Practical solutions for your goals</p>
            </div>

          </div>

        </div>

        {/* Ujvyakadil Image (Soft Blend Vignette Effect) */}
        <div className="contact-hero-right">
          <div className="contact-img-frame">
            <img 
              src={contactHeroImg} 
              alt="Let's Talk About Your Financial Future" 
              className="contact-main-img" 
            />
            {/* Background cream sobat blend honari gradient line */}
            <div className="contact-soft-blend"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;