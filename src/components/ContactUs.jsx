import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    requirement: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xbgdwjqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Thank you! Your enquiry has been received.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          requirement: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Contact Information */}
        <div className="contact-info-col">
          <div className="contact-tag-wrapper">
            <span className="contact-badge">CONTACT US</span>
            <span className="contact-tag-line"></span>
          </div>
          <h2 className="contact-title">
            Get in <span className="contact-highlight-word">Touch</span> with Us
          </h2>
          
          <p className="contact-lead-text">
            Whether you are looking for gold loan assistance, loan takeover, 
            Gold SIP options or authorized auctioned gold opportunities, our 
            team is here to help you understand the available options.
          </p>

          <div className="contact-details-group">
            {/* Address */}
            <div className="detail-item">
              <div className="detail-header-row">
                <span className="detail-dash">—</span>
                <span className="detail-label">ADDRESS</span>
              </div>
              <p className="detail-value detail-value-indent">
                Swarna Mitra, Andheri West, Mumbai
              </p>
            </div>

            {/* Hours */}
            <div className="detail-item">
              <div className="detail-header-row">
                <span className="detail-dash">—</span>
                <span className="detail-label">HOURS</span>
              </div>
              <p className="detail-value detail-value-indent">Monday – Saturday: 10:00 AM to 06:00 PM</p>
              <p className="detail-value detail-value-indent">Sunday : Closed</p>
            </div>

            {/* Contact */}
            <div className="detail-item">
              <div className="detail-header-row">
                <span className="detail-dash">—</span>
                <span className="detail-label">CONTACT</span>
              </div>
              <p className="detail-value detail-value-indent">+91 9096288868</p>
              <p className="detail-value detail-value-indent">Info@swarnamitra.co.in</p>
            </div>
          </div>
        </div>

        {/* Right Side: Gold Framed Form Card */}
        <div className="contact-form-card">
          <h3 className="form-card-title">Enquiry / Apply Now</h3>
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="requirement">Tell Us About Your Visit</label>
              <textarea
                id="requirement"
                name="requirement"
                rows="3"
                placeholder="Tell Us About Your Requirement (Gold Loan, SIP, etc.)"
                value={formData.requirement}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-submit-enquiry" disabled={loading}>
              {loading ? 'SENDING...' : 'SUBMIT ENQUIRY'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactUs;