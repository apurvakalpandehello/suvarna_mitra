import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Hero from "./components/Hero.jsx";
import FinancialSolutions from "./components/FinancialSolutions.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import ServicesTimeline from "./components/ServicesTimeline.jsx";
import ConsultancyService from "./components/ConsultancyService.jsx";
import OurHeritage from "./components/OurHeritage.jsx";
import CustomerExcellence from "./components/CustomerExcellence.jsx";
import FAQ from "./components/FAQ.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

// Floating WhatsApp Button
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Pages Imports
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/services.jsx"; 
import Contact from "./pages/contact.jsx";

import PrivacyPolicy from "./pages/policies/privacyPolicy.jsx";
import TermsConditions from "./pages/policies/termsConditions.jsx";
import Disclaimer from "./pages/policies/disclaimer.jsx";

// Main Home Page
function HomePage() {
  return (
    <>
      <Hero />
      <FinancialSolutions />
      <WhyChooseUs />
      <ServicesTimeline />
      <ConsultancyService />
      <OurHeritage />
      <CustomerExcellence />
      <FAQ />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<HomePage />} />

          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Services Route (Navin route add kela) */}
          <Route path="/services" element={<Services />} />

          {/* Contact Us Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Policy Routes */}
          <Route path="/pages/policies/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/pages/policies/termsConditions" element={<TermsConditions />} />
          <Route path="/pages/policies/disclaimer" element={<Disclaimer />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;