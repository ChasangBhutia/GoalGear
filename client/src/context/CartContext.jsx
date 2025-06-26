import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([]);
    const cartQuantity = cart.length;
    const [refreshCart, setRefreshCart] = useState(1);
    useEffect(()=>{
        const fetchCart = async()=>{
            let response = await axios.get('http://localhost:3000/user/get-cart',{
                withCredentials:true
            });
            if(response.data.success){
                setCart(response.data.cart);
            }
        }
        fetchCart();
    },[refreshCart])

    return(
        <CartContext.Provider value={{cart, cartQuantity, setRefreshCart}}>
            {children}
        </CartContext.Provider>
    )
} 

export const useCart = ()=> useContext(CartContext);