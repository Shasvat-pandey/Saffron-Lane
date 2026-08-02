import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthProfile.css'

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('saffron_user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      navigate('/auth'); // Kick back to login if not logged in
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem('saffron_user');
    navigate('/');
  };

  if (!user) return null;

  return (
    <div className='profile-page'>
        <div className="auth-header">
          <span className="auth-subtitle">YOUR TABLE</span>
          <h2 className="auth-title">Welcome back.</h2>
        </div>

        <div className="profile-box">
          
          {/* Profile Header */}
          <div className="profile-header">
            <div className="profile-avatar">{user.name.charAt(0).toUpperCase()}</div>
            <div className="profile-info">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <hr className="profile-line" />

          {/* Edit Profile */}
          <div className="profile-section">
            <h4 className="section-title">EDIT PROFILE</h4>
            <div className="auth-group">
              <label>FULL NAME</label>
              <input type="text" defaultValue={user.name} />
            </div>
            <div className="profile-row">
              <div className="auth-group">
                <label>EMAIL</label>
                <input type="email" defaultValue={user.email} />
              </div>
              <div className="auth-group">
                <label>PHONE</label>
                <input type="tel" defaultValue="9876543210" />
              </div>
            </div>
            <button className="btn-gold small-btn">SAVE CHANGES</button>
          </div>

          <hr className="profile-line" />

          {/* Change Password */}
          <div className="profile-section">
            <h4 className="section-title">CHANGE PASSWORD</h4>
            <div className="profile-row">
              <div className="auth-group">
                <label>NEW PASSWORD</label>
                <input type="password" />
              </div>
              <div className="auth-group">
                <label>CONFIRM PASSWORD</label>
                <input type="password" />
              </div>
            </div>
            <button className="btn-outline-gold small-btn">UPDATE PASSWORD</button>
            <p className="password-hint">Minimum 8 characters. You'll stay signed in on this device.</p>
          </div>

          <hr className="profile-line" />

          {/* Reservation History */}
          <div className="profile-section">
            <h4 className="section-title">RESERVATION HISTORY</h4>
            <p className="history-text">
              No reservations yet. <span onClick={() => navigate('/reservation')}>Reserve a table →</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="profile-actions">
            <button className="btn-gold" onClick={() => navigate('/reservation')}>RESERVE A TABLE</button>
            <button className="btn-outline-gold" onClick={handleSignOut}>SIGN OUT</button>
          </div>

        </div>
      </div>
  )
}

export default Profile