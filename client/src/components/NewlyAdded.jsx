import axios from 'axios';
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const NewlyAdded = () => {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
            try{
                let response = await axios.get('http://localhost:3000/product/all-products',{
                    withCredentials:true
                })
                if(response.data.success){
                    setAllProducts(response.data.products);
                }
                
            }catch(err){
                console.log(err.message);
            }
        }
        getProducts();
    },[])

  return (
    <div id='newlyAdded' className='text-center py-10'>
        <h1 className='text-3xl'>NewlyAdded</h1>
        <section className='mt-10 px-40 flex flex-wrap justify-center gap-5'>
            {allProducts.map((item,index)=>{
                return <ProductCard id={item._id} key={index} imgUrl={item.image} name={item.name} price={item.price} discount={item.discount}/>
            })}
        </section>
    </div>
  )
}

export default NewlyAdded