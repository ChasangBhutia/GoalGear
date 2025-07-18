import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const AdminRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  let user;
  try {
    user = jwtDecode(token);
  } catch (err) {
    console.log(err.message);
    return <Navigate to="/login" replace />;
  }

  // Optional: check for token expiration
  const currentTime = Math.floor(Date.now() / 1000);
  if (user.exp < currentTime) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminRoutes;
