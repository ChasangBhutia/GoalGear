import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { logout } from '../services/AuthServices';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {

    const navigate = useNavigate();
    async function logoutUser(){
        try{
            let response = await logout();
            if(response.data.success){
                alert(response.data.message);
                navigate('/login');
            }
        }catch(err){
            console.log(err.message);
            
        }
    }

    return (
        <nav className='p-5 w-1/4 bg-zinc-100 px-10 rounded-xl flex justify-between flex-col gap-10'>
            <section>
                <h3 className='mb-5'>Shopping {'->'} Account</h3>
                <h1 className='text-3xl font-light mb-8'>My Account</h1>
                <ul className='flex flex-col gap-5'>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-4'><AccountBoxIcon /></span><span>My Details</span></button>
                    </li>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-4'><LocationPinIcon /></span><span>My Address</span></button>
                    </li>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-4'><LocalShippingIcon /></span><span>My Orders</span></button>
                    </li>
                </ul>
            </section>
            <button className='outline rounded-3xl h-10 w-60 hover:bg-zinc-900 hover:text-white transition duration-500' onClick={logoutUser}>Log Out</button>
        </nav>
    )
}

export default SideMenu