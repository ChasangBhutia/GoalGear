import axios from 'axios'
import React, { useState } from 'react'

const CreateProduct = () => {

    const [productData, setProductData] = useState({
        image:null,
        name:'',
        price:0,
        discount:0,
        category:''
    }) 

    const handleChange = (e)=>{
        if(e.target.name==='image'){
            setProductData((prev)=>({
                ...prev,
                [e.target.name]:e.target.files[0]
            }))
        }else{
            setProductData((prev)=>({
                ...prev,
                [e.target.name]:e.target.value
            }))
        }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('image', productData.image);
        formData.append('price', productData.price);
        formData.append('discount', productData.discount);
        formData.append('category', productData.category);
        try{
            let response = await axios.post('http://localhost:3000/product/create-product', formData,{
                withCredentials:true
            })
            alert(response.data.message);
        }catch(err){
            console.log(err.message);
        }
    }

  return (
    <div className='text-center p-10'>
        <h1 className='text-3xl mb-10' style={{fontFamily:'"Poppins",sans-serif'}}>Create A Product</h1>
        <form className='flex flex-col m-auto w-100 gap-2' onSubmit={handleSubmit}>
            <input className='w-full outline h-10 rounded-md py-2 px-2' onChange={handleChange} name='image'  type="file" accept='image/*'/>
            <input className='w-full outline h-10 rounded-md px-2' onChange={handleChange} value={productData.name} name='name' type="text" placeholder='Product Name' />
            <section className='flex gap-2'>
                <input className='w-full outline h-10 rounded-md px-2' onChange={handleChange} value={productData.price} name='price' type="number" placeholder='Price'/>
                <input className='w-full outline h-10 rounded-md px-2' onChange={handleChange} value={productData.discount} name='discount' type="number" placeholder='Discount'/>
            </section>
            <select name='category' onChange={handleChange} className='h-10 outline rounded-md'>
                <option disabled selected>Category</option>
                <option value="jerseys">Jersey</option>
                <option value="boots">Boot</option>
                <option value="gloves">Gloves</option>
                <option value="bags">Bag</option>
                <option value="socks">Socks</option>
                <option value="guards">Guard</option>
            </select>
            <input className='h-10 bg-[#F6E20C] rounded-md' type="submit" value="Create Product"/>
        </form>
    </div>
  )
}

export default CreateProduct