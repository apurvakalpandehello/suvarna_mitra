import React from "react";
import Navbar from "../components/Navbar.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx"; // <-- services फोल्डरचा बरोबर पाथ

function Services() {
  return (
    <div className="services-page" style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <ServicesHero />
    </div>
  );
}

export default Services;