import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useProduct } from '../hooks/useProduct';

const ProductDisplay = ({ product, role }) => {

  const {deleteItem} = useProduct();
  const { addProduct } = useCart();
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState(null);

  const sizes = product.category === 'boots' ? ['34', '36', '38', '40', '42', '44'] : ['S', 'M', 'L', 'XL', 'XXL'];
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const AddToCart = () => {
    const productId = product._id;
    const data = {
      quantity,
      size: selectedSize
    }
    addProduct(data, productId);
  }

  const deleteProdcut = ()=>{
    deleteItem(product._id);
  }


  return (
    <section className='h-[40vw] w-[80vw] m-auto mt-20 mb-30 flex flex-col gap-2 sm:w-140 sm:h-100'>
      <article className=' flex gap-2 sm:gap-5 '>
        <img className='rounded-lg h-full w-[30vw] sm:w-60 sm:h-70' src={`http://localhost:3000/uploads/${product.image}`} alt="" />
        <section className='flex flex-col gap-[1vw] w-1/2 leading-tight'>
          <h2 className='text-[4vw] leading-tight sm:text-[26px]'>{product.name}</h2>
          <section className='leading-tight text-[2.4vw] sm:text-[15px]'>
            <p className={`inline mr-4 ${product.discount > 0 && 'line-through'}`}>Price: ₹{product.price}</p>
            <p className='inline'>Discount: ₹{product.discount}</p>
            {product.discount > 0 && <p>Final Price: ₹{product.price - product.discount}</p>}
          </section>
          <h3 className='text-[3vw] sm:text-[20px]'>Size:</h3>
          <section className='flex gap-[1vw]'>
            {sizes.map((size, index) => {
              return <button key={index} className={`${selectedSize === size ? 'bg-[#F6E20C] text-black' : 'bg-zinc-900 text-white'} font-semibold h-[7vw] w-[8vw] text-[2.5vw] rounded sm:h-12 sm:w-12 sm:text-[18px]`}
                onClick={() => handleSizeClick(size)}>{size}</button>
            })}
          </section>
          {role === 'user' &&
            <>
              <h3 className='text-[3vw] sm:text-[20px]'>Quantity: </h3>
              <input className='outline h-[7vw] w-[6vw] rounded text-[3vw] text-center sm:text-[20px] sm:h-10 sm:w-10' type='number' onChange={(e) => setQuantity(e.target.value)} value={quantity} />
            </>
          }

        </section>
      </article>
      {role === 'admin' ? <button className='bg-[#F6E20C] py-2 text-[3vw] rounded-lg sm:h-12 sm:w-full sm:text-[20px]' onClick={deleteProdcut}>Delete Product</button> :
        <button className='bg-[#F6E20C] py-2 text-[3vw] rounded-lg sm:h-12 sm:w-full sm:text-[20px]' onClick={AddToCart}>Add To Cart</button>
      }


    </section>
  )
}

export default ProductDisplay