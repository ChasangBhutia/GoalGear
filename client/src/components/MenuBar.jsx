import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Squash as Hamburger } from 'hamburger-react'

const MenuBar = () => {

    const { user } = useAuth();
    const { cartQuantity } = useCart();
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className='flex pl-[5vw] pr-[3vw] justify-between bg-zinc-900 text-white h-[10vw] items-center'>
            <h1 className='text-[5vw]' style={{ fontFamily: '"Joti One",sans-serif' }}>GoalGear</h1>
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
            <ul className={`fixed ${openMenu ? 'left-0 flex' : 'left-[120vw] hidden'} duration-200 inset-0 bg-white text-black z-9 flex flex-col items-center gap-3 h-screen pt-20`}>
                <Link to="/"><li>Home</li></Link>
                <Link to="/category/boots"><li>Boots</li></Link>
                <Link to="/category/jerseys"><li>Jerseys</li></Link>
                <Link to="/category/gloves"><li>Gloves</li></Link>
                <Link to="/category/bags"><li>Bags</li></Link>
                <Link to="/category/socks"><li>Socks</li></Link>
                <Link to="/category/guards"><li>Guards</li></Link>
                <Link to="/cart"><li className='relative'>
                    <ShoppingBagOutlinedIcon fontSize='large' />
                    <span className='absolute left-[13px] top-[12px] text-[15px]'>{cartQuantity}</span>
                </li></Link>
                <section className='flex gap-2 items-center'>
                    <Link to="/login"><li>
                        <button className='bg-zinc-900 text-white p-2 rounded-4xl w-30 text-sm'>Login</button>
                    </li>
                    </Link>
                    <Link to="/user"><li>
                        <img className='h-10 w-10 rounded-[100%]' src={`http://localhost:3000/uploads/${user.image}`} alt="" />
                    </li>
                    </Link>
                </section>
            </ul>
        </nav>
    )
}

export default MenuBar