import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulating an API call
    setTimeout(() => {
      setIsSaving(false);
      // You can replace this with a nice toast notification later
      alert("Settings saved successfully!"); 
    }, 1000);
  };

  return (
    <div>
      {/* Reusing the beautiful header from your Dashboard */}
      <div className="admin-header-new">
        <span className="house-console">CONFIGURATION</span>
        <h1 className="admin-title-new">Settings</h1>
        <div className="title-divider"></div>
      </div>

      <div className="settings-card">
        <h3 className="settings-section-title">THE HOUSE</h3>

        <form onSubmit={handleSave}>
          <div className="settings-group">
            <label>NIGHTLY SEAT CAPACITY</label>
            <input type="number" defaultValue="100" required />
          </div>

          <div className="settings-group">
            <label>FIRST SEATING</label>
            {/* Using step="60" to format it nicely and a time input */}
            <input type="time" defaultValue="18:00" required />
          </div>

          <div className="settings-group">
            <label>CLOSING NOTE</label>
            <input type="text" defaultValue="Last seating at 22:00" required />
          </div>

          <div className="settings-group">
            <label>
              ANNOUNCEMENT <span className="label-sub">(SHOWN TO GUESTS WHEN RESERVING)</span>
            </label>
            <textarea rows="4" placeholder="Enter any special announcements..."></textarea>
          </div>

          <button type="submit" className="settings-save-btn">
            {isSaving ? 'SAVING...' : 'SAVE SETTINGS'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;