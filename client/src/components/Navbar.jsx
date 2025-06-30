import React, { useEffect, useState } from 'react'
import './styles/style.css'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const Navbar = () => {

    const [user, setUser] = useState({});
    const {cartQuantity} = useCart();

    useEffect(()=>{
        const getUser = async()=>{
            let response = await axios.get('http://localhost:3000/api/user/get-user',{
                withCredentials:true
            })
            if(response.data.success){
                setUser(response.data.user);
            }
        }
        getUser();
    },[])

  return (
    <nav className='flex justify-between pb-4 px-15'>
        <ul className='flex gap-10 mt-5 w-1/3 text-lg items-center'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/category/boots"><li>Boots</li></Link>
            <Link to="/category/jerseys"><li>Jerseys</li></Link>
            <Link to="/category/gloves"><li>Gloves</li></Link>
            <Link to="/category/bags"><li>Bags</li></Link>
        </ul>
        <section className='logoContainer w-1/3 bg-white'>
            <h1 className='text-3xl' style={{fontFamily:'Joti One'}}>GoalGear</h1>
        </section>
        <ul className='flex gap-10 mt-5 w-1/3 justify-end text-xl items-center'>
            <Link to="/category/socks"><li>Socks</li></Link>
            <Link to="/category/guards"><li>Guards</li></Link>
            <Link to="/cart"><li className='relative'>
                <ShoppingBagOutlinedIcon fontSize='large'/>
                <span className='absolute left-[13px] top-[12px] text-[15px]'>{cartQuantity}</span>
            </li></Link>
            <section className='flex gap-2 items-center'>
                <Link to="/login"><li>
                <button className='bg-zinc-900 text-white p-2 rounded-4xl w-30 text-sm'>Login</button>
            </li>
            </Link>
            <Link to="/profile"><li>
                <img className='h-10 w-10 rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" />
            </li>
            </Link>
            </section>
        </ul>
    </nav>
  )
}

export default Navbar