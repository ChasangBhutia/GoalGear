import React, { useState } from 'react'
import { motion } from 'framer-motion';
import backgroundTheme from '../assets/backgroundTheme.png'
import field from '../assets/field.png'

const LoginSignup = () => {

    const [haveAccount, setHaveAccount] = useState(false);


    return (
        <div className={`flex justify-center px-80 h-[92vh] pt-30`}>
            <motion.section  className='p-5 relative bottom-11 right-10 z-99 rounded-lg w-1/2 h-120 bg-[#333446] flex flex-col justify-between' initial={{ x: '100%' }} animate={{ x: haveAccount ? '10%' : '100%'}} transition={{ duration: 0.5 }}>
                    <h2 className='text-2xl text-white'>Welcome {haveAccount?'Back':'to GoalGear'}</h2>
                   <article className='pl-5'>
                     <img className='z-99 absolute bottom-40 h-70 w-90' src={backgroundTheme} alt="" />
                    <img className='z-98 absolute top-37 h-60 w-90' src={field} alt="" />
                   </article>
                   <p className='text-white'>{haveAccount?"Login to your account to continue shopping":"Create an account to buy exciting football kits"}</p>
            </motion.section>
            <motion.section className='z-98 rounded-lg w-100 px-15 h-100 bg-[rgba(184,207,206,0.9)] flex flex-col justify-center' initial={{ x: '-100%'}} animate={{ x: haveAccount ? '-10%' : '-100%'}} transition={{ duration: 0.5 }}>
                <h1 style={{fontFamily:'"Poppins",sans-serif'}} className='mt-5 mb-6 text-3xl'>{haveAccount ? "Login" : "Sign Up"}</h1>
                <form className='flex flex-col gap-2 justify-center'>
                    {!haveAccount && <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="text" placeholder='Fullname' />}
                    <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="email" placeholder='Email' />
                    <input className='bg-zinc-100 ps-2 rounded-lg h-14 w-full' type="password" placeholder='password' />
                    <input className='bg-[#F6E20C] rounded-lg h-12 w-full bg-[#F6E20C]' type="Submit" value={haveAccount ? "Login" : "Create User"} />
                </form>
                <button className='mt-10 z-99' onClick={() => setHaveAccount(!haveAccount)}>{haveAccount ? "Don't have an account? Create" : "Already Registered? Login"}</button>

            </motion.section>
        </div>
    )
}

export default LoginSignup
