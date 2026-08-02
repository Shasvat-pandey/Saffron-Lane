import React from 'react';

const MenuManager = () => {
  const menuItems = [
    { id: 1, category: 'STARTERS', name: 'Saffron Paneer Tikka', price: '€16', status: 'Active' },
    { id: 2, category: 'MAINS', name: 'Smoked Dal Makhani', price: '€22', status: 'Active' },
    { id: 3, category: 'DESSERTS', name: 'Gold-Leaf Gulab Jamun', price: '€12', status: 'Sold Out' },
  ];

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Menu Manager</h1>
        <button className="btn-gold" style={{ padding: '10px 20px', fontSize: '10px' }}>+ ADD NEW DISH</button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>CATEGORY</th>
              <th>DISH NAME</th>
              <th>PRICE</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id}>
                <td>{item.category}</td>
                <td style={{ color: '#f7f3ed' }}>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <span className={`status-badge ${item.status === 'Active' ? 'status-confirmed' : 'status-pending'}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="btn-outline-gold" style={{ padding: '5px 10px', fontSize: '9px' }}>EDIT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuManager;