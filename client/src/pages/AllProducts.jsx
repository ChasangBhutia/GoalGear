import { useProduct } from '../hooks/useProduct';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
    const {allProducts} = useProduct();

  return (
     <div className='p-3 h-full'>
      <h1 className='text-[5vw] mb-2'>All Products</h1>
      <section className='mt-5 px-2 flex flex-wrap justify-center gap-5'>
        {allProducts.map((item, index)=>{
            return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
        })}
      </section>
    </div>
  )
}

export default AllProducts