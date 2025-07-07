import React from 'react'
import ronaldo from '../assets/ronaldo.jpg'
import messi from '../assets/messi.jpg'
import neymar from '../assets/neymar.jpg'
import {motion} from 'framer-motion'


const Featured = () => {
    return (
        <div id='featured' className='py-2 overflow-hidden'>
            <h1 className='text-[5vw] mb-5 ms-5'>Featured</h1>
            <ul className='flex flex-col px-10 gap-5'>
                <motion.li className='relative w-[50vw] m-auto'>
                    <img className='h-[60vw] w-full rounded-xl'  src={messi} alt="" />
                    <p className='text-[3vw] mt-2 w-full'>"You have to fight to reach your dream." – Messi</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto'>
                    <img className='h-[60vw] w-full rounded-xl' src={ronaldo} alt="" />
                   <p className='text-[3vw] mt-2 w-full'>"Talent without working hard is nothing." – Ronaldo</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto'>
                    <img className='h-[60vw] w-full rounded-xl' src={neymar} alt="" />
                    <p className='text-[3vw] mt-2 w-full'>"The secret is to believe in your dreams." – Neymar</p>
                </motion.li>
            </ul>
        </div>
    )
}

export default Featured