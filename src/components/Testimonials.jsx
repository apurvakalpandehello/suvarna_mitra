import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const reviews = [
    {
      id: 1,
      rating: 5,
      review: "The loan process was smooth and hassle-free. The team is very supportive and professional.",
      name: "Rahul Sharma",
      city: "PUNE",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      rating: 5,
      review: "Your team made the entire process so easy. I highly recommend Swarna Mitra Finance for their excellent service!",
      name: "Priya Patel",
      city: "NAGPUR",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      rating: 5,
      review: "Excellent service and transparent process. They really care about their customers.",
      name: "Amit Deshmukh",
      city: "NASHIK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Top Header */}
        <div className="testimonials-header">
          <div className="tag-wrapper">
            <span className="tag-line"></span>
            <span className="testimonials-tag">TESTIMONIALS</span>
            <span className="tag-line"></span>
          </div>

          <h2 className="testimonials-title">What Our Customers Say</h2>
          
          <p className="testimonials-subtitle">
            A simple process, timely loan approval and more!
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="testimonials-grid">
          {reviews.map((item) => (
            <div key={item.id} className="testimonial-card">
              
              {/* Top Row: Stars and Quote Mark */}
              <div className="card-top-row">
                <div className="star-rating">
                  {"★".repeat(item.rating)}
                </div>
                <span className="quote-mark">”</span>
              </div>

              {/* Review Italic Text */}
              <p className="review-quote">
                “{item.review}”
              </p>

              {/* Thin Divider Line */}
              <div className="author-divider"></div>

              {/* Author Info */}
              <div className="author-info">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="author-avatar" 
                />
                <div className="author-details">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-city">{item.city}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;