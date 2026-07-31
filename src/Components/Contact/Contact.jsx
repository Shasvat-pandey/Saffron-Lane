import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Reservation.css'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="reservation-section" id="contact">
      <div className="res-header">
        <span className="res-subtitle">CONTACT</span>
        <h2 className="res-title">Reserve a table or send us a message</h2>
      </div>
      <div className="res-form-container" style={{ textAlign: 'center' }}>
        <p className="res-info">
          Book your table now or reach out to us directly for any special requests.
        </p>
        <div className="res-actions" style={{ justifyContent: 'center' }}>
          <button className="btn-gold" onClick={() => navigate('/reservation')}>
            Reserve Table
          </button>
          <button className="btn-outline-gold" onClick={() => navigate('/write-to-us')}>
            Write to us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
