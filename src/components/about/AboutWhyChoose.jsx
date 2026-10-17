import React from 'react';
import './AboutWhyChoose.css';

// इमेजचा अचूक पाथ (assets/images मध्ये इमेज सेव्ह करा)
import whyChooseUsLeftBg from '../../assets/images/why-choose-left-bg.png';

function AboutWhyChoose() {
  return (
    <section className="about-wcu-section" aria-labelledby="about-wcu-heading">
      <div className="about-wcu-container">
        
        {/* Left Column (Content Over Visual Image) */}
        <div className="about-wcu-left-col">
          {/* Background image container */}
          <div className="about-wcu-left-bg-wrap">
            <img 
              src={whyChooseUsLeftBg} 
              alt="Stacks of gold coins, hourglass and architectural marble details" 
              className="about-wcu-left-bg-img"
              loading="lazy"
            />
            {/* Soft gradient overlay for crisp text readability */}
            <div className="about-wcu-left-overlay"></div>
          </div>

          {/* Left Text Content */}
          <div className="about-wcu-left-content">
            <div className="about-wcu-eyebrow-wrap">
              <span className="about-wcu-eyebrow-line"></span>
              <span className="about-wcu-eyebrow-text">WHY CHOOSE US?</span>
              <span className="about-wcu-eyebrow-line"></span>
            </div>

            <h2 id="about-wcu-heading" className="about-wcu-main-title">
              Your Trust,<br />
              <span className="about-wcu-title-highlight">Our Commitment.</span>
            </h2>

            <div className="about-wcu-title-dash"></div>

            <p className="about-wcu-left-desc">
              We are committed to providing transparent guidance, personalised assistance and a simpler,
              more informed financial experience for every customer.
            </p>
          </div>
        </div>

        {/* Elegant Vertical Divider Line */}
        <div className="about-wcu-vertical-divider" aria-hidden="true"></div>

        {/* Right Column: 5 Feature Cards Grid (Row 1: 3 Cards, Row 2: 2 Cards) */}
        <div className="about-wcu-right-col">
          
          {/* Row 1: 3 Cards */}
          <div className="about-wcu-grid-row-three">
            
            {/* Card 1: Transparent Guidance */}
            <article className="about-wcu-card">
              <div className="about-wcu-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A87932" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="11" y2="13" />
                  <line x1="8" y1="17" x2="10" y2="17" />
                  <circle cx="15.5" cy="15.5" r="2.5" />
                  <line x1="17.3" y1="17.3" x2="20" y2="20" />
                </svg>
              </div>
              <h3 className="about-wcu-card-title">
                Transparent<br />Guidance
              </h3>
              <p className="about-wcu-card-desc">
                We focus on clearly explaining financial products, processes, eligibility and applicable terms.
              </p>
            </article>

            {/* Card 2: Customer-Focused Assistance */}
            <article className="about-wcu-card">
              <div className="about-wcu-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A87932" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="3" />
                  <path d="M7 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2" />
                  <circle cx="18" cy="10" r="2" />
                  <path d="M21 21v-1.5a3 3 0 0 0-2-2.8" />
                  <circle cx="6" cy="10" r="2" />
                  <path d="M3 21v-1.5a3 3 0 0 1 2-2.8" />
                </svg>
              </div>
              <h3 className="about-wcu-card-title">
                Customer-Focused<br />Assistance
              </h3>
              <p className="about-wcu-card-desc">
                Our team understands your requirement and helps you navigate the relevant financial process.
              </p>
            </article>

            {/* Card 3: Simplified Process */}
            <article className="about-wcu-card">
              <div className="about-wcu-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#A87932" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <circle cx="15.5" cy="16.5" r="2" />
                  <path d="M15.5 13.5v1m0 4v1m-3-3h1m4 0h1" />
                  <line x1="8" y1="12" x2="11" y2="12" />
                </svg>
              </div>
              <h3 className="about-wcu-card-title">
                Simplified<br />Process
              </h3>
              <p className="about-wcu-card-desc">
                We aim to make documentation, application and financial procedures easier to understand.
              </p>
            </article>

          </div>

          {/* Row 2: 2 Wider Cards */}
          <div className="about-wcu-grid-row-two">
            
            {/* Card 4: Responsible Financial Approach */}
            <article className="about-wcu-card about-wcu-card--wide">
              <div className="about-wcu-card-header-flex">
                <div className="about-wcu-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A87932" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="about-wcu-card-title-group">
                  <h3 className="about-wcu-card-title about-wcu-card-title--left">
                    Responsible<br />Financial Approach
                  </h3>
                  <div className="about-wcu-card-gold-dash"></div>
                </div>
              </div>
              <p className="about-wcu-card-desc about-wcu-card-desc--wide">
                We encourage customers to evaluate costs, risks, repayment obligations and terms before making financial decisions.
              </p>
            </article>

            {/* Card 5: End-to-End Support */}
            <article className="about-wcu-card about-wcu-card--wide">
              <div className="about-wcu-card-header-flex">
                <div className="about-wcu-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#A87932" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="7" r="2.5" />
                    <path d="M12 11.5c-2 0-3.5 1-3.5 2.5v1h7v-1c0-1.5-1.5-2.5-3.5-2.5z" />
                    <path d="M4 17.5c2 1 5 1.5 8 1.5s6-.5 8-1.5" />
                    <path d="M7 21c2.5 1 5 1.2 7 1.2s4.5-.2 7-1.2" />
                  </svg>
                </div>
                <div className="about-wcu-card-title-group">
                  <h3 className="about-wcu-card-title about-wcu-card-title--left">
                    End-to-End<br />Support
                  </h3>
                  <div className="about-wcu-card-gold-dash"></div>
                </div>
              </div>
              <p className="about-wcu-card-desc about-wcu-card-desc--wide">
                From initial consultation to documentation and process coordination, our team provides assistance throughout the relevant service journey.
              </p>
            </article>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutWhyChoose;