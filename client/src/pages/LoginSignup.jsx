import React, { useState } from 'react'
import { motion } from 'framer-motion';
import juggling from '../assets/juggling.gif'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LoginSignup = () => {

    const navigate = useNavigate();
    const [haveAccount, setHaveAccount] = useState(false);
    const [userData, setUserData] = useState(
        haveAccount?{
        email:'',
        password:''
    }:{
        fullname:'',
        email:'',
        password:''
    }
    );
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e)=>{
        setUserData((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
    
        const formData = new FormData();
        !haveAccount && formData.append('fullname', userData.fullname);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        
        var uri = haveAccount?'http://localhost:3000/user/login':'http://localhost:3000/user/register';
        try{
            let response = await axios.post(uri, formData, {
                withCredentials:true,
            })
            setErrorMessage(response.data.message);
            if(response.data.accountExist) setHaveAccount(true);
            if(response.data.success) navigate('/');
        }catch(err){
            console.log(err.message);
        }
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
                <h1 style={{fontFamily:'"Poppins",sans-serif'}} className='mt-5 mb-6 text-3xl'>{haveAccount ? "Login" : "Sign Up"}</h1>
                <form className='flex flex-col gap-2 justify-center' onSubmit={handleSubmit}>
                    {!haveAccount && <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="text" onChange={handleChange} value={userData.fullname} name='fullname' placeholder='Fullname' required/>}
                    <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="email" name='email' onChange={handleChange} value={userData.email} placeholder='Email' required/>
                    <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="password" name='password' onChange={handleChange} value={userData.password} placeholder='password' required/>
                    {haveAccount?<input className='bg-[#F6E20C] rounded-lg h-12 w-full bg-[#F6E20C]' type="submit" value='Login' />:<input className='bg-[#F6E20C] rounded-lg h-12 w-full bg-[#F6E20C]' type="submit" value='Create Account' />}
                </form>
                <p className='text-center text-red-500'>{errorMessage}</p>
                <button className='mt-7 z-99' onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't have an account? Create" : "Already Registered? Login"}</button>

            </motion.section>
        </div>
    )
}

export default LoginSignup
