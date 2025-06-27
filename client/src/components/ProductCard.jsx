import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <motion.article initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className='flex flex-col h-80 w-60 text-left'>
        <img className='h-[80%] w-full' src={`http://localhost:3000/uploads/${props.imgUrl}`} alt={`${props.name} image`} />
        <h3>{props.name}</h3>
        <section>
          <p className={`inline mr-2 ${props.discount>2 && 'line-through'}`}>Price: ₹{props.price}</p>
          <p className='inline'>Discount: ₹{props.discount}</p>
        </section>
        {props.discount > 0 && <p>Final Price: ₹{props.price - props.discount}</p>}
      </motion.article>
    </Link>
  )
}

export default ProductCard