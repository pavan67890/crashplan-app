import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>
      {/* Add your admin logic here */}
    </div>
  );
};

export default Admin;
