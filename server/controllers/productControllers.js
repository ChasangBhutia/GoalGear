const productModel = require("../models/product-model");
const ownerModel = require("../models/owner-model");

module.exports.createProduct = async (req,res)=>{
    const {name, price, discount, category} = req.body;
    if(!name || !price || !discount || !category){
        return res.json({success:false, message:"All fields are required."})
    }
    let owner = await ownerModel.findOne({email:req.user.email});
    let product = await productModel.create({
        name,
        price,
        discount,
        image:req.file.filename,
        price,
        category
    });
    owner.products.push(product._id);
    await owner.save();
    res.json({success:true, message:"Product Created"});
}