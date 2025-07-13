import DeleteIcon from '@mui/icons-material/Delete';

const CartProducts = ({ cart, cartQuantity, removeFromCart }) => {


    return (
        <div className='text-center pt-5 lg:px-[10vw]'>
            <h1 className='text-[6vw] mb-3 sm:text-[3vw]'>Cart</h1>
            {cartQuantity > 0 ?
                <table className='w-auto m-auto'>
                    <thead>
                        <tr className='px-10 text-[3vw] md:text-[20px]'>
                            <th><h3>S.No</h3></th>
                            <th><h3>Product</h3></th>
                            <th><h3>Name</h3></th>
                            <th><h3>Price</h3></th>
                            <th><h3>Size</h3></th>
                            <th><h3>Quantity</h3></th>
                            <th><h3>Remove</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            return (
                                <tr key={index} className='text-[2.5vw] md:text-[20px]'>
                                    <td className='px-[4vw] py-3'><p>{index + 1}</p></td>
                                    <td className='py-3'><img className='h-16 md:h-20' src={`http://localhost:3000/uploads/${item.product.image}`} alt={item.product.name} /></td>
                                    <td className='px-[4vw] py-3'><h3>{item.product.name}</h3></td>
                                    <td className='px-[4vw] py-3'><p>₹{item.product.price}</p></td>
                                    <td className='px-[4vw] py-3'><p>{item.size}</p></td>
                                    <td className='px-[4vw] py-3'><p>{item.quantity}</p></td>
                                    <td className='px-[4vw] py-3'><DeleteIcon onClick={() => { removeFromCart(item._id) }} /></td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                : <h2 className='text-[4vw] mt-3'>No items</h2>}
        </div>
    )
}

export default CartProducts