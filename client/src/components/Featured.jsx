import React from 'react'
import ronaldo from '../assets/ronaldo.jpg'
import messi from '../assets/messi.jpg'
import neymar from '../assets/neymar.jpg'
import {motion} from 'framer-motion'


const Featured = () => {
    return (
        <div id='featured' className='py-2 overflow-hidden'>
            <h1 className='text-[5vw] mb-5 ms-5'>Featured</h1>
            <ul className='flex px-10 gap-5'>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{right:'100px'}} whileInView={{right:0}} transition={{duration:1}}>
                    <img className='h-[70%] w-full rounded-xl'  src={messi} alt="" />
                    <p className='text-[2.5vw] mt-2 w-full'>"You have to fight to reach your dream." – Messi</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{bottom:'100px'}} whileInView={{bottom:0}} transition={{duration:1}}>
                    <img className='h-[70%] w-full rounded-xl' src={ronaldo} alt="" />
                   <p className='text-[2.5vw] mt-2 w-full'>"Talent without working hard is nothing." – Ronaldo</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{left:'100px'}} whileInView={{left:0}} transition={{duration:1}}>
                    <img className='h-[70%] w-full rounded-xl' src={neymar} alt="" />
                    <p className='text-[2.5vw] mt-2 w-full'>"The secret is to believe in your dreams." – Neymar</p>
                </motion.li>
            </ul>
        </div>
    )
}

export default Featured