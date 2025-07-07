import ProductCard from './ProductCard';
import { useProduct } from '../hooks/useProduct';

const NewlyAdded = () => {

    const {allProducts} = useProduct();

  return (
    <div id='newlyAdded' className='text-left py-5'>
        <h1 className='text-[5vw] ms-5'>Newly Added</h1>
        <section className='mt-10 px-2 flex flex-wrap justify-center gap-5'>
            {allProducts.slice(0,10).map((item,index)=>{
                return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
            })}
        </section>
    </div>
  )
}

export default NewlyAdded