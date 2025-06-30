import CartProducts from "../components/CartProducts"
import CartSummary from "../components/CartSummary";
import MenuBar from "../components/MenuBar";
import {useCart} from '../context/CartContext'

const Cart = () => {
    const{cart,cartQuantity, setRefreshCart, removeProduct, cartSummary} = useCart();

    
    return(
        <>
            <MenuBar/>
            <CartProducts cart={cart} cartQuantity={cartQuantity} setRefreshCart={setRefreshCart} removeFromCart={removeProduct}/>
            <hr className="w-80 m-auto border-2 rounded-lg border-zinc-400 my-10"/>
            <CartSummary summary={cartSummary}/>
        </>
    )
}

export default Cart