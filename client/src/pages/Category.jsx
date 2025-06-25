import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Category = () => {
    const {type} = useParams();
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
    const categoryProducts = allProducts.filter(p=>p.category===type);
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

export default Category;