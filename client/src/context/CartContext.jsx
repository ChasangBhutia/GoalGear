import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([]);
    const cartQuantity = cart.length;
    const [refreshCart, setRefreshCart] = useState(1);
    const [cartSummary, setCartSummary] = useState({
        subtotal: 10,
        discount: 0,
        deliveryCharge: 24,
        total: 0,
    });
    
    useEffect(()=>{
        const fetchCart = async()=>{
            let response = await axios.get('http://localhost:3000/user/get-cart',{
                withCredentials:true
            });
            if(response.data.success){
                getCartSummary(response.data.cart);
                setCart(response.data.cart.reverse());
            }
        }
        fetchCart();
    },[refreshCart])
    const removeFromCart = async (cartId)=>{
        try{
            let response = await axios.delete(`http://localhost:3000/user/remove-from-cart/${cartId}`,{
                withCredentials:true
            })
            alert(response.data.message);
            if(response.data.success){
                setRefreshCart((...prev)=>({
                    ...prev+1
                }))
            }
        }catch(err){
            console.log(err.message);
        }
    }

    function getCartSummary (summaryDetail){
        let deliveryCharge = 24;
        let subtotal = 0;
        let discount = 0;
        summaryDetail.map(c=>{
            subtotal = subtotal + c.totalPrice;
            discount = discount + c.totalDiscount
        })
        let total =(subtotal-discount)+deliveryCharge
        setCartSummary(()=>({
            subtotal:subtotal,
            discount:discount,
            deliveryCharge,
            total:total
        }))
    }

    return(
        <CartContext.Provider value={{cart, cartQuantity, setRefreshCart, removeFromCart, cartSummary}}>
            {children}
        </CartContext.Provider>
    )
} 

export const useCart = ()=> useContext(CartContext);