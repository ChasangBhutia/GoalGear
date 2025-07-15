const productModel = require('../models/product-model');
const userModel = require('../models/user-model');


module.exports.getCart = async (req, res) => {
    // to get all the details of the cart
    const user = await userModel.findOne({ email: req.user.email }).populate('cart.product'); // populate the cart.product so that the product id turns into actual product with values from product model
    user.cart.map((item,index)=>{
        if(item.product === null){
            user.cart.splice(index, 1);
        }
    })
    if (!user) return res.json({ success: false, message: "User not found" });
    res.json({ success: true, message: "Cart found", cart: user.cart });
}

module.exports.addToCart = async (req, res) => {
    
    const { productId } = req.params;
    const { quantity, size } = req.body;

    let product = await productModel.findById(productId);
    
    if (!product) return res.json({ success: false, message: "Product not found" });
    // totalPrice and discount for particular product as the quantity might be more than 2 accordingly the total price and discount might be different.
    let totalPrice = quantity * product.price;
    let totalDiscount = quantity * product.discount;

    let productToAdd = {
        product: product._id,
        quantity,
        size,
        totalPrice,
        totalDiscount
    }
    if (!product) return res.json({ success: false, message: "Item not found!" });
    let user = await userModel.findOne({ email: req.user.email }).populate('cart.product'); // populate the productId for actual values
    if (!user) return res.json({ success: false, message: "Please Login first" });


    // for same product with same size in the cart instead of adding the whole product(duplicate), increase the quantity.
    for (let item of user.cart) {
        const isSame = item.product._id.toString() === productId && item.size === size
        if (isSame) {
            const { price, discount } = item.product;
            item.quantity += Number(quantity);
            item.totalPrice = item.quantity * price;
            item.totalDiscount = item.quantity * discount;
            await user.save();
            return res.json({ success: true, message: "Product added to cart" });
        }
    }

    user.cart.push(productToAdd);
    await user.save();
    res.json({ success: true, message: "Product added to Cart" });
}

module.exports.removeFromCart = async (req, res) => {
    const { productId } = req.params;
    // find the user and remove the id from the cart
    await userModel.findOneAndUpdate(
        { email: req.user.email },
        { $pull: { cart: { _id: productId } } },
        { new: true }
    )
    res.json({ success: true, message: "Product removed from cart" });
}