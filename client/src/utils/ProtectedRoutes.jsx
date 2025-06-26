import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import React from 'react';

const ProtectedRoutes = ({children}) => {

    const token=Cookies.get("token");
    const user = token ? jwtDecode(token) : null;
    if(!token) return <Navigate to="/login" replace/>

  return React.cloneElement(children, {user})
}

export default ProtectedRoutes