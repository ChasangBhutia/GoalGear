import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { logout } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

const SideMenu = ({ currSection, setCurrSection, menuClicked }) => {

    const navigate = useNavigate();
    async function logoutUser() {
        try {
            let response = await logout();
            if (response.data.success) {
                alert(response.data.message);
                navigate('/login');
            }
        } catch (err) {
            console.log(err.message);

        }
    }

    return (
        <motion.nav className={`${menuClicked ? 'flex backdrop-blur-xl border-1 p-2 w-[60vw] h-[100vw] z-98 fixed right-[3vw] top-[13vw]' : 'hidden'} rounded justify-between flex-col md:flex md:bg-zinc-200 md:px-2 md:w-[30vw] md:pb-5 md:h-[70vh] lg:w-70`}>
            <section>
                <h1 className='text-[3.5vw] font-light mb-3 mt-7 md:text-[20px]'>My Account</h1>
                <ul className='flex flex-col gap-1 md:gap-3'>
                    <li className={`p-2 ${currSection === 'details' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center md:h-12`}>
                        <button onClick={() => setCurrSection('details')} ><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><AccountBoxIcon sx={{color:'white'}}/></span><span className='text-[3vw] md:text-[18px]'>My Details</span></button>
                    </li>
                    <li className={`p-2 ${currSection === 'address' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center md:h-12`}>
                        <button onClick={() => setCurrSection('address')}><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><LocationPinIcon sx={{color:'white'}}/></span><span className='text-[3vw] md:text-[18px]'>My Address</span></button>
                    </li>
                    <li className={`p-2 ${currSection === 'orders' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center md:h-12`}>
                        <button onClick={() => setCurrSection('orders')}><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><LocalShippingIcon sx={{color:'white'}}/></span><span className='text-[3vw] md:text-[18px]'>My Orders</span></button>
                    </li>
                </ul>
            </section>
            <button className='outline rounded-3xl mx-auto h-[10vw] text-[4vw] w-[90%] hover:bg-zinc-900 hover:text-white transition duration-500 md:h-10 md:w-50 md:text-[20px] ' onClick={logoutUser}>Log Out</button>
        </motion.nav>
    )
}

export default SideMenu