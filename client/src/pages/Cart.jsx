import CartProducts from "../components/CartProducts"
import CartSummary from "../components/CartSummary";
import {useCart} from '../context/CartContext'

const Cart = () => {
    const{cart, cartQuantity, setRefreshCart, removeProduct, cartSummary} = useCart();

    
    return(
        <>
            <CartProducts cart={cart} cartQuantity={cartQuantity} setRefreshCart={setRefreshCart} removeFromCart={removeProduct}/>
            <hr className="w-[40vw] m-auto border-2 rounded-lg border-zinc-400 my-[4vw]"/>
            <CartSummary summary={cartSummary} cartQuantity={cartQuantity}/>
        </>
    )
}

export default Cart