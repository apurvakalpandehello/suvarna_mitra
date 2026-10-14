import React from 'react';
import './OurCollections.css';

// Local images asel tar import kara, nahitar he Unsplash jewelry URLs direct chalnar
const collectionsData = [
  {
    id: 1,
    title: "Pink Sapphire Diamond Ring",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    sizeClass: "grid-large-tall"
  },
  {
    id: 2,
    title: "Rose Gold Embellished Bangle",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80",
    sizeClass: "grid-medium"
  },
  {
    id: 3,
    title: "Sapphire & Diamond Drop Earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    sizeClass: "grid-tall"
  },
  {
    id: 4,
    title: "Classic Gold Link Bracelet",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    sizeClass: "grid-small"
  },
  {
    id: 5,
    title: "Traditional Heritage Gold Necklace Set",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
    sizeClass: "grid-wide"
  }
];

function OurCollections() {
  return (
    <section className="collections-section">
      <div className="collections-container">
        
        {/* Top Header Section */}
        <div className="collections-header">
          <div className="collections-titles">
            <h2 className="collections-title">Our Collections</h2>
            <p className="collections-subtitle">
              Discover pieces crafted for every chapter of your story
            </p>
          </div>
          
          <a href="#collections" className="collections-view-all">
            View All Collections <span className="arrow">&rarr;</span>
          </a>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="collections-grid">
          {collectionsData.map((item) => (
            <div key={item.id} className={`collection-card ${item.sizeClass}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="collection-img"
                loading="lazy" 
              />
              <div className="collection-overlay">
                <span className="collection-name">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurCollections;