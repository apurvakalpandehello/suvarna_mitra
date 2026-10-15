import React from 'react';
import './ContactLocationSection.css';

function ContactLocationSection() {
  return (
    <section className="contact-location-section">
      <div className="contact-location-container">
        
        {/* Davyakadil Content Area */}
        <div className="location-content-col">
          
          {/* Badge + Line */}
          <div className="location-badge-wrap">
            <span className="location-badge-text">OUR LOCATION</span>
            <span className="location-badge-line"></span>
          </div>

          {/* Heading */}
          <h2 className="location-title">
            Let’s Connect in Person.
          </h2>

          {/* Description */}
          <p className="location-description">
            We’d love to meet you at our office. Visit us to discuss your financial goals and explore how we can help you build a brighter future together.
          </p>

          {/* Get Directions Button */}
          <a 
            href="https://maps.google.com/?q=Pune,Maharashtra" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="location-directions-btn"
          >
            <span>GET DIRECTIONS</span>
            <span className="directions-arrow">&rarr;</span>
          </a>

        </div>

        {/* Ujvyakadil Map Area */}
        <div className="location-map-col">
          <div className="location-map-card">
            
            {/* Map Background Pattern / Tile */}
            <div className="location-map-bg"></div>

            {/* Custom Location Marker Card */}
            <div className="location-pin-badge">
              <div className="pin-icon-wrap">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
              </div>
              <span className="pin-badge-text">Pune, Maharashtra</span>
            </div>

            {/* Corner Decorative Leaf Element */}
            <div className="map-corner-leaf"></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactLocationSection;