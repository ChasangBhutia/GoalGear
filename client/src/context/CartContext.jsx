import { useContext, createContext, useState, useEffect } from "react";
import { getCart, addToCart, removeFromCart } from "../services/CartService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const cartQuantity = cart.length;
    const [loading, setLoading] = useState(true)
    const [refreshCart, setRefreshCart] = useState(1);
    const [cartSummary, setCartSummary] = useState({
        subtotal: 10,
        discount: 0,
        deliveryCharge: 24,
        total: 0,
    });

    // Assigning The cart value
    const fetchCart = async () => {
        try {
            let response = await getCart();
            if (response.data.success) {
                getCartSummary(response.data.cart);
                setCart(response.data.cart.reverse());
            }
        } catch (err) {
            console.log(err.message);
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {
        fetchCart();
    }, [refreshCart])

    // Remove from cart method
    const removeProduct = async (productId) => {
        try {
            let response = await removeFromCart();
            alert(response.data.message);
            if (response.data.success) {
                setRefreshCart((...prev) => ({
                    ...prev + 1
                }))
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    // Add to Cart method
    const addProduct = async (productData, productId) => {
        try {
            let response = await addToCart();
            alert(response.data.message);
            if (response.data.success) {
                setRefreshCart((prev) => ({
                    ...prev + 1
                }))
                navigate('/cart');
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    //To get the summary of cart like total price and final price after discount and delivery charges
    function getCartSummary(summaryDetail) {
        let deliveryCharge = cart.length <= 0 ? 0 : 24;
        let subtotal = 0;
        let discount = 0;
        summaryDetail.map(c => {
            subtotal = subtotal + c.totalPrice;
            discount = discount + c.totalDiscount
        })
        let total = (subtotal - discount) + deliveryCharge
        setCartSummary(() => ({
            subtotal: subtotal,
            discount: discount,
            deliveryCharge,
            total: total
        }))
    }

    return (
        <CartContext.Provider value={{ cart, cartQuantity, setRefreshCart, removeProduct, addProduct, cartSummary, loading }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);