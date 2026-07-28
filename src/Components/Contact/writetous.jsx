import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Contact.css'

const WriteToUs = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult("Contact form is not configured yet.");
      return;
    }

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className='reservation-section'>
      <div className="res-header">
        <span className="res-subtitle">CONTACT US</span>
        <h2 className="res-title">Get in Touch With Us</h2>
      </div>

      <div className="res-form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group full-width">
            <label>YOUR NAME</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group full-width">
            <label>PHONE NUMBER</label>
            <input type="tel" name="phone" required />
          </div>
          <div className="form-group full-width">
            <label>WRITE YOUR MESSAGE HERE</label>
            <textarea name="message" rows="4" required></textarea>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-gold">SUBMIT NOW</button>
            <button type="button" className="btn-outline-gold" onClick={() => navigate(-1)}>BACK</button>
          </div>
          <span className="form-result">{result}</span>
        </form>
      </div>
    </div>
  )
}

export default WriteToUs