import React from 'react';
import './WhatWeStandFor.css';

function WhatWeStandFor() {
  const valuesData = [
    {
      title: "Transparency",
      desc: "Honest advice and clear communication at every step.",
      icon: (
        <svg viewBox="0 0 24 24" className="stand-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: "Personalised Guidance",
      desc: "Solutions designed around your unique needs and goals.",
      icon: (
        <svg viewBox="0 0 24 24" className="stand-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: "Confidentiality",
      desc: "Your information and trust are always our priority.",
      icon: (
        <svg viewBox="0 0 24 24" className="stand-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
          <line x1="12" y1="17" x2="12" y2="19" />
        </svg>
      )
    }
  ];

  return (
    <section className="stand-for-section">
      <div className="stand-for-container">
        
        {/* Top Header */}
        <div className="stand-for-header">
          <span className="stand-gold-line"></span>
          <h2 className="stand-for-title">
            What We <span className="stand-for-highlight">Stand For</span>
          </h2>
        </div>

        {/* 3 Columns Grid with Dividers */}
        <div className="stand-for-grid">
          {valuesData.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                className="stand-for-card" 
                style={{ '--stand-index': index }}
              >
                <div className="stand-icon-wrapper">
                  <span className="stand-icon-aura"></span>
                  {item.icon}
                </div>
                <h3 className="stand-card-title">{item.title}</h3>
                <p className="stand-card-desc">{item.desc}</p>
                <span className="stand-card-indicator"></span>
              </div>

              {/* Middle vertical divider */}
              {index < valuesData.length - 1 && (
                <div className="stand-vertical-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhatWeStandFor;