import React from 'react'
import ProductCard from '../components/ProductCard';

const CategorySection = ({ type, categoryProducts }) => {
  return (
    <div className='px-2 text-center py-3'>
      <h1 className='uppercase text-[5vw] mb-5 sm:text-[3vw] lg:text-[35px]'>{type}</h1>
        <section className='mt-4 px-2 flex flex-wrap justify-center lg:gap-2 lg:px-20'>
          {categoryProducts.map((item, index) => {
            return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount} />
          })}
        </section>
    </div>
  )
}

export default CategorySection