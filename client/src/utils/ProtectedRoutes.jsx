import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const ProtectedRoutes = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = token ? jwtDecode(token) : null;

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Optionally, you can check for token expiration
  const currentTime = Math.floor(Date.now() / 1000); // current time in seconds
  if (user.exp < currentTime) {
    localStorage.removeItem('token'); // remove expired token
    return <Navigate to="/login" replace />;
  }

  // Pass decoded user as a prop to the protected component
  return React.cloneElement(children, { user });
};

export default ProtectedRoutes;
