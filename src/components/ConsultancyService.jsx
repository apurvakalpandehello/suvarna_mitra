import React from 'react';
import './ConsultancyService.css';
import consultImg from '../assets/images/Raw Images/4.jpg'; // Path tapasun ghya

function ConsultancyService() {
  const specs = [
    { label: "Service Type", value: "Expert Financial Consultancy & Guidance" },
    { label: "Loan Evaluation", value: "Gold Loan Assessment & Valuation" },
    { label: "Documentation", value: "Simple & Hassle-Free Documentation" },
    { label: "Support", value: "End-to-End Personalised Assistance" }
  ];

  return (
    <section className="consultancy-section">
      <div className="consultancy-wrapper">
        
        {/* Left Side: Image with Border */}
        <div className="consultancy-image-box">
          <img 
            src={consultImg} 
            alt="Financial Consultancy & Assistance" 
            className="consultancy-image" 
          />
        </div>

        {/* Right Side: Content Details */}
        <div className="consultancy-content">
          <span className="consultancy-tag">CORE FINANCIAL SERVICE</span>
          
          <h2 className="consultancy-title">
            Financial Consultancy <br />
            & <span className="assistance-highlight">Assistance</span>
          </h2>

          <p className="consultancy-desc">
            Professional Financial Guidance for Your Needs. Managing finances can sometimes be challenging, 
            especially when you need funds quickly or are evaluating different financial options. 
            Our Financial Consultancy & Assistance service helps customers understand suitable financial solutions 
            based on their individual requirements.
          </p>

          {/* Specifications / Highlights Table List */}
          <div className="consultancy-specs">
            {specs.map((item, index) => (
              <div key={index} className="spec-row">
                <span className="spec-label">{item.label}</span>
                <span className="spec-value">{item.value}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn-enquire">ENQUIRE NOW</button>
        </div>

      </div>
    </section>
  );
}

export default ConsultancyService;