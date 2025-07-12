import React, { useState } from 'react'
import { motion } from 'framer-motion';
import juggling from '../assets/juggling.gif'
import {useAuth} from '../context/AuthContext';

const LoginSignup = () => {

    const {CheckOtp, fetchOtp, errorMessage, registerUser, loginUser} = useAuth();
    const [otpSection, setOtpSection] = useState(true);
    const [haveAccount, setHaveAccount] = useState(false);
    const [authError, setAuthError] = useState('');
    const [userData, setUserData] = useState(
        haveAccount?{
        email:'',
        password:'',
        otp: ''
    }:{
        fullname:'',
        email:'',
        password:'',
        otp:''
    }
    );

    
    const handleChange = (e)=>{
        setUserData((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }
    const getOtp = ()=>{
        if(!userData.email){
            setOtpSection(true);
        }else{
            fetchOtp(userData.email);
            setOtpSection(false);
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        CheckOtp(userData.email, userData.otp);
        haveAccount ? loginUser(userData) : registerUser(userData);
        setAuthError(errorMessage);
    }



    return (
        <div className={`flex justify-center items-start h-[100vh] pt-30`}>
            <motion.section  className='p-5 hidden relative bottom-11 right-10 z-99 rounded-lg w-1/2 h-120 bg-[#7F8CAA] flex flex-col justify-between' initial={{ x: '100%' }} animate={{ x: haveAccount ? '10%' : '100%'}} transition={{ duration: 0.5 }}>
                    <h2 className='text-2xl text-black'>Welcome {haveAccount?'Back':'to GoalGear'}</h2>
                   <article className='pl-5'>
                    <img src={juggling} alt="" />
                   </article>
                   <p className='text-black'>{haveAccount?"Login to your account to continue shopping":"Create an account to buy exciting football kits"}</p>
            </motion.section>
            <motion.section className='z-98 rounded-lg w-[70vw] p-2  bg-[rgba(184,207,206,0.9)] flex flex-col justify-center'>
                <h1 className='mb-6 text-[5vw]'>{haveAccount ? "Login" : "Sign Up"}</h1>
                <form className='flex flex-col gap-2 justify-center' onSubmit={handleSubmit}>
                    {!haveAccount && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full text-[3vw]' type="text" onChange={handleChange} value={userData.fullname} name='fullname' placeholder='Fullname' required/>}
                    <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full text-[3vw]' type="email" name='email' onChange={handleChange} value={userData.email} placeholder='Email' required/>
                    {(!otpSection && !haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full text-[3vw]' type="number" name='otp' onChange={handleChange} value={userData.otp} placeholder='Enter your OTP' required/>}
                    {(!otpSection || haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-[10vw] w-full text-[3vw]' type="password" name='password' onChange={handleChange} value={userData.password} placeholder={haveAccount?'Password':'Create Password'} required/>}
                    {(otpSection && !haveAccount)?<input className='bg-[#F6E20C] rounded-lg h-[12vw] text-[4vw] w-full bg-[#F6E20C]' type="submit" value='Send OTP' onClick={getOtp}/>:<input className='bg-[#F6E20C] rounded-lg h-[10vw] w-full bg-[#F6E20C] text-[4vw]' type="submit" value={haveAccount?'Login':'Create Account'} />}
                </form>
                <p className='text-center text-red-500'>{authError}</p>
                <button className='mt-7 z-99 text-[3vw] ' onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't have an account? Create" : "Already Registered? Login"}</button>

            </motion.section>
        </div>
    )
}

export default LoginSignup
