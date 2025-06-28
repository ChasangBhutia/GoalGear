import React from 'react'
import './styles/style.css'

const Navbar = () => {
  return (
    <nav className='flex justify-between pb-4 px-15'>
        <ul className='flex gap-6 mt-5 w-1/3'>
            <li>Home</li>
            <li>Boots</li>
            <li>Jerseys</li>
            <li>Gloves</li>
            <li>Bags</li>
        </ul>
        <section className='logoContainer w-1/3 bg-white'>
            <div className="shape">
            <h1 className='text-3xl' style={{fontFamily:'Joti One'}}>GoalGear</h1>
            </div>
        </section>
        <ul className='flex gap-6 mt-5 w-1/3 justify-end'>
            <li>Socks</li>
            <li>Guards</li>
            <li>
                <button>Login/Signup</button>
                <img src="" alt="" />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar