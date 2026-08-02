import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      {/* ---------------- New House Console Header ---------------- */}
      <div className="admin-header-new">
        <span className="house-console">HOUSE CONSOLE</span>
        <h1 className="admin-title-new">
          Saffron Lane, <span className="title-managed">managed.</span>
        </h1>
        <div className="title-divider"></div>
      </div>

      {/* ---------------- New 4-Column Stat Grid ---------------- */}
      <div className="admin-grid-new">
        <div className="admin-card-new">
          <p className="stat-new">2</p>
          <h4>RESERVATIONS</h4>
        </div>
        <div className="admin-card-new">
          <p className="stat-new">0</p>
          <h4>UPCOMING</h4>
        </div>
        <div className="admin-card-new">
          <p className="stat-new">0</p>
          <h4>COVERS TODAY</h4>
        </div>
        <div className="admin-card-new">
          <p className="stat-new">23</p>
          <h4>DISHES</h4>
        </div>
      </div>

      {/* ---------------- Existing Recent Activity Section ---------------- */}
      <div className="admin-header" style={{ marginTop: '60px' }}>
        <h2 className="admin-title" style={{ fontSize: '24px' }}>Recent Activity</h2>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>TIME</th>
              <th>ACTION</th>
              <th>DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14:30</td>
              <td>New Booking</td>
              <td>Table for 2 by Ananya R. at 19:00</td>
            </tr>
            <tr>
              <td>13:15</td>
              <td>Message Received</td>
              <td>Inquiry about private dining for 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;