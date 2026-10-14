import React from 'react';
import './FinancialSolutions.css';

import heroImg from '../assets/images/alen-kajtezovic-zXSHLh77kJA-unsplash.jpg'; 

function FinancialSolutions() {
  return (
    <section className="fs-section">
      {/* Daavya bajucha content */}
      <div className="fs-content-container">
        <span className="fs-subtitle">YOUR FINANCIAL JOURNEY, OUR PRIORITY</span>
        
        <h1 className="fs-title">
          Smart Financial<br />
          <span className="fs-italic-text">Solutions.</span>
        </h1>

        <p className="fs-description">
          Whether you need immediate funds today or wish to plan securely for 
          long-term milestones, we provide dependable, tailored solutions designed 
          around your ambitions. From streamlined gold loans with competitive rates 
          to dedicated wealth advisory, experience a transparent path toward true 
          financial freedom.
        </p>

        <div className="fs-btn-group">
          <button className="fs-btn-primary">
            EXPLORE LOANS
          </button>
          <a href="#heritage" className="fs-link">
            Our Heritage <span className="fs-arrow">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Ujveekadli image */}
      <div className="fs-image-container">
        <div className="fs-image-wrapper">
          <img 
            src={heroImg} 
            alt="Financial Professional" 
            className="fs-hero-img" 
          />
        </div>
      </div>
    </section>
  );
}

export default FinancialSolutions;