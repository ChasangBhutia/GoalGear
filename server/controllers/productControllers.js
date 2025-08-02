const fs = require('fs');

const productModel = require("../models/product-model");
const ownerModel = require("../models/owner-model");
const cloudinary = require('../config/cloudinary');


module.exports.getAllProducts = async(req, res)=>{
  let products = await productModel.find();
  if(!products) return res.json({success:false, message:"Something went wrong"});
  if(products.length <=0 ) return res.json({success:true, message:"No Products Available"});
  res.json({success:true, message:"All Products found", products});
}

module.exports.getProduct = async(req, res)=>{
  const {productId} = req.params;
  let product = await productModel.findOne({_id:productId});
  if(!product) return res.json({success:false, message:"Product not found"});
  res.json({success:true, message:"Product Found", product});
}

// only for admin to create/add new product in the store
module.exports.createProduct = async (req, res) => {
    const { name, price, discount, category } = req.body;
    if (!name || !price || !discount || !category) {
        return res.json({ success: false, message: "All fields are required." })
    }
    let owner = await ownerModel.findOne({ email: req.user.email });
    
    let product = await productModel.create({
        name,
        price,
        discount,
        image: req.file.path,
        image_id: req.file.filename,
        category
    });
    // storing all the products as ID show that all products record are managable by owner
    owner.products.push(product._id);
    await owner.save();
    res.json({ success: true, message: "Product Created" });
}

module.exports.deleteProduct = async (req, res) => {
    const { productId } = req.params;
    let owner = await ownerModel.findOne({email:req.user.email}); 
    const product = await productModel.findById(productId);
    owner.products = owner.products.filter(p=>p.toString()!==productId);

    await cloudinary.uploader.destroy(product.image_id);

    // deleting the product from prooduct model
    await productModel.deleteOne({ _id: productId });
    await owner.save();
  
    res.json({success:true, message:"Product Deleted."});
}

