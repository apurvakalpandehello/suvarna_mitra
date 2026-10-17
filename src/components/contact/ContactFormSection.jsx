import React, { useState } from 'react';
import './ContactFormSection.css';

function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    helpOption: '',
    message: '',
    agreePolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="contact-main-section">
      <div className="contact-main-container">
        
        {/* Davyakadil Contact Info Side */}
        <div className="contact-info-col">
          
          {/* Badge + Line */}
          <div className="contact-badge-wrap">
            <span className="contact-badge-text">CONTACT US</span>
            <span className="contact-badge-line"></span>
          </div>

          {/* Title - "Here" la italic & #b38048 color dila ahe */}
          <h2 className="contact-info-title">
            We’re <span className="contact-title-accent">Here</span> to Help.
          </h2>

          <p className="contact-info-description">
            Have a question, need guidance or want to schedule a consultation? 
            Our team is here to assist you. Reach out to us through any of the following channels.
          </p>

          {/* Contact Details List */}
          <div className="contact-details-list">
            
            {/* Call Us */}
            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="detail-info-text">
                <span className="detail-label">Call Us</span>
                <a href="tel:+919096288868" className="detail-value">+91 90962 88868</a>
              </div>
            </div>

            <div className="contact-info-divider"></div>

            {/* Email Us */}
            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="detail-info-text">
                <span className="detail-label">Email Us</span>
                <a href="mailto:hello@yourbrand.com" className="detail-value">hello@yourbrand.com</a>
              </div>
            </div>

            <div className="contact-info-divider"></div>

            {/* Visit Us */}
            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="detail-info-text">
                <span className="detail-label">Visit Us</span>
                <span className="detail-value text-only">Pune, Maharashtra, India</span>
              </div>
            </div>

            <div className="contact-info-divider"></div>

            {/* Business Hours */}
            <div className="contact-detail-row">
              <div className="detail-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="detail-info-text">
                <span className="detail-label">Business Hours</span>
                <span className="detail-value text-only">Monday – Friday, 9:30 AM – 6:00 PM</span>
              </div>
            </div>

          </div>

        </div>

        {/* Ujvyakadil Bordered Form Box */}
        <div className="contact-form-col">
          <div className="contact-form-card">
            
            <h3 className="form-card-title">Send Us a Message</h3>
            <p className="form-card-subtitle">Fill out the form below and we’ll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="contact-main-form">
              
              {/* Full Name */}
              <div className="form-field-group">
                <label className="form-field-label">
                  Full Name <span className="field-required">*</span>
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="form-custom-input"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="form-field-group">
                <label className="form-field-label">
                  Email Address <span className="field-required">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="form-custom-input"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-field-group">
                <label className="form-field-label">
                  Phone Number <span className="field-required">*</span>
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="form-custom-input"
                  required
                />
              </div>

              {/* How can we help you? Dropdown */}
              <div className="form-field-group">
                <label className="form-field-label">
                  How can we help you? <span className="field-required">*</span>
                </label>
                <div className="select-input-wrapper">
                  <select 
                    name="helpOption"
                    value={formData.helpOption}
                    onChange={handleChange}
                    className="form-custom-select"
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="gold-loan">Gold Loan Consultation</option>
                    <option value="financial-advisory">Financial Advisory</option>
                    <option value="general-query">General Query</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-field-group">
                <label className="form-field-label">
                  Message <span className="field-required">*</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your requirements..."
                  className="form-custom-textarea"
                  required
                ></textarea>
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="form-checkbox-group">
                <input 
                  type="checkbox" 
                  id="agreePolicy"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                  className="form-custom-checkbox"
                  required
                />
                <label htmlFor="agreePolicy" className="checkbox-text-label">
                  I agree to the processing of my personal data as per your{' '}
                  <a href="#privacy" className="privacy-anchor">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="form-submit-btn">
                <span>SEND MESSAGE</span>
                <span className="submit-arrow">&rarr;</span>
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactFormSection;