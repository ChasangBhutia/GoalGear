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
    <article className='h-90 w-180 m-auto flex gap-2 mt-20'>
      <img className='rounded-lg h-full w-1/2' src={`http://localhost:3000/uploads/${product.image}`} alt="" />
      <section className='flex flex-col gap-2'>
        <h2 className='text-3xl font-semibold' style={{ fontFamily: '"Poppins",sans-serif' }}>{product.name}</h2>
       <section>
         <p className={`inline mr-4 ${product.discount>0 && 'line-through'}`}>Price: ₹{product.price}</p>
        <p className='inline'>Discount: ₹{product.discount}</p>
       </section>
       {product.discount>0 && <p>Final Price: ₹{product.price - product.discount}</p> }
        
        <h3>Size:</h3>
        <section className='flex gap-2'>
          {sizes.map((size, index) => {
            return <button key={index} className={`${selectedSize === size ? 'bg-[#F6E20C] text-black': 'bg-zinc-900 text-white'} font-semibold h-12 w-12 rounded`}
              onClick={() => handleSizeClick(size)}>{size}</button>
          })}
        </section>
        <h3>Quantity: </h3>

        <input className='outline h-12 w-12 rounded text-xl text-center' type='number' onChange={(e)=>setQuantity(e.target.value)} value={quantity} />
        <button className='bg-[#F6E20C] h-10 rounded-lg' onClick={AddToCart}>Add To Cart</button>
      </section>
    </article>
  )
}

export default ProductDisplay