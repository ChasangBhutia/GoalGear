import { useContext, createContext, useState } from "react";
import { register, login, getOtp, verifyOtp } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { useSharedState } from './SharedStateContext';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const { refresh, setRefresh } = useSharedState();
    const [errorMessage, setErrorMessage] = useState('');
    const [otpVerification, setOtpVerification] = useState(false);


    const CheckOtp = async (email, otp) => {
        try {
            let response = await verifyOtp(email, otp);
            if (response.data.success) {
                setOtpVerification(true);
                alert(response.data.message);
            } else {
                setErrorMessage(response.data.errors);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const fetchOtp = async (email) => {
        try {
            let response = await getOtp(email);
            alert(response.data.message);
        } catch (err) {
            console.log(err.message);
        }
    }

    const registerUser = async (userData) => {
        try {
            let response = await register(userData);
            if (response?.data?.success) {
                setRefresh(refresh + 1);
                navigate('/');
            }
            else {
                setErrorMessage(response?.data?.errors)
                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            };
        } catch (error) {
            const errors = error?.response?.data?.errors;

            if (Array.isArray(errors)) {
                setErrorMessage(errors);
            } else {
                setErrorMessage(errors || error?.message || 'Something went wrong');
            }

            setTimeout(() => setErrorMessage(''), 5000);
        }
    }

    const loginUser = async (userData) => {
        try {
            let response = await login(userData);
            if (response?.data?.success) {
                setRefresh(refresh + 1);
                navigate('/');
            } else {
                setErrorMessage(response?.data?.errors);
                setTimeout(() => {
                    setErrorMessage('');
                }, 5000);
            }
        } catch (err) {
            console.log(err?.message);
        }
    }



    return (
        <AuthContext.Provider value={{ otpVerification, CheckOtp, fetchOtp, errorMessage, registerUser, loginUser, }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => useContext(AuthContext);