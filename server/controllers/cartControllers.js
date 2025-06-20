const productModel = require('../models/product-model');
const userModel = require('../models/user-model');


module.exports.addToCart = async (req, res) => {
    const {productId} = req.params;
    const {quantity, size} = req.body;
    let product = await productModel.findById(productId);
    let productToAdd = {
        product:product._id,
        quantity,
        size
    }
    if(!product) return res.json({success:false, message:"Item not found!"});
    let user = await userModel.findOne({email:req.user.email});
    if(!user) return res.json({success:false, message:"Please Login first"});
    user.cart.push(productToAdd);
    await user.save();
    res.json({success:true, message:"Product added to Cart"});
}

module.exports.removeFromCart = async (req, res)=>{
    const {cartId} = req.params;
    let user = await userModel.findOneAndUpdate(
        {email:req.user.email},
        {$pull: {cart: {_id:cartId}}},
        {new:true}
    )

    res.json({success:true, message:"Product removed from cart"});
}