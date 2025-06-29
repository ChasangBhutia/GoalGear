import React from 'react'
import ProductCard from '../components/ProductCard';

const CategorySection = ({type, categoryProducts}) => {
  return (
    <div className='px-20 text-center py-10'>
        <h1 className='uppercase text-3xl' style={{fontFamily:'"Poppins",sans-serif'}}>{type}</h1>
         <section className='mt-10 px-40 flex flex-wrap justify-center gap-5'>
            {categoryProducts.map((item,index)=>{
             return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
        })}
        </section>
    </div>
  )
}

export default CategorySection