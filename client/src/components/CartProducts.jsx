import DeleteIcon from '@mui/icons-material/Delete';

const CartProducts = (props) => {


    return (
        <div className='text-center pt-5'>
            <h1 className='text-[6vw] mb-3 font-semibold'>Cart</h1>
            {props.cartQuantity > 0 ? 
            <table className='w-auto m-auto'>
                <thead>
                    <tr className='px-10'>
                        <th className='text-[3vw]'><h3>S.No</h3></th>
                        <th className='text-[3vw]'><h3>Product</h3></th>
                        <th className='text-[3vw]'><h3>Name</h3></th>
                        <th className='text-[3vw]'><h3>Price</h3></th>
                        <th className='text-[3vw]'><h3>Size</h3></th>
                        <th className='text-[3vw]'><h3>Quantity</h3></th>
                        <th className='text-[3vw]'><h3>Remove</h3></th>
                    </tr>
                </thead>
                {props.cart.map((item, index) => {
                    return (
                        <tbody key={index} >
                            <tr>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><p>{index + 1}</p></td>
                                <td className='py-3'><img className='h-16' src={`http://localhost:3000/uploads/${item.product.image}`} alt={item.product.name} /></td>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><h3>{item.product.name}</h3></td>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><p>₹{item.product.price}</p></td>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><p>{item.size}</p></td>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><p>{item.quantity}</p></td>
                                <td className='px-[4vw] py-3 text-[2.5vw]'><DeleteIcon onClick={() => { }} /></td>
                            </tr>
                        </tbody>
                    )
                })}

            </table> 
            : <h2 className='text-[4vw] mt-3'>No items</h2>}
        </div>
    )
}

export default CartProducts