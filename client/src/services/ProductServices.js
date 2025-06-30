import api from './api';

export const getAllProducts = async ()=>{
    return api.get('/api/product/');
} 

export const getProduct = async(productId)=>{
    return api.get(`/api/product/${productId}`);
}

export const createProduct = async(productData)=>{
    return api.post('/api/product', productData);
}

export const deleteProduct = async (productId)=>{
    return api.delete(`/api/product/${productId}`);
}