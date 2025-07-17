import './styles/style.css'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import { useUser } from '../hooks/useUser';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import MobileNav from './MobileNav';
import LoginIcon from '@mui/icons-material/Login';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = (props) => {

    const { user } = useUser();
    const { cartQuantity } = useCart();
    const [openMenu, setOpenMenu] = useState(false);
    const [adminDropDown, setAdminDropDown] = useState(false);

    return (
        <nav className='flex justify-between h-[10vw] lg:h-10'>
            <section className='flex justify-center w-full md:justify-between'>
                <ul className='hidden md:flex justify-between gap-3 text-md items-center ps-2 pb-2 lg:pb-0 lg:pt-3 w-[40%] lg:w-[35%] lg:text-lg xl:ps-20'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/category/boots"><li>Boots</li></Link>
                    <Link to="/category/jerseys"><li>Jerseys</li></Link>
                    <Link to="/category/gloves"><li>Gloves</li></Link>
                    <Link to="/category/bags"><li>Bags</li></Link>
                </ul>
                <section className='logoContainer w-[30vw] h-[7vw] bg-white ml-13 sm:h-9 sm:w-50 md:w-45 md:ml-0 w-[20%] lg:w-[22%] lg:h-12'>
                    <h1 className='text-[5vw] sm:text-2xl lg:text-4xl'><span style={{ fontFamily: 'Joti One' }} className='text-[#BB3E00]'>Goal</span><span style={{ fontFamily: 'Joti One' }} className='text-[#205781]'>Gear</span></h1>
                </section>
                <ul className='hidden md:flex justify-around text-md items-center gap-2 pr-2 pb-2 lg:pb-0 lg:pt-3 w-[40%] lg:w-[35%] lg:text-lg xl:pr-15'>
                    <Link to="/category/socks"><li>Socks</li></Link>
                    <Link to="/category/guards"><li>Guards</li></Link>
                    {props.user.role === 'admin' &&
                        <section>
                            <button className='flex items' onClick={() => setAdminDropDown(!adminDropDown)}>Admin {adminDropDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</button>
                            <section className={`mb-t overflow-hidden bg-zinc-200 flex flex-col text-black absolute p-0 gap-3 rounded-md h-0 w-50 duration-100  ${adminDropDown ? 'h-33 py-4 px-5' : ''}`}>
                                <Link to='/admin/all-users' onClick={() => setAdminDropDown(!adminDropDown)}>All Users</Link>
                                <Link to='/admin/all-products' onClick={() => setAdminDropDown(!adminDropDown)}>All Products</Link>
                                <Link to='/admin/create-product' onClick={() => setAdminDropDown(!adminDropDown)}>Create Product</Link>
                            </section>
                        </section>
                    }
                    <Link to="/login"><li>
                        <button className='bg-zinc-900 text-white p-2 rounded text-sm'><LoginIcon /></button>
                    </li>
                    </Link>

                    <section className='flex gap-2 items-center'>
                        {props.role !== 'admin' && <Link to="/cart"><li className='relative'>
                            <ShoppingBagOutlinedIcon fontSize='large' />
                            <span className='absolute left-[13px] top-[12px] text-[15px]'>{cartQuantity}</span>
                        </li></Link>}
                        <Link to="/user"><li>
                            <img className='h-[4vw] w-[4vw] rounded-[100%] lg:h-10 lg:w-10' src={`http://localhost:3000/uploads/${user.image}`} alt="" />
                        </li>
                        </Link>
                    </section>
                </ul>
            </section>
            <section>
                <span className={`${openMenu ? 'fixed right-[5vw]' : 'relative'} z-99 md:hidden`}>
                    <Hamburger size={28} distance='sm' onToggle={toggled => {
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

            </section>
        </nav>
    )
}

export default Navbar