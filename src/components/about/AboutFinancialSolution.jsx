import React from 'react';
import './AboutFinancialSolution.css';

function AboutFinancialSolution() {
  const solutionsData = [
    {
      title: "Gold Loan",
      description: "Access funds against eligible gold.",
      icon: (
        /* Realistic Stacked Gold Bricks / Ingot */
        <svg viewBox="0 0 48 48" className="solution-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Top Ingot */}
          <polygon points="18 10, 30 10, 36 18, 12 18" />
          <polygon points="12 18, 36 18, 32 23, 16 23" />
          
          {/* Bottom Left Ingot */}
          <polygon points="8 25, 20 25, 24 33, 4 33" />
          <polygon points="4 33, 24 33, 21 38, 7 38" />

          {/* Bottom Right Ingot */}
          <polygon points="28 25, 40 25, 44 33, 24 33" />
          <polygon points="24 33, 44 33, 41 38, 27 38" />
        </svg>
      )
    },
    {
      title: "Gold Mortgage",
      description: "Explore financing using your gold assets.",
      icon: (
        /* Architectural Roof / Mortgage House */
        <svg viewBox="0 0 48 48" className="solution-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Roof */}
          <path d="M7 21L24 7L41 21" />
          <path d="M12 17V10H16V20.5" />
          {/* House Structure */}
          <path d="M11 19.5V39H37V19.5" />
          {/* Clean Portal / Door */}
          <path d="M20 39V25H28V39" />
          <line x1="24" y1="25" x2="24" y2="39" strokeWidth="1.2" />
        </svg>
      )
    },
    {
      title: "Financial Consulting",
      description: "Practical guidance for financial decisions.",
      icon: (
        /* Growth Chart Bars with Trending Arrow */
        <svg viewBox="0 0 48 48" className="solution-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Vertical Columns */}
          <rect x="8" y="28" width="7" height="13" rx="0.5" />
          <rect x="20.5" y="20" width="7" height="21" rx="0.5" />
          <rect x="33" y="12" width="7" height="29" rx="0.5" />
          {/* Growth Trend Arrow */}
          <polyline points="29 6, 42 6, 42 19" />
          <line x1="42" y1="6" x2="26" y2="22" strokeWidth="1.8" />
        </svg>
      )
    },
    {
      title: "Loan Overtaking",
      description: "Review your existing loan and explore suitable alternatives.",
      icon: (
        /* Document Review with Clock / Fast Processing Dial */
        <svg viewBox="0 0 48 48" className="solution-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          {/* Document Base */}
          <path d="M26 6H12C10.8954 6 10 6.89543 10 8V40C10 41.1046 10.8954 42 12 42H32C33.1046 42 34 41.1046 34 40V24" />
          <polyline points="26 6, 26 14, 34 14" />
          {/* Text Guide Lines */}
          <line x1="16" y1="18" x2="21" y2="18" />
          <line x1="16" y1="24" x2="24" y2="24" />
          {/* Speedometer / Clock Dial Badge */}
          <circle cx="34" cy="34" r="8" fill="#faf7f2" />
          <polyline points="34 30, 34 34, 37 36" strokeWidth="1.4" />
        </svg>
      )
    }
  ];

  return (
    <section className="about-solutions-section">
      <div className="about-solutions-container">
        
        {/* Top Header */}
        <div className="about-solutions-header">
          {/* <span className="solutions-accent-line"></span> */}
          <h2 className="about-solutions-title">
            Financial Solutions, <span className="solutions-highlight">Thoughtfully Delivered</span>
          </h2>
        </div>

        {/* 4 Cards Grid with Dividers */}
        <div className="about-solutions-grid">
          {solutionsData.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                className="solution-card" 
                style={{ '--card-index': index }}
              >
                <div className="solution-icon-box">
                  <span className="solution-icon-glow"></span>
                  {item.icon}
                </div>
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-desc">{item.description}</p>
                <span className="card-hover-indicator"></span>
              </div>

              {/* Vertical divider line */}
              {index < solutionsData.length - 1 && (
                <div className="solution-card-divider"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AboutFinancialSolution;