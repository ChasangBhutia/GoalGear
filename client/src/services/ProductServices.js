import api from './api';

export const getAllProducts = ()=>{
    return api.get('/api/product/');
} 

export const getProduct =(productId)=>{
    return api.get(`/api/product/${productId}`);
}

export const createProduct =(productData)=>{
    return api.post('/api/product', productData);
}

export const deleteProduct = (productId)=>{
    return api.delete(`/api/product/${productId}`);
}