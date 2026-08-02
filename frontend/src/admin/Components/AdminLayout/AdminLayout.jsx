import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css'

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('saffron_user');
    navigate('/auth');
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'admin-nav-link active' : 'admin-nav-link';

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <div className="admin-brand">
          <span className="star">✦</span> SAFFRON ADMIN
        </div>
        
        <div className="admin-nav">
          <NavLink to="/admin-xyz/dashboard" className={navLinkClass}>Dashboard</NavLink>
          <NavLink to="/admin-xyz/reservations" className={navLinkClass}>Reservations</NavLink>
          <NavLink to="/admin-xyz/menu" className={navLinkClass}>Menu Manager</NavLink>
          
          {/* Moved Settings above Sign Out */}
          <NavLink to="/admin-xyz/settings" className={navLinkClass}>Settings</NavLink>
          
          <button
            onClick={handleLogout}
            className="admin-nav-link logout-btn"
          >
            Sign Out
          </button>
        </div>
        
      </div>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;