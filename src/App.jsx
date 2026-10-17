import React from "react";
import { Helmet } from "react-helmet-async";
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

// SEO Component
function SEO({ title, description, path }) {
  const siteUrl = "https://swarnamitra.co.in";
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Swarna Mitra Financial Services" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  );
}

// Main Home Page
function HomePage() {
  return (
    <>
      <SEO
        title="Gold Loan, Personal Loan & Mortgage Loan | Swarna Mitra"
        description="Get guidance on gold loans, personal loans, mortgage loans, loan takeover assistance and financial consultancy with Swarna Mitra Financial Services."
        path="/"
      />

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
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Us */}
          <Route
            path="/about-us"
            element={
              <>
                <SEO
                  title="About Us | Swarna Mitra Financial Services"
                  description="Learn about Swarna Mitra Financial Services and our approach to financial guidance, loan assistance and customer service."
                  path="/about-us"
                />
                <AboutUs />
              </>
            }
          />

          {/* Services */}
          <Route
            path="/services"
            element={
              <>
                <SEO
                  title="Financial Services & Loan Assistance | Swarna Mitra"
                  description="Explore financial consultancy, loan takeover assistance, Gold SIP guidance and auctioned gold information with Swarna Mitra."
                  path="/services"
                />
                <Services />
              </>
            }
          />

          {/* Contact Us */}
          <Route
            path="/contact"
            element={
              <>
                <SEO
                  title="Contact Us | Swarna Mitra Financial Services"
                  description="Contact Swarna Mitra Financial Services for enquiries about financial consultancy, loan assistance and available services."
                  path="/contact"
                />
                <Contact />
              </>
            }
          />

          {/* Privacy Policy */}
          <Route
            path="/pages/policies/privacyPolicy"
            element={
              <>
                <SEO
                  title="Privacy Policy | Swarna Mitra"
                  description="Read the privacy policy of Swarna Mitra Financial Services to understand how website information is handled."
                  path="/pages/policies/privacyPolicy"
                />
                <PrivacyPolicy />
              </>
            }
          />

          {/* Terms & Conditions */}
          <Route
            path="/pages/policies/termsConditions"
            element={
              <>
                <SEO
                  title="Terms & Conditions | Swarna Mitra"
                  description="Review the terms and conditions applicable to the Swarna Mitra Financial Services website and its services."
                  path="/pages/policies/termsConditions"
                />
                <TermsConditions />
              </>
            }
          />

          {/* Disclaimer */}
          <Route
            path="/pages/policies/disclaimer"
            element={
              <>
                <SEO
                  title="Disclaimer | Swarna Mitra Financial Services"
                  description="Read the disclaimer for Swarna Mitra Financial Services, including information about its website content and services."
                  path="/pages/policies/disclaimer"
                />
                <Disclaimer />
              </>
            }
          />
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