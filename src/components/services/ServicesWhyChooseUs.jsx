import React from 'react';
import './ServicesWhyChooseUs.css';

function ServicesWhyChooseUs() {
  const reasonsData = [
    {
      title: "Transparent Process",
      desc: "No hidden charges. Just clear and honest dealings.",
      icon: (
        /* Shield with Checkmark */
        <svg viewBox="0 0 24 24" className="why-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    },
    {
      title: "Personalised Approach",
      desc: "Solutions designed around your unique needs.",
      icon: (
        /* User / Person */
        <svg viewBox="0 0 24 24" className="why-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: "Secure Confidential",
      desc: "Your information and assets are always protected.",
      icon: (
        /* Padlock / Security */
        <svg viewBox="0 0 24 24" className="why-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: "Experienced Guidance",
      desc: "Backed by industry expertise and a customer-first mindset.",
      icon: (
        /* Star / Excellence */
        <svg viewBox="0 0 24 24" className="why-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    }
  ];

  return (
    <section className="services-why-section">
      {/* Subtle Background Glow Orbs */}
      <div className="why-ambient-glow why-glow-left"></div>
      <div className="why-ambient-glow why-glow-right"></div>

      <div className="services-why-container">
        
        {/* Top Header */}
        <div className="services-why-header">
          <div className="why-badge-wrap">
            <span className="why-badge-line"></span>
            <span className="why-badge-text">WHY CHOOSE US</span>
            <span className="why-badge-line"></span>
          </div>

          <h2 className="services-why-title">
            Your Trust, <span className="why-highlight-commit">Our Commitment</span>
          </h2>
        </div>

        {/* 4 Columns Grid with Vertical Dividers */}
        <div className="services-why-grid">
          {reasonsData.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                className="why-card"
                style={{ '--card-idx': index }}
              >
                <div className="why-icon-box">
                  <span className="why-icon-aura"></span>
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
                <span className="why-card-bottom-line"></span>
              </div>

              {/* Dividing vertical line between columns */}
              {index < reasonsData.length - 1 && (
                <div className="why-card-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesWhyChooseUs;