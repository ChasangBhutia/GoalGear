import { useContext, createContext, useState } from "react";
import { register, login, logout } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState('');

    const registerUser = async (userData)=>{
        try{
            let response = await register(userData);
            setErrorMessage(response.data.message);
            if(response.data.success) navigate('/');
        }catch(err){
            console.log(err.message);
        }
    }

    const loginUser = async (userData)=>{
        try{
            let response = await login(userData);
            setErrorMessage(response.data.message);
            if(response.data.success) navigate('/');
        }catch(err){
            console.log(err.message);
        }
    }

    

    return (
        <AuthContext.Provider value={{errorMessage, registerUser, loginUser}}>
            {children}
        </AuthContext.Provider>
        )
} 


export const useAuth = ()=> useContext(AuthContext);