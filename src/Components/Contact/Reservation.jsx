import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Reservation.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Reservation = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const today = new Date().toISOString().split('T')[0];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Processing reservation...");
    // Add your booking submission logic here
    setTimeout(() => {
        setResult("Table Reserved Successfully!");
        event.target.reset();
    }, 1500);
  };

  return (
    <>
    <Navbar/>
      <div className='reservation-section'>
        <div className="res-header">
          <span className="res-subtitle">RESERVATIONS</span>
          <h2 className="res-title">A table set for you.</h2>
        </div>

        <div className="res-form-container">
          <form onSubmit={onSubmit}>
            <div className="form-group full-width">
              <label>FULL NAME</label>
              <input type="text" name="name" required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>PHONE</label>
                <input type="tel" name="phone" required />
              </div>
              <div className="form-group">
                <label>EMAIL</label>
                <input type="email" name="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>DATE</label>
                <input type="date" name="date" required />
              </div>
              <div className="form-group">
                <label>TIME</label>
                <select name="time" required>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>GUESTS</label>
              <input type="number" name="guests" min="1" max="16" required />
            </div>

            <div className="availability-row">
              <span>AVAILABILITY · {today}</span>
              <span className="seats-left">22 of 24 seats left</span>
            </div>

            <div className="form-group full-width">
              <label>A NOTE FOR THE CHEF</label>
              <textarea name="notes" rows="2" placeholder="Occasion, dietary preferences, seating requests..."></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-gold">RESERVE MY TABLE</button>
              <button type="button" className="btn-outline-gold" onClick={() => navigate(-1)}>BACK</button>
            </div>
            <span className="form-result">{result}</span>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Reservation