import React, { useState } from 'react';

const Reservations = () => {
  // Dummy data simulating a database fetch
  const [reservations, setReservations] = useState([
    { id: 1, name: 'Ananya R.', time: '18:00', guests: 2, phone: '9876543210', status: 'Confirmed', note: 'Vegan request' },
    { id: 2, name: 'William Jackson', time: '19:30', guests: 4, phone: '9123456780', status: 'Pending', note: 'Anniversary' },
    { id: 3, name: 'Vinira S.', time: '20:00', guests: 2, phone: '9988776655', status: 'Confirmed', note: 'None' },
  ]);

  return (
    <div>
      <div className="admin-header">
        <h1 className="admin-title">Reservations</h1>
        <button className="btn-gold" style={{ padding: '10px 20px', fontSize: '10px' }}>+ ADD MANUAL BOOKING</button>
      </div>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>GUEST NAME</th>
              <th>TIME</th>
              <th>PARTY SIZE</th>
              <th>CONTACT</th>
              <th>DIETARY / NOTES</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res.id}>
                <td style={{ color: '#f7f3ed' }}>{res.name}</td>
                <td>{res.time}</td>
                <td>{res.guests} Guests</td>
                <td>{res.phone}</td>
                <td style={{ color: res.note !== 'None' ? '#c9933b' : '#a09d98' }}>{res.note}</td>
                <td>
                  <span className={`status-badge ${res.status === 'Confirmed' ? 'status-confirmed' : 'status-pending'}`}>
                    {res.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservations;