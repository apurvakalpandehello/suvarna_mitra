import React from 'react';
import './ServicesList.css';

// assets/images/ फोल्डरमधून ४ इमेजेस इंपोर्ट केल्या
import serviceConsultancyImg from '../../assets/images/our-services-finanacial-needs1.png';
import serviceLoanTakeoverImg from '../../assets/images/our-services-finanacial-needs2.png';
import serviceGoldSipImg from '../../assets/images/our-servives-financial-need3.png';
import serviceAuctionGoldImg from '../../assets/images/our-services-finanacial-needs4.png';

function ServicesList() {
  const services = [
    {
      title: "Financial Consultancy & Assistance",
      desc: "Get expert advice and personalised guidance to plan your finances, optimise your assets and achieve your goals with confidence.",
      img: serviceConsultancyImg,
      link: "#financial-consultancy",
      icon: (
        /* Advisory Consultation */
        <svg viewBox="0 0 48 48" className="srv-card-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8C12 6.89543 12.8954 6 14 6H28L36 14V40C36 41.1046 35.1046 42 34 42H14C12.8954 42 12 41.1046 12 40V8Z" />
          <polyline points="28 6, 28 14, 36 14" />
          <line x1="18" y1="20" x2="26" y2="20" />
          <line x1="18" y1="26" x2="30" y2="26" />
          <circle cx="24" cy="34" r="3" />
          <line x1="24" y1="29" x2="24" y2="31" />
          <line x1="24" y1="37" x2="24" y2="39" />
          <line x1="19" y1="34" x2="21" y2="34" />
          <line x1="27" y1="34" x2="29" y2="34" />
        </svg>
      )
    },
    {
      title: "Loan Takeover Assistance",
      desc: "We help you transfer and manage your existing loans to better terms, lower interest rates and reduce your financial burden.",
      img: serviceLoanTakeoverImg,
      link: "#loan-takeover",
      icon: (
        /* Loan Transfer Structure */
        <svg viewBox="0 0 48 48" className="srv-card-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18L24 6L42 18" />
          <path d="M10 18V38H38V18" />
          <line x1="16" y1="22" x2="16" y2="34" />
          <line x1="24" y1="22" x2="24" y2="34" />
          <line x1="32" y1="22" x2="32" y2="34" />
          <path d="M4 42H44" />
        </svg>
      )
    },
    {
      title: "Gold SIP",
      desc: "Build wealth gradually with gold. A simple, secure and disciplined way to invest in your future.",
      img: serviceGoldSipImg,
      link: "#gold-sip",
      icon: (
        /* Systematic Investment Coins Stack */
        <svg viewBox="0 0 48 48" className="srv-card-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="24" cy="40" rx="14" ry="4" />
          <path d="M10 40V34C10 31.79 16.27 30 24 30C31.73 30 38 31.79 38 34V40" />
          <path d="M10 34V28C10 25.79 16.27 24 24 24C31.73 24 38 25.79 38 28V34" />
          <path d="M24 24V14" />
          <path d="M24 16C21 11 15 13 15 13C15 13 16 19 22 18" />
          <path d="M24 14C27 9 33 11 33 11C33 11 32 17 26 16" />
        </svg>
      )
    },
    {
      title: "Auctioned Gold",
      desc: "Get the best value for your auctioned gold with a transparent, secure and hassle-free process.",
      img: serviceAuctionGoldImg,
      link: "#auctioned-gold",
      icon: (
        /* Auction Gavel */
        <svg viewBox="0 0 48 48" className="srv-card-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="25.5" y="8.5" width="10" height="18" rx="2" transform="rotate(45 25.5 8.5)" />
          <line x1="20" y1="21" x2="8" y2="33" strokeWidth="2" />
          <path d="M24 40H42" />
          <path d="M27 36H39" />
          <line x1="39" y1="13" x2="43" y2="13" />
          <line x1="36" y1="7" x2="39" y2="4" />
        </svg>
      )
    }
  ];

  return (
    <section className="services-list-section">
      <div className="services-list-container">
        
        {/* Section Header */}
        <div className="services-list-header">
          <div className="srv-header-badge-wrap">
            <span className="srv-header-line"></span>
            <span className="srv-header-badge">OUR SERVICES</span>
            <span className="srv-header-line"></span>
          </div>

          <h2 className="services-list-title">
            Custom Solutions for Your <span className="srv-highlight-needs">Financial Needs</span>
          </h2>

          <p className="services-list-subtitle">
            Whether you're looking to unlock the value of your gold, manage your existing loans<br className="srv-sub-break" />
            or grow your wealth, we are here to support you at every step.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="services-cards-grid">
          {services.map((item, index) => (
            <div 
              className="service-item-row" 
              key={index} 
              style={{ '--grid-idx': index }}
            >
              {/* Left Image Box with Perfect Fitting & Shimmer */}
              <div className="service-item-img-box">
                <div className="service-item-img-inner">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="service-item-img" 
                    loading="lazy"
                  />
                </div>
                <div className="service-img-shimmer"></div>
              </div>

              {/* Right Content */}
              <div className="service-item-info">
                <div className="service-icon-box">
                  <span className="service-icon-aura"></span>
                  {item.icon}
                </div>
                <h3 className="service-item-title">{item.title}</h3>
                <p className="service-item-desc">{item.desc}</p>
                <a href={item.link} className="service-know-more">
                  <span className="know-more-text">Know More</span>
                  <span className="know-more-arrow">&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesList;