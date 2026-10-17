import React from 'react';
import './ServicesTimeline.css';
import showcaseImg from '../assets/images/Raw Images/workaholics-businesspeople-brainstorming-financial-company-ideas.webp';

function ServicesTimeline() {
  const serviceCards = [
    {
      tag: "ADVISORY & LOANS",
      title: "Financial Consultancy",
      desc: "Professional guidance to help you understand suitable financial solutions based on your requirements.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      tag: "LOAN TRANSFER",
      title: "Loan Takeover",
      desc: "Explore better options or transfer your existing loan to another lender subject to eligibility.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    },
    {
      tag: "WEALTH SAVINGS",
      title: "Gold SIP",
      desc: "Build a disciplined gold investment approach through regular, systematic contributions over time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10" />
          <path d="M15 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 2.5 5 5a2.5 2.5 0 0 1-5 0" />
        </svg>
      )
    },
    {
      tag: "AUCTION ACCESS",
      title: "Auctioned Gold",
      desc: "Assistance in exploring authorized gold auction opportunities and understanding related procedures.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2l6 6L7 21l-5-1 1-5L14 2z" />
          <path d="M11 5l6 6" />
          <path d="M2 22h20" />
        </svg>
      )
    }
  ];

  return (
    <section className="services-showcase-section">
      <div className="services-showcase-container">
        
        {/* Header Section */}
        <div className="services-center-header">
          <div className="showcase-badge">
            <span className="sparkle">✦</span>
            <span>EXCLUSIVE SOLUTIONS</span>
            <span className="sparkle">✦</span>
          </div>
          {/* Services sathi span tag add kela ahe */}
          <h2 className="showcase-title">
            Our <span className="showcase-title-highlight">Services</span>
          </h2>
          <div className="showcase-gold-line"></div>
        </div>

        {/* Layout Split */}
        <div className="services-split-wrapper">
          
          {/* Left Tall Image */}
          <div className="showcase-image-card">
            <img 
              src={showcaseImg} 
              alt="Certified Gold Solutions" 
              className="showcase-tall-img"
            />
          </div>

          {/* Right 2x2 Detailed Cards Grid */}
          <div className="showcase-cards-grid">
            {serviceCards.map((service, index) => (
              <div key={index} className="showcase-service-card">
                <div className="card-content-top">
                  
                  {/* Tag Header */}
                  <div className="card-top-bar">
                    <span className="card-tag">{service.tag}</span>
                  </div>

                  {/* Centered Bigger Circular Icon */}
                  <div className="card-icon-center-wrap">
                    <div className="card-icon-circle">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.desc}</p>

                </div>

                {/* Explore More Action */}
                <div className="card-action">
                  <span>EXPLORE MORE</span>
                  <span className="card-arrow">&rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesTimeline;