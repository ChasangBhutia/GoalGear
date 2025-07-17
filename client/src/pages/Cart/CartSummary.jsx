import React, { useState } from 'react'
import axios from 'axios';
import { createOrder } from '../../services/CartServices';
const CartSummary = ({ summary }) => {

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const loadRazorpay = (order) => {
        const options = {
            key: "rzp_test_5lsSZmSPLJO4Qs",
            amount: order.amount,
            currency: order.currency,
            order_id: order.orderId,
            name: "GoalGear",
            description: "Test Payment",
            handler: async function (response) {
                const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
                const verifyRes = await axios.post("http://localhost:3000/api/payment/verify", {
                    razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature,
                });

                if (verifyRes.data.success) {
                    setPaymentSuccess(true);
                } else {
                    setPaymentSuccess(false);
                }
            },
            prefill: {
                name: "Test User",
                email: "test@example.com",
                contact: "9339197277",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };


    const checkoutOrder = async () => {
        try {
            let response = await createOrder(summary.total);

            const isScriptLoaded = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
            if (!isScriptLoaded) {
                alert("Failed to load Razorpay SDK");
                return;
            }

            loadRazorpay(response.data);
            console.log(response);
        } catch (err) {
            console.log(err.message);
        }

    }

    return (
        <aside className='w-[60vw] m-5 lg:mx-30'>
            <h1 className='text-[4.5vw] mb-3 sm:text-[30px]'>Cart Summary</h1>
            <table className='text-left text-[3vw] sm:text-[20px]'>
                <tbody>
                    <tr>
                        <td className='w-70 h-[7vw] sm:h-10'><p>Subtotal </p></td>
                        <td className='text-right'><p>₹{summary.subtotal}</p></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='w-70 h-[7vw] sm:h-10'><p>Discount </p></td>
                        <td className='text-right'><p>₹{summary.discount}</p></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='w-70 h-[7vw] sm:h-10'><p>Delivery Charges</p></td>
                        <td className='text-right'><p>₹{summary.deliveryCharge}</p></td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td className='w-70 h-[7vw] sm:h-10'><p>Total </p></td>
                        <td className='text-right'><p>₹{summary.total}</p></td>
                    </tr>
                </tbody>
            </table>
            <button className='bg-zinc-900 text-white w-[60vw] h-[8vw] text-[3.5vw] sm:text-[20px] sm:w-83 sm:h-13' onClick={checkoutOrder}>Checkout</button>
        </aside>

    )
}

export default CartSummary