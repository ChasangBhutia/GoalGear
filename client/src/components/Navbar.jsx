import './styles/style.css'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from 'react';

const Navbar = () => {

    const { user } = useAuth();
    const { cartQuantity } = useCart();
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='flex justify-between h-[10vw]'>
            <section className='flex justify-center w-full'>
                <ul className='hidden'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/category/boots"><li>Boots</li></Link>
                    <Link to="/category/jerseys"><li>Jerseys</li></Link>
                    <Link to="/category/gloves"><li>Gloves</li></Link>
                    <Link to="/category/bags"><li>Bags</li></Link>
                </ul>
                <section className='logoContainer w-[30vw] h-[7vw] bg-white ml-13'>
                    <h1 className='text-[5vw]' style={{ fontFamily: 'Joti One' }}>GoalGear</h1>
                </section>
                <ul className='hidden'>
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
            </section>
            <section>
                <span className={`${openMenu?'fixed right-[5vw]':'relative'} z-99`}>
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
                <ul className={`fixed ${openMenu?'left-0 flex':'left-[120vw] hidden'} duration-200 inset-0 bg-white z-9 flex flex-col items-center gap-3 h-screen pt-20`}>
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
            </section>
        </nav>
    )
}

export default Navbar