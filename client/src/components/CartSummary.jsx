import React from 'react'

const CartSummary = ({summary}) => {
  return (
    <div className='px-40 pb-10 mt-10'>
        <aside className='w-90'>
            <h1 className='font-semibold text-2xl mb-5'>Cart Summary</h1>
        <table className='text-left'>
            <tbody>
                <tr>
                    <td className='w-90 h-8'><p>Subtotal </p></td>
                    <td className='text-right'><p>₹{summary.subtotal}</p></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className='w-90 h-8'><p>Discount </p></td>
                    <td className='text-right'><p>₹{summary.discount}</p></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className='w-90 h-8'><p>Delivery Charges</p></td>
                    <td className='text-right'><p>₹{summary.deliveryCharge}</p></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td className='w-90 h-8'><p>Total </p></td>
                    <td className='text-right'><p>₹{summary.total}</p></td>
                </tr>
            </tbody>
        </table>
        <button className='bg-zinc-900 text-white w-full h-10'>Checkout</button>
        </aside>
    </div>
  )
}

export default CartSummary