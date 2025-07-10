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
        <motion.nav className={`${menuClicked ? 'flex' : 'hidden'} backdrop-blur-xl border-1 p-2 rounded w-[60vw] h-[100vw] z-98 fixed right-[3vw] top-[13vw] justify-between flex-col`}>
            <section>
                <h1 className='text-[3.5vw] font-light mb-3 mt-7'>My Account</h1>
                <ul className='flex flex-col gap-1'>
                    <li className={`p-2 ${currSection === 'details' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center`}>
                        <button onClick={() => setCurrSection('details')} ><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><AccountBoxIcon sx={{ color: 'white', fontSize: '4vw', height: '5vw', width:'5vw' }} /></span><span className='text-[3vw]'>My Details</span></button>
                    </li>
                    <li className={`p-2 ${currSection === 'address' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center`}>
                        <button onClick={() => setCurrSection('address')}><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><LocationPinIcon sx={{ color: 'white', fontSize: '4vw', height: '5vw', width:'5vw' }} /></span><span className='text-[3vw]'>My Address</span></button>
                    </li>
                    <li className={`p-2 ${currSection === 'orders' ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-200'} rounded-xl w-[90%] h-[10vw] flex items-center`}>
                        <button onClick={() => setCurrSection('orders')}><span className='bg-zinc-900 inline-block rounded-[100%] p-1 mr-[1vw]'><LocalShippingIcon sx={{ color: 'white', fontSize: '4vw', height: '5vw', width:'5vw' }} /></span><span className='text-[3vw]'>My Orders</span></button>
                    </li>
                </ul>
            </section>
            <button className='outline rounded-3xl h-[10vw] text-[4vw] w-[90%] hover:bg-zinc-900 hover:text-white transition duration-500' onClick={logoutUser}>Log Out</button>
        </motion.nav>
    )
}

export default SideMenu