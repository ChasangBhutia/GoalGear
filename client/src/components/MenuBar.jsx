import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import {useAuth} from '../context/AuthContext';

const MenuBar = () => {

    const {user} = useAuth();
    const {cartQuantity} = useCart();
  return (
    <nav className='flex px-[5vw] justify-between bg-zinc-900 text-white h-[8vh] items-center'>
        <h1 className='text-3xl' style={{fontFamily:'"Joti One",sans-serif'}}>GoalGear</h1>
        <ul className='flex gap-10'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/boots">Boots</Link>
            </li>
            <li>
                <Link to="/category/jerseys">Jerseys</Link>
            </li>
            <li>
                <Link to="/category/gloves">Gloves</Link>
            </li>
            <li>
                <Link to="/category/bags">Bags</Link>
            </li>
            <li>
                <Link to="/category/socks">Socks</Link>
            </li>
            <li>
                <Link to="/category/guards">Guards</Link>
            </li>
        </ul>
        <ul className='flex gap-5 items-center'>
            <li>
                <Link className='relative' to="/cart">
                <ShoppingBagOutlinedIcon fontSize='large'/>
                <span className='absolute left-[13px] top-[5px] text-[14px] text-white'>{cartQuantity}</span>
                </Link>
            </li>
            <li>
                <Link to="/login"><button>Login</button></Link>
            </li>
            <li>
                <Link to="/user"><img className='h-10 w-10 rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" /></Link>
            </li>
        </ul>
    </nav>
  )
}

export default MenuBar