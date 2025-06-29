import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay'
import MenuBar from '../components/MenuBar';

const Product = () => {

    const [product, setProduct] = useState({});
    const {productId} = useParams();

    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
                let response = await axios.get(`http://localhost:3000/product/get-product/${productId}`,{
                    withCredentials:true
                });
                if(response.data.success) setProduct(response.data.product);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchProduct();
    },[])

  return (
    <div>
        <MenuBar/>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product