import React from 'react'
import ronaldo from '../assets/ronaldo.jpg'
import messi from '../assets/messi.jpg'
import neymar from '../assets/neymar.jpg'
import {motion} from 'framer-motion'


const Featured = () => {
    return (
        <div id='featured' className='py-10 px-10 overflow-hidden'>
            <h1 className='text-3xl mb-5 ms-10' style={{ fontFamily: '"Poppins", sans-serif' }}>Featured</h1>
            <ul className='flex px-10 gap-5 justify-center'>
                <motion.li initial={{right:"400px", opacity:0}} whileInView={{right:0, opacity:1}} transition={{duration:0.7}} viewport={{once:false}} className='relative w-1/3'>
                    <img className='h-130 w-full' src={messi} alt="" />
                    <p className='text-xl mt-5'>"You have to fight to reach your dream." – Messi</p>
                </motion.li>
                <motion.li initial={{top:"300px",opacity:0}} whileInView={{top:0, opacity:1}} transition={{duration:0.7}} viewport={{once:false}} className='relative w-1/3'>
                    <img className='h-130 w-full' src={ronaldo} alt="" />
                   <p className='text-xl mt-5'>"Talent without working hard is nothing." – Ronaldo</p>
                </motion.li>
                <motion.li initial={{left:"400px",opacity:0}} whileInView={{left:0, opacity:1}} transition={{duration:0.7}} viewport={{once:false}} className='relative w-1/3'>
                    <img className='h-130 w-full' src={neymar} alt="" />
                    <p className='text-xl mt-5'>"The secret is to believe in your dreams." – Neymar</p>
                </motion.li>
            </ul>
        </div>
    )
}

export default Featured