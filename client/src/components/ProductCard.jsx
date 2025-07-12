import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <motion.article className='flex flex-col h-[40vw] w-[25vw] text-left mx-2 md:h-80 md:w-50 lg:mt-5 xl:mx-5' initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false }}>
          <img className='h-[70%] w-full' src={`http://localhost:3000/uploads/${props.imgUrl}`} alt={`${props.name} image`} />
        <section className='h-[20%] leading-snug'>
          <h3 className='text-[2.5vw] leading-snug md:text-[2vw] lg:text-[20px]'>{props.name}</h3>
          <p className={`mr-1 text-[2vw] leading-snug md:text-[1.5vw] lg:text-sm`}>Price: ₹{props.price}</p>
        </section>
      </motion.article>
    </Link>
  )
}

export default ProductCard