import React, { useState, useEffect } from 'react';
import './Hero.css';
import Navbar from './Navbar.jsx';

// Background Images
import bg1 from '../assets/images/smartfinanacial.png';
import bg2 from '../assets/images/gold-jewellary-loan-still-life.png'; 
import bg3 from '../assets/images/3.png'; 
import bg4 from '../assets/images/4.png'; 
import bg5 from '../assets/images/heroimagesslider.png'; 

function Hero() {
  const slides = [
    {
      image: bg1,
      category: null, 
      title: null,
    },
    {
      // Image 2: Rings sathi barobar tag
      image: bg2,
      category: 'Gold Bangles',
      title: '“Elegance That Lasts Forever.”',
    },
    {
      // Image 4: Bangles sathi barobar tag
      image: bg4,
      category: 'Gold Bangles',
      title: '“A Touch of Gold, A World of Grace.”',
    },
    {
      // Image 3: Coins
      image: bg3,
      category: 'Gold Coins',
      title: '“Your Wealth, Your Golden Future.”',
    },
    {
      // Image 5: Main Feature
      image: bg5,
      category: 'Financial Solutions',
      title: 'Small Steps Today, Greater Possibilities Tomorrow.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-wrapper">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url("${slide.image}")` }}
        />
      ))}

      {/* Main Overlay Content */}
      <div className="hero-overlay-content">
        <Navbar />

        {/* Quotes Container */}
        <div className="hero-text-container">
          {(slides[currentSlide].title || slides[currentSlide].category) && (
            <div className="hero-quote-block" key={currentSlide}>
              {slides[currentSlide].category && (
                <span className="hero-category-label">
                  {slides[currentSlide].category}
                </span>
              )}
              {slides[currentSlide].title && (
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
              )}
            </div>
          )}
        </div>

        {/* Slider Dots */}
        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;