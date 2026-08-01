import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Reservation.css'

const Contact = () => {
  const navigate = useNavigate();

  // Helper function to check if the user is signed in before navigating
  const handleProtectedNavigation = (path) => {
    const loggedInUser = localStorage.getItem('saffron_user');
    if (loggedInUser) {
      navigate(path); // Let them through if they are logged in
    } else {
      navigate('/auth'); // Redirect to login page if they are a guest
    }
  };

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
          {/* We swapped navigate() for handleProtectedNavigation() here */}
          <button className="btn-gold" onClick={() => handleProtectedNavigation('/reservation')}>RESERVE A TABLE</button>
          <button className="btn-outline-gold" onClick={() => handleProtectedNavigation('/write-to-us')}>WRITE TO US</button>
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