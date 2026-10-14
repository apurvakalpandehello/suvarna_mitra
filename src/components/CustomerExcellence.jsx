import React from 'react';
import './CustomerExcellence.css';

// Folder structure नुसार import path:
import excellenceImg from '../assets/images/Raw Images/for-customers.png';

function CustomerExcellence() {
  const points = [
    "Transparent Financial Guidance",
    "Customer-Centric Assistance",
    "Comprehensive Gold Loan Services",
    "Gold SIP & Investment Guidance"
  ];

  const stats = [
    { number: "20", label: "YEARS OF EXPERIENCE" },
    { number: "100+", label: "SATISFIED CLIENTS" },
    { number: "100%", label: "COMMITMENT TO TRANSPARENCY" }
  ];

  return (
    <section className="excellence-section">
      <div className="excellence-container">
        
        {/* Left Side Content */}
        <div className="excellence-left">
          <div className="excellence-tag-wrapper">
            <span className="excellence-tag">THE ART OF CREATION</span>
            <span className="tag-line"></span>
          </div>
          
          <h2 className="excellence-title">
            Designed for Customer<br />
            Excellence, with <span className="excellence-highlight-word">Commitment</span>
          </h2>

          <p className="excellence-desc">
            From gold loan assistance and loan takeover services to Gold SIP and 
            auctioned gold opportunities, we help customers explore suitable 
            financial options with transparency, personalized support and care. 
            Our focus is on simplifying financial decisions, building lasting 
            relationships and supporting your financial goals with trust, integrity 
            and commitment.
          </p>

          <ul className="excellence-points">
            {points.map((point, index) => (
              <li key={index} className="point-item">
                <span className="point-dash">—</span>
                <span className="point-text">{point}</span>
              </li>
            ))}
          </ul>

          <button className="btn-commission">
            <span>COMMISSION A CUSTOM PIECE</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        {/* Right Side Visual & Floating Stats Box */}
        <div className="excellence-right">
          <div className="excellence-image-wrap">
            <img 
              src={excellenceImg} 
              alt="Designed for Customer Excellence" 
              className="excellence-img" 
            />
          </div>

          {/* Floating Stats Box */}
          <div className="stats-floating-card">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="stat-block">
                  <span className="stat-num">{stat.number}</span>
                  <span className="stat-lbl">{stat.label}</span>
                </div>
                {index < stats.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CustomerExcellence;