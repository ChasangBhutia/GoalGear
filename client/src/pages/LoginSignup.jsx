import React, { useState } from 'react'
import { motion } from 'framer-motion';
import juggling from '../assets/juggling.gif'
import { useAuth } from '../context/AuthContext';

const LoginSignup = () => {

    const { CheckOtp, fetchOtp, errorMessage, registerUser, loginUser } = useAuth();
    const [otpSection, setOtpSection] = useState(true);
    const [haveAccount, setHaveAccount] = useState(false);
    const [authError, setAuthError] = useState('');
    const [userData, setUserData] = useState(
        haveAccount ? {
            email: '',
            password: '',
            otp: ''
        } : {
            fullname: '',
            email: '',
            password: '',
            otp: ''
        }
    );


    const handleChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const getOtp = () => {
        if (!userData.email) {
            setOtpSection(true);
        } else {
            fetchOtp(userData.email);
            setOtpSection(false);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        CheckOtp(userData.email, userData.otp);
        haveAccount ? loginUser(userData) : registerUser(userData);
        setAuthError(errorMessage);
    }



    return (
        <div className='h-screen w-full flex justify-center items-center'>

            <motion.section className='rounded-lg w-[70vw] p-2  bg-[rgba(184,207,206,0.9)] flex flex-col justify-center sm:w-100'>
                <h1 className='mb-6 text-[5vw] sm:text-[30px]'>{haveAccount ? "Login" : "Sign Up"}</h1>
                <form className='flex flex-col gap-2 justify-center text-[3vw] sm:text-[20px]' onSubmit={handleSubmit}>
                    {!haveAccount && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full sm:h-15' type="text" onChange={handleChange} value={userData.fullname} name='fullname' placeholder='Fullname' required />}
                    <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full sm:h-15' type="email" name='email' onChange={handleChange} value={userData.email} placeholder='Email' required />
                    {(!otpSection && !haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full sm:h-15' type="number" name='otp' onChange={handleChange} value={userData.otp} placeholder='Enter your OTP' required />}
                    {(!otpSection || haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full sm:h-15' type="password" name='password' onChange={handleChange} value={userData.password} placeholder={haveAccount ? 'Password' : 'Create Password'} required />}
                    {(otpSection && !haveAccount) ? <input className='bg-[#F6E20C] rounded-lg h-[12vw] w-full bg-[#F6E20C] sm:h-15' type="submit" value='Send OTP' onClick={getOtp} /> : <input className='bg-[#F6E20C] rounded-lg h-[10vw] w-full bg-[#F6E20C] text-[4vw] sm:h-15 sm:text-[20px]' type="submit" value={haveAccount ? 'Login' : 'Create Account'} />}
                </form>
                <p className='text-center text-red-500'>{authError}</p>
                <button className='mt-7 z-99 text-[3vw] sm:text-[20px]' onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't have an account? Create" : "Already Registered? Login"}</button>

            </motion.section>
        </div>

    )
}

export default LoginSignup
