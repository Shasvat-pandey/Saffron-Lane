import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className='reservation-section'>
      <div className="res-header">
        <span className="res-subtitle">RESERVE</span>
        <h2 className="res-title">A table set for you.</h2>
        <p className="res-info">
          Tue – Sun · 18:00 to 23:00 · 24 seats each evening. Sign in to check tonight's availability — your details are already with us.
        </p>
      </div>

      <div className="res-default-view">
        <div className="res-actions">
          {/* Navigates to the new Reservation page */}
          <button className="btn-gold" onClick={() => navigate('/reservation')}>RESERVE A TABLE</button>
          {/* Navigates to the new Contact Form page */}
          <button className="btn-outline-gold" onClick={() => navigate('/write-to-us')}>WRITE TO US</button>
        </div>

        <hr className="res-divider" />

        <div className="res-footer">
          <div className="footer-col">
            <h4>EMAIL</h4>
            <p>hello@saffronlane.co</p>
          </div>
          <div className="footer-col">
            <h4>PHONE</h4>
            <p>+91 123 2632 2356</p>
          </div>
          <div className="footer-col">
            <h4>ADDRESS</h4>
            <p>77 Pari Chowk, Noida</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact