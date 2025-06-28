import React from 'react'
import './styles/style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
            <div className="shape">
            <h1 className='text-3xl' style={{fontFamily:'Joti One'}}>GoalGear</h1>
            </div>
        </section>
        <ul className='flex gap-10 mt-5 w-1/3 justify-end text-xl items-center'>
            <Link to="/category/socks"><li>Socks</li></Link>
            <Link to="/category/guards"><li>Guards</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <Link to="/login"><li>
                <button className='bg-zinc-900 text-white p-2 rounded-4xl w-30'>Login</button>
                <img src="" alt="" />
            </li></Link>
        </ul>
    </nav>
  )
}

export default Navbar