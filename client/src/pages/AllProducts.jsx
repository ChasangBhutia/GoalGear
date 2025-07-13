import { useProduct } from '../hooks/useProduct';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
    const {allProducts} = useProduct();

  return (
     <div className='p-3 h-full text-center'>
      <h1 className='text-[5vw] mb-2 md:text-[30px]'>All Products</h1>
      <section className='px-2 flex flex-wrap justify-center lg:gap-2 lg:px-20'>
        {allProducts.map((item, index)=>{
            return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
        })}
      </section>
    </div>
  )
}

export default AllProducts