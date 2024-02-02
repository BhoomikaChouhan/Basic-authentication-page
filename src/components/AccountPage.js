import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AccountPage() {
  
  const [user, setUser] = useState({
    username: "ABC", 
    email: 'ABC@example.com', 
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login'); 
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    
    alert('Account updated', user);
  
  };

  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Account</button>
      </form>
      <button onClick={handleLogout} className="btn btn-secondary mt-3">Logout</button>
      
    </div>
  );
}
