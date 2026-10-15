import React from "react";
import Navbar from "../components/Navbar.jsx";
import ServicesHero from "../components/services/ServicesHero.jsx";
import ServicesList from "../components/services/ServicesList.jsx";
import ServicesWhyChooseUs from "../components/services/ServicesWhyChooseUs.jsx";
import ServicesCTA from "../components/services/ServicesCTA.jsx"; // <-- ServicesCTA कंपोनंट इंपोर्ट केला

function Services() {
  return (
    <div className="services-page" style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%' }}>
      {/* 1. Header Navbar */}
      <Navbar />

      {/* 2. Services Hero Banner Section */}
      <ServicesHero />

      {/* 3. Tailored Solutions / Services Grid Section */}
      <ServicesList />

      {/* 4. Why Choose Us / Your Trust, Our Commitment Section */}
      <ServicesWhyChooseUs />

      {/* 5. CTA Section (Within Reach) */}
      <ServicesCTA />
    </div>
  );
}

export default Services;