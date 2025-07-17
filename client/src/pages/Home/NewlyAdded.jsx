import ProductCard from '../../components/ProductCard';
import { useProduct } from '../../hooks/useProduct';


const NewlyAdded = () => {

  const {allProducts} = useProduct();
  
  return (
    <div id='newlyAdded' className='text-left py-5 md:pt-0'>
        <h1 className='text-[5vw] mb-5 ms-5 sm:text-[3vw] lg:ms-20'>Newly Added</h1>
        <section className='px-2 flex flex-wrap justify-center lg:gap-2 lg:px-20'>
            {allProducts.slice(0,10).map((item,index)=>{
                return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
            })}
        </section>
    </div>
  )
}

export default NewlyAdded