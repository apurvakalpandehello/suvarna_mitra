import React from 'react';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const phoneNumber = "919096288868";
  const defaultMessage = encodeURIComponent(
    "Hello Swarna Mitra, I am interested in your gold loan & financial services. Please provide more details."
  );

  return (
    <a 
      href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${defaultMessage}`}
      className="whatsapp-float-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      {/* सतत मागे फ्लॅश होणाऱ्या रिंग्स (Glowing Ripple Rings) */}
      <span className="wa-pulse-ring ring-1"></span>
      <span className="wa-pulse-ring ring-2"></span>

      {/* Official Professional WhatsApp Vector Icon */}
      <svg 
        viewBox="0 0 32 32" 
        className="whatsapp-svg-icon" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.587.747 5.013 2.053 7.08L2.72 29.333l6.453-1.947A13.277 13.277 0 0016.002 29.333C23.36 29.333 29.333 23.36 29.333 16c0-7.36-5.973-13.333-13.331-13.333zm7.747 18.827c-.32.907-1.587 1.667-2.587 1.893-.68.147-1.56.267-4.547-.973-3.813-1.587-6.28-5.467-6.467-5.72-.187-.253-1.547-2.053-1.547-3.92 0-1.867.973-2.787 1.32-3.16.347-.373.76-.467 1.013-.467.253 0 .52.003.747.013.24.013.56-.093.88.667.333.787 1.133 2.76 1.227 2.96.107.2.173.44.04.707-.133.267-.2.427-.4.667-.2.24-.413.533-.587.72-.2.2-.413.413-.173.813.24.413 1.067 1.76 2.293 2.853 1.573 1.4 2.907 1.84 3.32 2.04.413.2.653.173.893-.107.24-.28 1.027-1.2 1.307-1.613.28-.413.56-.347.933-.213.387.133 2.427 1.147 2.84 1.36.413.213.693.32.787.507.107.187.107 1.053-.213 1.96z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;