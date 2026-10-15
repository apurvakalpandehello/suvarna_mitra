import React from 'react';
import Navbar from '../components/Navbar.jsx';
import ContactUsHero from '../components/contact/ContactHero.jsx';
import ContactUsFormSection from '../components/contact/ContactFormSection.jsx';
import ContactUsLocationSection from '../components/contact/ContactLocationSection.jsx';
import ContactUsCTASection from '../components/contact/ContactCTASection.jsx';
function ContactUs() {
  return (
    <div className="contact-us-page" style={{ backgroundColor: '#faf7f2', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <ContactUsHero />
      <ContactUsFormSection />
      <ContactUsLocationSection /> 
      <ContactUsCTASection /> 
      
    </div>
  );
}

export default ContactUs;