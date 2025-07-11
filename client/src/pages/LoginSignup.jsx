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
        <div className={`flex justify-center px-80 h-[92vh] pt-30`}>
            <motion.section  className='p-5 relative bottom-11 right-10 z-99 rounded-lg w-1/2 h-120 bg-[#7F8CAA] flex flex-col justify-between' initial={{ x: '100%' }} animate={{ x: haveAccount ? '10%' : '100%'}} transition={{ duration: 0.5 }}>
                    <h2 className='text-2xl text-black'>Welcome {haveAccount?'Back':'to GoalGear'}</h2>
                   <article className='pl-5'>
                    <img src={juggling} alt="" />
                   </article>
                   <p className='text-black'>{haveAccount?"Login to your account to continue shopping":"Create an account to buy exciting football kits"}</p>
            </motion.section>
            <motion.section className='z-98 rounded-lg w-100 px-15 h-100 bg-[rgba(184,207,206,0.9)] flex flex-col justify-center' initial={{ x: '-100%'}} animate={{ x: haveAccount ? '-10%' : '-100%'}} transition={{ duration: 0.5 }}>
                <h1 className='mt-5 mb-6 text-3xl'>{haveAccount ? "Login" : "Sign Up"}</h1>
                <form className='flex flex-col gap-2 justify-center' onSubmit={handleSubmit}>
                    {!haveAccount && <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="text" onChange={handleChange} value={userData.fullname} name='fullname' placeholder='Fullname' required/>}
                    <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="email" name='email' onChange={handleChange} value={userData.email} placeholder='Email' required/>
                    {(!otpSection && !haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="number" name='otp' onChange={handleChange} value={userData.otp} placeholder='Enter your OTP' required/>}
                    {(!otpSection || haveAccount) && <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="password" name='password' onChange={handleChange} value={userData.password} placeholder={haveAccount?'Password':'Create Password'} required/>}
                    {(otpSection && !haveAccount)?<input className='bg-[#F6E20C] rounded-lg h-12 w-full bg-[#F6E20C]' type="submit" value='Send OTP' onClick={getOtp}/>:<input className='bg-[#F6E20C] rounded-lg h-12 w-full bg-[#F6E20C]' type="submit" value={haveAccount?'Login':'Create Account'} />}
                </form>
                <p className='text-center text-red-500'>{authError}</p>
                <button className='mt-7 z-99' onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't have an account? Create" : "Already Registered? Login"}</button>

            </motion.section>
        </div>
    )
}

export default LoginSignup
