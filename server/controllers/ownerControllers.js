const userModel = require("../models/user-model")

module.exports.getAllUser = async (req, res)=>{
    let users = await userModel.find();
    if(!users) return res.json({success:false, message:"Users not found"});
    return res.status(200).json({success:true, message:"Users found", users});
}