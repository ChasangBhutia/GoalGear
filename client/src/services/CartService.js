import api from "./api";

export const getCart = ()=>{
    return api.get('api/user/cart')
}

export const addToCart = (productData, productId)=>{
    return api.post(`api/user/cart/${productId}`,productData);
}

export const removeFromCart = (productId)=>{
    return api.delete(`api/user/cart/${productId}`);
}