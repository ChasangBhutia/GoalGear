import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <motion.article className='flex flex-col h-[40vw] w-[30vw] text-left mb-4' initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: false }}>
          <img className='h-[80%] w-full' src={`http://localhost:3000/uploads/${props.imgUrl}`} alt={`${props.name} image`} />
        <section className='h-[20%] leading-tight'>
          <h3 className='text-[2.5vw] leading-tight'>{props.name}</h3>
          <p className={`mr-1 text-[2vw] leading-tight`}>Price: ₹<span className={`${props.discount > 0 && 'line-through'}`}>{props.price}</span> {props.discount>0 && props.price - props.discount}</p>
          <p className='text-[2vw] leading-tight'>Discount: ₹{props.discount}</p>
        </section>
      </motion.article>
    </Link>
  )
}

export default ProductCard