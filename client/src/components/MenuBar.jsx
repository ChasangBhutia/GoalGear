import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Squash as Hamburger } from 'hamburger-react'
import MobileNav from './MobileNav';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const MenuBar = (props) => {



    const { user } = useAuth();
    const { cartQuantity } = useCart();
    const [openMenu, setOpenMenu] = useState(false);
    const [adminDropDown, setAdminDropDown] = useState(false);

    return (
        <nav className='flex pl-[5vw] pr-[3vw] justify-between bg-zinc-900 text-white h-[10vw] items-center sm:h-15 md:px-3'>
            <h1 className='text-[5vw] sm:text-2xl lg:text-4xl' style={{ fontFamily: '"Joti One",sans-serif' }}><span style={{ fontFamily: 'Joti One' }} className='text-[#BB3E00]'>Goal</span><span style={{ fontFamily: 'Joti One' }} className='text-[#205781]'>Gear</span></h1>
            <ul className='hidden md:flex md:gap-3 lg:gap-10'>
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
                {props.user.role === 'admin' &&
                    <li>
                        <button className='flex items' onClick={() => setAdminDropDown(!adminDropDown)}>Admin {adminDropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</button>
                        <section className={`mb-t overflow-hidden bg-zinc-200 flex flex-col text-black absolute p-0 gap-3 rounded-md h-0 w-50 duration-100  ${adminDropDown ? 'h-33 py-4 px-5' : ''}`}>
                            <Link to='/admin/all-users' onClick={() => setAdminDropDown(!adminDropDown)}>All Users</Link>
                            <Link to='/admin/all-products' onClick={() => setAdminDropDown(!adminDropDown)}>All Products</Link>
                            <Link to='/admin/create-product' onClick={() => setAdminDropDown(!adminDropDown)}>Create Product</Link>
                        </section>
                    </li>
                }
            </ul>
            <ul className='items-center hidden md:flex md:gap-2 lg:gap-5'>
                <li>
                    <Link to="/login"><button>Login</button></Link>
                </li>
                {props.user.role === 'user' && <li>
                    <Link className='relative' to="/cart">
                        <ShoppingBagOutlinedIcon fontSize='large' />
                        <span className='absolute left-[13px] top-[5px] text-[14px] text-white'>{cartQuantity}</span>
                    </Link>
                </li>}
                <li>
                    <Link to="/user"><img className='h-10 w-10 rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" /></Link>
                </li>

            </ul>
            <span className='relative z-99 md:hidden'>
                <Hamburger size={20} distance='sm' color={openMenu ? 'black' : 'white'} onToggle={toggled => {
                    if (toggled) {
                        //open menu
                        setOpenMenu(true);
                    } else {
                        //closemenu
                        setOpenMenu(false);
                    }
                }} />
            </span>
            <MobileNav openMenu={openMenu} cartQuantity={cartQuantity} imgUrl={user.image} role={props.user.role} />

        </nav>
    )
}

export default MenuBar