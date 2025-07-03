import React from 'react'
import {motion} from 'framer-motion'

const ProfileOrders = () => {
  return (
    <motion.article initial={{left:700, opacity:0}} whileInView={{left:10, opacity:1}} transition={{duration:0.3}} viewport={{once:false}} className='relative w-3/4 rounded-lg p-5 mx-20'>
        <h1 className='text-3xl'>My Orders</h1>
    </motion.article>
  )
}

export default ProfileOrders