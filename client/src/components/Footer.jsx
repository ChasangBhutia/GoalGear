import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const date = new Date;


    return (
        <footer className='mt-10 bg-zinc-900 text-zinc-400 px-2 py-5 flex justify-between gap-2 static bottom-0 md:px-5 lg:px-20 xl:px-30'>
            <section className='w-120'>
                <h3 className='text-[3.7vw] sm:text-[25px]'>Subscribe</h3>
                <p className='text-[3vw] sm:text-[18px]'>Subscribe to never miss a special offer.</p>
                <h1 className='text-[4vw] my-5 text-zinc-200 md:text-[30px]' style={{ fontFamily: '"Joti One", sans-serif' }}>GoalGear</h1>
                <h3 className='text-[2.5vw] md:text-[18px]'>+91 9339197277</h3>
                <h3 className='text-[2.5vw] md:text-[18px]'>goalgear@support.com</h3>
                <p className='text-zinc-600 text-[2.5vw] mt-3 md:text-[15px] xl:text-[18px]'>@{date.getFullYear()}, GoalGear All rights reserved</p>
            </section>
            <section>
                <form className='outline flex w-[50vw] h-[9vw] mb-5 md:h-16 md:w-100 xl:w-130'>
                    <input className='w-full focus:outline-none text-zinc-200 ps-1 text-[3vw] md:text-[20px]' type="email" placeholder='Enter your email'/>
                    <button className='bg-[#F6E20C] text-black px-[1vw] w-[20vw] text-[3vw] md:text-[20px]'>Subscribe</button>
                </form>
                <p className='text-[2.5vw] md:text-[18px] md:w-100 xl:w-130'>Get exclusive deals and updates! Subscribe to never miss a special offer.</p>
                <section className='mt-5 flex justify-between md:mr-5 md:justify-start gap-3 xl:gap-7'>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold md:text-[25px]'>Shop</h3>
                        <ul className='text-[2.5vw] flex flex-col md:text-[15px]'>
                            <li><Link className='hover:ps-2 duration-500' to='/#hero'>Home</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#featured'>Featured</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#newlyAdded'>Newly Added</Link></li>
                        </ul>
                    </span>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold md:text-[25px]'>Assistance</h3>
                        <ul className='text-[2.5vw] flex flex-col md:text-[15px]'>
                            <li><Link className='hover:ps-2 duration-500' to='/#hero'>Privacy Policy</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#featured'>Orders and Return</Link></li>
                            <li><Link className='hover:ps-2 duration-500' to='/#newlyAdded'>Terms and Conditions</Link></li>
                        </ul>
                    </span>
                    <span>
                        <h3 className='text-[3vw] mb-2 font-semibold md:text-[25px]'>Social</h3>
                        <ul className='text-[2.5vw] flex flex-col  md:text-[15px]'>
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