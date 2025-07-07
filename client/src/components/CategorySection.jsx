import React from 'react'
import ProductCard from '../components/ProductCard';

const CategorySection = ({ type, categoryProducts }) => {
  return (
    <div className='px-2 text-center py-3'>
      <h1 className='uppercase text-[5vw]'>{type}</h1>
      <section className='text-center bg-red-900'>
        <section className='mt-3 flex flex-wrap justify-left gap-5'>
          {categoryProducts.map((item, index) => {
            return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount} />
          })}
        </section>
      </section>
    </div>
  )
}

export default CategorySection