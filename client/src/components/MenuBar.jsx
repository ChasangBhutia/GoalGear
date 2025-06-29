import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const MenuBar = () => {
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
        <ul className='flex gap-5'>
            <li>
                <Link to="/cart"><ShoppingBagOutlinedIcon/></Link>
            </li>
            <li>
                <Link to="/login"><button>Login</button></Link>
            </li>
            <li>
                <Link to="/profile"><img src="" alt="" /></Link>
            </li>
        </ul>
    </nav>
  )
}

export default MenuBar