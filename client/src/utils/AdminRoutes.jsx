import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const AdminRoutes = ({children}) => {

    const token=Cookies.get("token");
    if(!token) return <Navigate to="/login" replace/>

    let user;
    try{
        user = token ?  jwtDecode(token) : null;
    }catch(err){
        console.log(err.message);
        <Navigate to="/login" replace/>
    }
    if(user.role !== 'admin'){
        return <Navigate to="/login" replace/>
    }

  return children
}

export default AdminRoutes