import React from "react";
import "./ServicesHero.css";

function ServicesHero() {
  return (
    <section className="services-hero-wrapper">
      <div className="services-hero-main">
        {/* Bangir a Makannigid: Linaon ti Teksto */}
        <div className="services-hero-content">
          <div className="services-tagline">
            <span className="tagline-dash"></span>
            <span className="tagline-text">OUR SERVICES</span>
          </div>

          <h1 className="services-main-title">
            Financial Solutions <br />
            for a Brighter Tomorrow.
          </h1>

          <p className="services-description">
            We offer a range of trusted financial services designed to help you
            make the most of your assets, meet your goals and build a more
            secure future.
          </p>
        </div>

        {/* Bangir a Makannawan: Ladawan nga addaan kurbada */}
        <div className="services-hero-image-box">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
            alt="Financial Solutions"
            className="services-banner-img"
          />
        </div>
      </div>

      {/* Akibaba a Pagilasinan */}
      <div className="services-bottom-divider">
        <span className="divider-line"></span>
        <span className="divider-text">OUR SERVICES</span>
        <span className="divider-line"></span>
      </div>
    </section>
  );
}

export default ServicesHero;