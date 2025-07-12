import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Squash as Hamburger } from 'hamburger-react'
import MobileNav from './MobileNav';

const MenuBar = (props) => {

    

    const { user } = useAuth();
    const { cartQuantity } = useCart();
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className='flex pl-[5vw] pr-[3vw] justify-between bg-zinc-900 text-white h-[10vw] items-center'>
            <h1 className='text-[5vw]' style={{ fontFamily: '"Joti One",sans-serif' }}><span style={{ fontFamily: 'Joti One' }} className='text-[#BB3E00]'>Goal</span><span style={{ fontFamily: 'Joti One' }} className='text-[#205781]'>Gear</span></h1>
            <ul className='flex gap-10 hidden'>
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
            <ul className='flex gap-5 items-center hidden'>
                <li>
                    <Link className='relative' to="/cart">
                        <ShoppingBagOutlinedIcon fontSize='large' />
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
            <span className='relative z-99'>
                <Hamburger size={20} distance='sm' color={openMenu?'black':'white'} onToggle={toggled => {
                    if (toggled) {
                        //open menu
                        setOpenMenu(true);
                    } else {
                        //closemenu
                        setOpenMenu(false);
                    }
                }} />
            </span>
            <MobileNav openMenu={openMenu} cartQuantity={cartQuantity} imgUrl={user.image} role={props.user.role}/>

        </nav>
    )
}

export default MenuBar