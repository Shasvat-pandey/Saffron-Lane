import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-content">
        
        {/* Left Column: Brand & Description */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span className="star">✦</span> SAFFRON LANE
          </h2>
          <p className="footer-desc">
            A pure-vegetarian house of seasonal Indian & Mediterranean cuisine, served by candlelight.<br/>
            Reservations recommended for dinner service.
          </p>
          <p className="footer-highlight">
            PURE VEGETARIAN · NO ALCOHOL ON THE TABLE
          </p>
        </div>

        {/* Middle Column: Visit Info */}
        <div className="footer-links">
          <h3>VISIT</h3>
          <p>
            77 Pari Chowk, Noida<br />
            Uttar Pradesh 201310<br />
            Tue – Sun · 18:00 – 23:00
          </p>
        </div>

        {/* Right Column: Contact Info */}
        <div className="footer-links">
          <h3>CONTACT</h3>
          <p>
            hello@saffronlane.co<br />
            +91 123 2632 2356
          </p>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2026 SAFFRON LANE · CRAFTED WITH REVERENCE</p>
      </div>
    </div>
  )
}

export default Footer