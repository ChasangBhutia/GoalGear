import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import CategorySection from '../components/CategorySection';
import MenuBar from '../components/MenuBar';

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
    <>
        <MenuBar/>
        <CategorySection type={type} categoryProducts={categoryProducts}/>
    </>
  )
}

export default Category;