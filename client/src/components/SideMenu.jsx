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
        <nav className='p-5 w-1/4 h-1/2 flex justify-between flex-col gap-10'>
            <section>
                <h3 className='mb-5'>Shopping {'->'} Account</h3>
                <ul className='flex flex-col gap-3'>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-5'><AccountBoxIcon /></span><span>My Details</span></button>
                    </li>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-5'><LocationPinIcon /></span><span>My Address</span></button>
                    </li>
                    <li>
                        <button className=''><span className='bg-blue-200 inline-block rounded-[100%] p-1 mr-5'><LocalShippingIcon /></span><span>My Orders</span></button>
                    </li>
                </ul>
            </section>
            <button className='outline rounded-3xl h-10 w-60' onClick={logoutUser}>Log Out</button>
        </nav>
    )
}

export default SideMenu