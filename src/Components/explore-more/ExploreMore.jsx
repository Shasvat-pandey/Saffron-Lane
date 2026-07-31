import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ExploreMore.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'

// Import the main hero image used on your home page here:
import hero_img from '../../assets/hero.jpg' // <-- Change '.png' to '.jpg' if your hero image is a JPG

// Sample Menu Data matching the image
const menuData = {
  STARTERS: [
    { title: "Saffron Paneer Tikka", desc: "cold-smoked, kesar cream, mint", price: "₹160" },
    { title: "Heirloom Tomato & Burrata", desc: "basil oil, aged balsamic", price: "₹180" },
    { title: "Charred Cauliflower", desc: "smoked paprika, tahini, pomegranate", price: "₹150" },
    { title: "Truffle Mushroom Galette", desc: "wild porcini, gruyère, thyme", price: "₹170" },
    { title: "Beetroot Carpaccio", desc: "goat curd, walnut, orange dust", price: "₹160" },
    { title: "Corn & Truffle Kachori", desc: "gold leaf, tamarind pearls", price: "₹140" }
  ],
  MAINS: [
    { title: "Smoked Dal Makhani", desc: "24-hour slow cooked, activated charcoal smoke", price: "₹220" },
    { title: "Wild Mushroom Risotto", desc: "carnaroli, truffle butter, parmesan crisp", price: "₹260" },
    { title: "Kashmiri Dum Aloo", desc: "baby potatoes, fennel, ginger, saffron gravy", price: "₹240" },
    { title: "Artichoke Hearts Barigoule", desc: "white wine, root vegetables, soft herbs", price: "₹250" }
  ],
  DESSERTS: [
    { title: "Gold-Leaf Gulab Jamun", desc: "pistachio core, cardamom syrup", price: "₹120" },
    { title: "Saffron Tres Leches", desc: "milk sponge, saffron milk, toasted almonds", price: "₹140" }
  ],
  "TEA & ELIXIRS": [
    { title: "Himalayan Pink Tea", desc: "sea salt, crushed almonds, star anise", price: "₹80" },
    { title: "Golden Turmeric Elixir", desc: "fresh turmeric, black pepper, oat milk", price: "₹70" }
  ]
};

const ExploreMore = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('STARTERS');

  return (
    <div className="menu-page">
      <Navbar />
      
      {/* ---------------- Hero Section (Now using the home page hero image) ---------------- */}
      <div className="menu-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 7, 4, 0.8), rgba(15, 10, 6, 1)), url(${hero_img})` }}>
        <span className="menu-subtitle">THE MENU</span>
        <h1 className="menu-title">
          Written each morning,<br/>
          <span className="menu-title-gold">plated with patience.</span>
        </h1>
        <p className="menu-hero-desc">
          A pure-vegetarian tasting menu, drawn from the day's market and<br/>
          the season's mood. Prices in euros.
        </p>
      </div>

      {/* ---------------- Category Navigation ---------------- */}
      <div className="menu-nav-container">
        <ul className="menu-categories">
          {Object.keys(menuData).map((category) => (
            <li 
              key={category} 
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* ---------------- Menu Items Section ---------------- */}
      <div className="menu-content-container">
        <p className="menu-category-desc">
          {activeCategory === 'STARTERS' && "Small plates to open the evening — quick fire, cold smoke, garden herbs."}
          {activeCategory === 'MAINS' && "The heart of the table — slow-cooked, deeply spiced, and satisfying."}
          {activeCategory === 'DESSERTS' && "A sweet conclusion — delicate, floral, and touched with gold."}
          {activeCategory === 'TEA & ELIXIRS' && "Warm comfort — rare leaves and botanical infusions."}
        </p>

        <div className="menu-grid">
          {menuData[activeCategory].map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-item-header">
                <h3 className="menu-item-title">{item.title}</h3>
                <div className="menu-item-dots"></div>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- Dietary & Action Section ---------------- */}
      <div className="menu-footer-section">
        <span className="dietary-title">DIETARY</span>
        <p className="dietary-desc">
          The entire kitchen is pure vegetarian. Vegan, gluten-free, and Jain-friendly<br/>
          preparations are available on request — please note them with your reservation and<br/>
          we'll write the evening for you.
        </p>
        <div className="menu-actions">
          <button className="btn-gold" onClick={() => navigate('/reservation')}>RESERVE A TABLE</button>
          <button className="btn-outline-gold" onClick={() => navigate('/')}>BACK HOME</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ExploreMore