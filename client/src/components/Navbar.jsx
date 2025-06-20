import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false);
    function handleMenuClick() {
        if (menuClicked) setMenuClicked(false)
        else setMenuClicked(true);
    }
    const smallScreen = `pt-10 bg-red-200 h-screen
    z-99 w-full flex flex-col fixed bottom-[-8vh]
    text-center duration-800 gap-6 mt-95 text-lg sm:flex-col`

    const largeScreen = `md:pt-0 md:bg-transparent md:h-fit md:w-auto md:duration-0
    md:static md:flex-row md:text-[16px] md:mt-0 lg:gap-10 md:gap-5 lg:text-lg`;

    return (
        <nav className='flex justify-between items-center lg:px-12 md:px-7 h-[8vh] px-1 sm:px-7'>
            <h1 className='text-2xl font-semibold'>GoalGear</h1>
             
            <ul className={`${smallScreen} ${largeScreen} ${menuClicked ? 'left-0 ' : 'left-180 sm:left-200'} `}>
               
                <li >
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/jerseys'>Jerseys</Link>
                </li>
                <li>
                    <Link to='/boots'>Boots</Link>
                </li>
                <li>
                    <Link to='/gloves'>Gloves</Link>
                </li>
                <li>
                    <Link to='/bags'>Bags</Link>
                </li>
                <li>
                    <Link to='/socks'>Socks</Link>
                </li>
                <li>
                    <Link to='/guards'>Guards</Link>
                </li>
            </ul>
            <section className=' flex items-center lg:gap-5 md:gap-2 text-lg'>
                <Link to='/cart' className='mr-1'><ShoppingBagOutlinedIcon/></Link>
                <Link to='/profile'>
                    <section className='flex items-center bg-yellow-200 px-2 py-1 rounded-3xl w-fit'>
                        <button className='mr-2'>User</button>
                        <img className='bg-red-300 h-[25px] w-[25px] rounded-[100%]' src="img.png" alt="" />
                    </section>
                </Link>
                 <button className='md:hidden h-fit w-fit' onClick={handleMenuClick}>
                    <span className='sm:hidden'>
                        <Hamburger duration={0.7} size={22}/>
                    </span>
                    <span className='hidden sm:block'>
                     <Hamburger duration={0.7}/>
                    </span>
                </button>
            </section>
           
        </nav>
    )
}

export default Navbar