const fs = require('fs');

const productModel = require("../models/product-model");
const ownerModel = require("../models/owner-model");
const path = require('path');

module.exports.getAllProducts = async(req, res)=>{
  let products = await productModel.find();
  if(!products) return res.json({success:false, message:"Something went wrong"});
  if(products.length <=0 ) return res.json({success:true, message:"No Products Available"});
  res.json({success:true, message:"All Products found", products});
}

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
        image: req.file.filename,
        price,
        category
    });
    owner.products.push(product._id);
    await owner.save();
    res.json({ success: true, message: "Product Created" });
}

module.exports.deleteProduct = async (req, res) => {
    const { productId } = req.params;
    var owner = await ownerModel.findOne({email:req.user.email}); 
    const product = await productModel.findById(productId);
    
    const imagePath = path.join('uploads',product.image);
    owner.products = owner.products.filter(p=>p.toString()!==productId);
    await productModel.deleteOne({ _id: productId });
    await owner.save();
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
      } else {
        console.log('Image deleted successfully:', product.image);
      }
    });
    res.json({success:true, message:"Product Deleted."});
}

