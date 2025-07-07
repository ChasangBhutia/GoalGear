const razorpayInstance = require('../config/razorpay');
const crypto = require('crypto');

module.exports.createOrder = async (req, res) => {
    const { amount } = req.body;
    const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: "order_rcptid_11"
    }

    try {
        let order = await razorpayInstance.orders.create(options);
        res.json(order);
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Order failed" });
    }

}

module.exports.verifyOrder = (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if(expectedSignature === razorpay_signature){
        return res.json({success:true, message:"Payment Successfull"});
    }else{
        return res.json({success:false, message:"Invalid Signature"});
    }
}