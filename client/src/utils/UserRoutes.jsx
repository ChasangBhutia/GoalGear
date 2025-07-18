import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const UserRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  let user;
  try {
    user = jwtDecode(token);
  } catch (err) {
    console.error("Token decoding failed:", err.message);
    return <Navigate to="/login" replace />;
  }

  // Optional but recommended: check token expiration
  const currentTime = Math.floor(Date.now() / 1000);
  if (user.exp < currentTime) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'user') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default UserRoutes;
