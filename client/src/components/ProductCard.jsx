import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <article className='flex flex-col h-80 w-60 text-left'>
        <img className='h-[80%] w-full' src={`http://localhost:3000/uploads/${props.imgUrl}`} alt={`${props.name} image`} />
        <h3>{props.name}</h3>
        <p className='flex gap-2'><span>Price: {props.price}</span><span>Discount: {props.discount}</span></p>
    </article>
    </Link>
  )
}

export default ProductCard