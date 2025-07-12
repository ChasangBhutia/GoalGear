import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date;


    return (
        <footer className='mt-10 bg-zinc-900 text-zinc-400 px-2 py-5 flex justify-between gap-2 static bottom-0'>
            <section className='w-120'>
                <h3 className='text-[3.7vw]'>Subscribe</h3>
                <p className='text-[3vw]'>Subscribe to never miss a special offer.</p>
                <h1 className='text-[4vw] my-5 text-zinc-200' style={{ fontFamily: '"Joti One", sans-serif' }}>GoalGear</h1>
                <h3 className='text-[2.5vw]'>+91 9339197277</h3>
                <h3 className='text-[2.5vw]'>goalgear@support.com</h3>
                <p className='text-zinc-600 text-[2.5vw] mt-3'>@{date.getFullYear()}, GoalGear All rights reserved</p>
            </section>
            <section>
                <form className='outline flex justify-between w-[50vw] h-[9vw] mb-5'>
                    <input className='w-full focus:outline-none text-zinc-200 ps-1 text-[3vw]' type="email" placeholder='Enter your email'/>
                    <button className='bg-[#F6E20C] text-black px-[1vw] w-[20vw] text-[3vw]'>Subscribe</button>
                </form>
                <p className='text-[2.5vw]'>Get exclusive deals and updates! Subscribe to never miss a special offer.</p>
                <section className='mt-5 flex justify-between'>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold'>Shop</h3>
                        <ul className='text-[2.5vw] flex flex-col'>
                            <li><Link className='hover:ps-2 duration-500' to='/#hero'>Home</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#featured'>Featured</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#newlyAdded'>Newly Added</Link></li>
                        </ul>
                    </span>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold'>Assistance</h3>
                        <ul className='text-[2.5vw] flex flex-col'>
                            <li><Link className='hover:ps-2 duration-500' to='/#hero'>Privacy Policy</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#featured'>Orders and Return</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#newlyAdded'>Terms and Conditions</Link></li>
                        </ul>
                    </span>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold'>Social</h3>
                        <ul className='text-[2.5vw] flex flex-col gap-2'>
                            <li><Link className='hover:ps-2 duration-500' to='/#hero'>Facebook</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#featured'>Instagram</Link></li>
                        </ul>
                    </span>
                </section>
            </section>
        </footer>
    )
}

export default Footer