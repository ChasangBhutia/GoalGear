import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const ProductDisplay = ({ product }) => {

  const {addProduct} = useCart();
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = product.category === 'boots' ? ['34','36','38','40','42','44'] : ['S','M','L','XL','XXL'] ;
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const AddToCart = async ()=>{
    const productId = product._id;
    const data = {
      quantity,
      size:selectedSize
    }
    addProduct(data, productId);
  }

  

  return (
    <section className='h-[40vw] w-[80vw] m-auto mt-20 mb-30 flex flex-col gap-2'>
         <article className=' flex gap-2 '>
          <img className='rounded-lg h-full w-[30vw]' src={`http://localhost:3000/uploads/${product.image}`} alt="" />
      <section className='flex flex-col gap-[1vw] w-1/2 leading-tight'>
        <h2 className='text-[4vw] leading-tight'>{product.name}</h2>
       <section className='leading-tight'>
         <p className={`inline mr-4 ${product.discount>0 && 'line-through'} text-[2.4vw]`}>Price: ₹{product.price}</p>
        <p className='inline text-[2.4vw]'>Discount: ₹{product.discount}</p>
       {product.discount>0 && <p className=' text-[2.4vw]'>Final Price: ₹{product.price - product.discount}</p> }
       </section>
        
        <h3 className='text-[3vw]'>Size:</h3>
        <section className='flex gap-[1vw]'>
          {sizes.map((size, index) => {
            return <button key={index} className={`${selectedSize === size ? 'bg-[#F6E20C] text-black': 'bg-zinc-900 text-white'} font-semibold h-[7vw] w-[8vw] text-[2.5vw] rounded`}
              onClick={() => handleSizeClick(size)}>{size}</button>
          })}
        </section>
        <h3 className='text-[3vw]'>Quantity: </h3>
        <input className='outline h-[7vw] w-[6vw] rounded text-[3vw] text-center' type='number' onChange={(e)=>setQuantity(e.target.value)} value={quantity} />
      </section>
    </article>
        <button className='bg-[#F6E20C] py-2 text-[3vw] rounded-lg' onClick={AddToCart}>Add To Cart</button>
    </section>
  )
}

export default ProductDisplay