import {useCart} from '../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Cart = () => {
    const{cart, setRefreshCart} = useCart();

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

  return (
    <div className='text-center pt-10'>
        <h1 className='text-3xl mb-5 underline' style={{fontFamily:'"Poppins",sans-serif'}}>Cart</h1>
        <table className='w-auto m-auto'>
            <thead>
                <tr className='px-10'>
                <th className='px-10'><h3>S.No</h3></th>
                <th className='px-10'><h3>Product</h3></th>
                <th className='px-10'><h3>Name</h3></th>
                <th className='px-10'><h3>Price</h3></th>
                <th className='px-10'><h3>Size</h3></th>
                <th className='px-10'><h3>Quantity</h3></th>
                <th className='px-10'><h3>Remove</h3></th>  
            </tr>
            </thead>
            {cart.map((item, index)=>{
                return(
                    <tbody key={index} >
                        <tr>
                        <td className='px-10 py-3'><p>{index+1}</p></td>
                        <td className='px-10 py-3'><img className='h-16' src={`http://localhost:3000/uploads/${item.product.image}`} alt={item.product.name} /></td>
                        <td className='px-10 py-3'><h3>{item.product.name}</h3></td>
                        <td className='px-10 py-3'><p>₹{item.product.price}</p></td>
                        <td className='px-10 py-3'><p>{item.size}</p></td>
                        <td className='px-10 py-3'><p>{item.quantity}</p></td>
                        <td className='px-10 py-3'><DeleteIcon onClick={()=>{removeFromCart(item._id)}}/></td>
                    </tr>
                    </tbody>
                )
            })}

        </table>
    </div>
  )
}

export default Cart