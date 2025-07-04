import { useContext, createContext, useState, useEffect } from "react";
import { register, login, uploadImage, getUser, getOtp, verifyOtp } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(0);
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');


     const CheckOtp = async (email, otp)=>{
        try{
            let response = await verifyOtp(email, otp);
            alert(response.data.message);
        }catch(err){
            console.log(err.message);
        }
    }

    const fetchOtp = async (email)=>{
        try{
            let response = await getOtp(email);
            alert(response.data.message);
        }catch(err){
            console.log(err.message);
        }
    }

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

    const uploadProfilImage = async (userImage)=>{
        try{
            let response = await uploadImage(userImage);
            alert(response.data.message);
            setRefresh(refresh+1);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        const fetchUser = async()=>{
            let response = await getUser();
            if(response.data.success){
                setUser(response.data.user);
            }
        }
        fetchUser();
    },[refresh])

    

    return (
        <AuthContext.Provider value={{CheckOtp, fetchOtp, errorMessage, registerUser, loginUser, uploadProfilImage, user ,setRefresh}}>
            {children}
        </AuthContext.Provider>
        )
} 


export const useAuth = ()=> useContext(AuthContext);