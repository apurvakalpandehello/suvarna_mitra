import React from "react";
import Navbar from "../components/Navbar.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import ServicesList from "../components/services/ServicesList.jsx";
import ServicesWhyChooseUs from "../components/services/ServicesWhyChooseUs.jsx";
import ServicesCTA from "../components/services/ServicesCTA.jsx";

function Services() {
  return (
    <div 
      className="services-page" 
      style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%' }}
    >
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <ServicesWhyChooseUs />
      <ServicesCTA />
    </div>
  );
}

export default Services;