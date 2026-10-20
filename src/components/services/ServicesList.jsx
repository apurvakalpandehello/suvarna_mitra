import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ServicesList.css';

import serviceConsultancyImg from '../../assets/images/our-services-finanacial-needs1.png';
import serviceLoanTakeoverImg from '../../assets/images/our-services-finanacial-needs2.png';
import serviceGoldSipImg from '../../assets/images/our-servives-financial-need3.png';
import serviceAuctionGoldImg from '../../assets/images/our-services-finanacial-needs4.png';

function ServicesList() {
  const location = useLocation();

  // URL मध्ये #hash असेल तर त्या कार्डवर स्क्रोल करणे
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const services = [
    {
      id: "financial-consultancy",
      badgeSubtitle: "Professional Financial Guidance for Your Needs",
      title: "Financial Consultancy & Assistance",
      paragraphs: [
        "Managing finances can sometimes be challenging, especially when you need funds quickly or are evaluating different financial options. Our Financial Consultancy & Assistance service helps customers understand suitable financial solutions based on their requirements.",
        "We assist with understanding available gold loan and finance options, documentation requirements, repayment considerations and other relevant financial services. Our objective is to simplify the process and help you make an informed decision."
      ],
      checklistTitle: "Our Financial Assistance Includes:",
      checklist: [
        "Gold loan guidance and assistance",
        "Understanding loan requirements and documentation",
        "Financial product guidance",
        "Loan repayment and restructuring guidance",
        "Assistance in evaluating available financing options",
        "Support throughout the application process",
        "Personalized assistance based on your financial requirement"
      ],
      footerNote: "Make informed financial decisions with professional assistance and transparent guidance.",
      img: serviceConsultancyImg,
      link: null
    },
    {
      id: "loan-takeover",
      badgeSubtitle: "Explore Better Options for Your Existing Loan",
      title: "Loan Takeover Assistance",
      paragraphs: [
        "If you already have a gold loan or another eligible loan with a financial institution and are looking for an alternative, our Loan Takeover Assistance service can help you explore available options.",
        "Loan takeover, also known as loan transfer, may allow an eligible borrower to transfer an existing loan to another lender, subject to the lender's policies, eligibility criteria and applicable terms.",
        "Our team assists you in understanding the process, comparing relevant loan conditions and completing the required documentation."
      ],
      checklistTitle: "How We Assist:",
      checklist: [
        "Understanding your existing loan",
        "Reviewing eligible loan takeover options",
        "Assistance with documentation",
        "Guidance regarding eligibility and applicable terms",
        "Coordination during the loan transfer process",
        "Support in understanding repayment obligations"
      ],
      secondaryChecklistTitle: "Why Consider Loan Takeover?",
      secondaryChecklistDesc: "Depending on your eligibility and the applicable terms, a loan takeover may help you explore:",
      secondaryChecklist: [
        "Different interest rate options",
        "Revised repayment structures",
        "Improved service or convenience",
        "Suitable tenure options",
        "Better alignment with your financial requirements"
      ],
      footerNote: "Before transferring a loan, we recommend evaluating the total cost, applicable charges, interest rate and repayment terms.",
      img: serviceLoanTakeoverImg,
      link: null
    },
    {
      id: "gold-sip",
      badgeSubtitle: "Build a Disciplined Gold Investment Approach",
      title: "Gold SIP",
      paragraphs: [
        "Gold SIP is a systematic approach to investing in gold by making regular contributions over a period of time. It can be considered by individuals who want to build their gold holdings gradually instead of making a large one-time investment.",
        "Our team provides assistance in understanding available Gold SIP options, contribution structures, applicable terms and other important details so you can make an informed decision according to your financial goals."
      ],
      checklistTitle: "Benefits of a Systematic Gold Investment Approach:",
      checklist: [
        "Regular and disciplined contributions",
        "Convenient way to accumulate gold over time",
        "Helps avoid the need for a large one-time investment",
        "Suitable for planned long-term financial goals",
        "Easy-to-understand investment approach"
      ],
      disclaimerNote: "Gold prices can fluctuate, and returns or future value are not guaranteed. Customers should understand the applicable terms, charges, risks and product structure before investing.",
      footerNote: "Start small. Stay consistent. Build towards your financial goals.",
      img: serviceGoldSipImg,
      link: null
    },
    {
      id: "auctioned-gold",
      badgeSubtitle: "Explore Gold Available Through Authorized Auctions",
      title: "Auctioned Gold",
      paragraphs: [
        "Financial institutions may auction pledged gold when borrowers do not meet the applicable repayment requirements, subject to the lender's policies, notices and applicable laws.",
        "Our Auctioned Gold Assistance service helps interested customers understand the process of purchasing gold through authorized gold auctions and the relevant terms and conditions.",
        "We can assist customers in understanding available auction opportunities, documentation, bidding procedures and other applicable requirements."
      ],
      checklistTitle: "Our Assistance Includes:",
      checklist: [
        "Guidance on authorized gold auction processes",
        "Understanding auction terms and conditions",
        "Assistance with auction-related information",
        "Guidance regarding documentation requirements",
        "Support in understanding applicable payment procedures",
        "Assistance in evaluating available auction opportunities"
      ],
      disclaimerNote: "Important: Auctioned gold is subject to the specific auction terms, lender policies and applicable regulations. Customers should independently verify the gold details, purity, weight, applicable charges, bidding conditions and payment requirements before participating.",
      footerNote: "Explore authorized gold auction opportunities with proper information and guidance.",
      img: serviceAuctionGoldImg,
      link: null
    }
  ];

  return (
    <section className="services-section-wrapper">
      <div className="services-main-container">
        
        {/* Section Header */}
        <div className="services-main-header">
          <div className="srv-badge-wrapper">
            <span className="srv-badge-line"></span>
            <span className="srv-badge-text">OUR SERVICES</span>
            <span className="srv-badge-line"></span>
          </div>

          <h2 className="srv-main-title">
            Custom Solutions for Your <span className="srv-title-highlight">Financial Needs</span>
          </h2>

          <p className="srv-main-subtitle">
            Whether you're looking to unlock the value of your gold, manage your existing loans, or grow your wealth, we are here to support you at every step.
          </p>
        </div>

        {/* Services Rows */}
        <div className="services-rows-list">
          {services.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                id={item.id}
                className={`service-featured-card ${index % 2 === 1 ? 'reverse-card' : ''}`}
                style={{ scrollMarginTop: '30px' }}
              >
                {/* Left Image Side */}
                <div className="service-card-image-box">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="service-card-image" 
                    loading="lazy" 
                  />
                </div>

                {/* Right Content Side */}
                <div className="service-card-content">
                  {item.badgeSubtitle && (
                    <span className="service-content-tag">{item.badgeSubtitle}</span>
                  )}
                  <h2 className="service-card-title">{item.title}</h2>

                  {/* Multiple Paragraphs */}
                  {item.paragraphs ? (
                    <div className="service-paragraphs-wrap">
                      {item.paragraphs.map((pText, pIdx) => (
                        <p key={pIdx} className="service-card-desc">{pText}</p>
                      ))}
                    </div>
                  ) : (
                    item.desc && <p className="service-card-desc">{item.desc}</p>
                  )}

                  {/* Primary Checklist */}
                  {item.checklist && (
                    <div className="service-checklist-box">
                      <h4 className="service-checklist-heading">{item.checklistTitle}</h4>
                      <ul className="service-checklist-items">
                        {item.checklist.map((cItem, cIdx) => (
                          <li key={cIdx} className="service-checklist-item">
                            <span className="checklist-bullet-icon">
                              <svg viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="8" r="4" />
                              </svg>
                            </span>
                            <span>{cItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Secondary Checklist */}
                  {item.secondaryChecklist && (
                    <div className="service-checklist-box secondary-box">
                      <h4 className="service-checklist-heading">{item.secondaryChecklistTitle}</h4>
                      {item.secondaryChecklistDesc && (
                        <p className="service-checklist-sub-intro">{item.secondaryChecklistDesc}</p>
                      )}
                      <ul className="service-checklist-items">
                        {item.secondaryChecklist.map((scItem, scIdx) => (
                          <li key={scIdx} className="service-checklist-item">
                            <span className="checklist-bullet-icon">
                              <svg viewBox="0 0 16 16" fill="currentColor">
                                <circle cx="8" cy="8" r="4" />
                              </svg>
                            </span>
                            <span>{scItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Disclaimer / Warning Box */}
                  {item.disclaimerNote && (
                    <div className="service-disclaimer-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="disclaimer-icon">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <p>{item.disclaimerNote}</p>
                    </div>
                  )}

                  {/* Footer Concluding Note */}
                  {item.footerNote && (
                    <p className="service-footer-note">{item.footerNote}</p>
                  )}

                  {/* 3 Pillars / Features */}
                  {item.features && (
                    <div className="service-pillars-grid">
                      {item.features.map((feature, fIdx) => (
                        <div className="service-pillar-item" key={fIdx}>
                          <div className="pillar-icon">{feature.icon}</div>
                          <div className="pillar-text">
                            <h4>{feature.title}</h4>
                            <p>{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Know More button */}
                  {item.link && (
                    <a href={item.link} className="service-know-more-btn">
                      Know More <span>&rarr;</span>
                    </a>
                  )}
                </div>
              </div>

              {/* ================= First Service Addons (Consultancy) ================= */}
              {index === 0 && (
                <div className="first-service-addon-group">
                  <div className="services-stats-strip">
                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>10+</h3>
                        <p>Years of Guidance</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>500+</h3>
                        <p>Clients Supported</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>98%</h3>
                        <p>Client Satisfaction</p>
                      </div>
                    </div>
                  </div>

                  <div className="why-choose-banner">
                    <div className="why-choose-header">
                      <span className="why-badge">WHY CHOOSE US</span>
                      <h2>Your Trusted Financial Partner</h2>
                    </div>

                    <div className="why-features-grid">
                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <circle cx="12" cy="11" r="2"></circle>
                          </svg>
                        </div>
                        <h4>Transparent Process</h4>
                        <p>Clear and honest information.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <h4>Expert Guidance</h4>
                        <p>From experienced professionals.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                        <h4>Confidentiality</h4>
                        <p>Your privacy matters.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                          </svg>
                        </div>
                        <h4>Ongoing Support</h4>
                        <p>We are with you, every step of the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= Second Service Addons (Loan Takeover) ================= */}
              {index === 1 && (
                <div className="first-service-addon-group">
                  <div className="services-stats-strip">
                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 3h12M6 8h12M6 13l7.5 8M6 13h3a4.5 4.5 0 0 0 0-9"></path>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>50Cr+</h3>
                        <p>Loans Restructured</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="19" y1="5" x2="5" y2="19"></line>
                          <circle cx="6.5" cy="6.5" r="2.5"></circle>
                          <circle cx="17.5" cy="17.5" r="2.5"></circle>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>Up to 4%</h3>
                        <p>Interest Saved</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <polyline points="9 12 11 14 15 10"></polyline>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>99%</h3>
                        <p>Smooth Transfers</p>
                      </div>
                    </div>
                  </div>

                  <div className="why-choose-banner">
                    <div className="why-choose-header">
                      <span className="why-badge">WHY CHOOSE US</span>
                      <h2>Your Trusted Financial Partner</h2>
                    </div>

                    <div className="why-features-grid">
                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <circle cx="12" cy="11" r="2"></circle>
                          </svg>
                        </div>
                        <h4>Transparent Process</h4>
                        <p>Clear and honest information.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <h4>Expert Guidance</h4>
                        <p>From experienced professionals.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                        <h4>Confidentiality</h4>
                        <p>Your privacy matters.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                          </svg>
                        </div>
                        <h4>Ongoing Support</h4>
                        <p>We are with you, every step of the way.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= Third Service Addons (Gold SIP) ================= */}
              {index === 2 && (
                <div className="first-service-addon-group">
                  <div className="services-stats-strip">
                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>100+</h3>
                        <p>Start Small Investment</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>24K 99.9%</h3>
                        <p>Certified Pure Gold</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 4 23 10 17 10"></polyline>
                          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>100%</h3>
                        <p>Instant Liquidity</p>
                      </div>
                    </div>
                  </div>

                  <div className="why-choose-banner">
                    <div className="why-choose-header">
                      <span className="why-badge">GOLD SIP ADVANTAGE</span>
                      <h2>Smart & Disciplined Wealth Creation</h2>
                    </div>

                    <div className="why-features-grid">
                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                        <h4>Flexible Tenure</h4>
                        <p>Choose weekly or monthly savings.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                        <h4>Insured Vaults</h4>
                        <p>100% secure storage in certified vaults.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                        </div>
                        <h4>Zero Making Charges</h4>
                        <p>Buy pure gold at live market rates.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                          </svg>
                        </div>
                        <h4>Doorstep Delivery</h4>
                        <p>Convert to physical gold coins anytime.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= Fourth Service Addons (Auctioned Gold) ================= */}
              {index === 3 && (
                <div className="first-service-addon-group">
                  {/* Auctioned Gold Related Stats */}
                  <div className="services-stats-strip">
                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <polyline points="9 12 11 14 15 10"></polyline>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>100%</h3>
                        <p>Authorized Auctions</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>Below Market</h3>
                        <p>Competitive Rates</p>
                      </div>
                    </div>

                    <div className="stat-separator"></div>

                    <div className="stat-box">
                      <div className="stat-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </div>
                      <div className="stat-details">
                        <h3>Verified</h3>
                        <p>Purity & Weight</p>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Auctioned Gold Banner */}
                  <div className="why-choose-banner">
                    <div className="why-choose-header">
                      <span className="why-badge">AUCTION ADVANTAGE</span>
                      <h2>Secure & Authorized Gold Purchase</h2>
                    </div>

                    <div className="why-features-grid">
                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                        </div>
                        <h4>Direct Bank Auctions</h4>
                        <p>Participate in authorized institutional bids.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                          </svg>
                        </div>
                        <h4>Legally Compliant</h4>
                        <p>Complete documentation & official receipts.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <h4>Transparent Bidding</h4>
                        <p>Fair, open appraisal without hidden fees.</p>
                      </div>

                      <div className="why-feature-divider"></div>

                      <div className="why-feature-item">
                        <div className="why-icon">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <polyline points="9 12 11 14 15 10"></polyline>
                          </svg>
                        </div>
                        <h4>Secure Settlement</h4>
                        <p>Prompt transfer and handover of certified gold.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesList;




