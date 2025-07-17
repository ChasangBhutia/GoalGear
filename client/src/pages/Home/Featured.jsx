import React from 'react'
import ronaldo from '../../assets/ronaldo.jpg'
import messi from '../../assets/messi.jpg'
import neymar from '../../assets/neymar.jpg'
import {motion} from 'framer-motion'


const Featured = () => {
    return (
        <div id='featured' className='py-2 overflow-hidden lg:pt-10'>
            <h1 className='text-[5vw] mb-5 ms-5 sm:text-[3vw] lg:ms-20'>Featured</h1>
            <ul className='flex px-5 gap-2 lg:px-20 lg:gap-5'>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{right:'20%'}} whileInView={{right:0}} transition={{duration:1.2}}>
                    <img className='h-[70%] w-full rounded-lg'  src={messi} alt="" />
                    <p className='text-[2.5vw] mt-2 w-full md:text-[2vw] lg:text-[23px]'>"You have to fight to reach your dream." - Messi</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{bottom:'20vw'}} whileInView={{bottom:0}} transition={{duration:1.2}}>
                    <img className='h-[70%] w-full rounded-lg' src={ronaldo} alt="" />
                   <p className='text-[2.5vw] mt-2 w-full md:text-[2vw] lg:text-[23px]'>"Talent without working hard is nothing." - Ronaldo</p>
                </motion.li>
                <motion.li className='relative w-[50vw] m-auto h-[50vw]' initial={{left:'20%'}} whileInView={{left:0}} transition={{duration:1.2}}>
                    <img className='h-[70%] w-full rounded-lg' src={neymar} alt="" />
                    <p className='text-[2.5vw] mt-2 w-full md:text-[2vw] lg:text-[23px]'>"The secret is to believe in your dreams." - Neymar</p>
                </motion.li>
            </ul>
        </div>
    )
}

export default Featured