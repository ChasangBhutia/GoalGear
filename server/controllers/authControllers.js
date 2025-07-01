const bcrypt = require('bcrypt');

const ownerModel= require('../models/owner-model');
const userModel = require('../models/user-model');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    
    if (!fullname || !email || !password) {
        return res.json({ success: false, message: "All fields are required" })
    }
    let user = await userModel.findOne({email});
    if(user) return res.json({success:false, message:"Account already exist! Please Login", accountExist:true});
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await userModel.create({
                fullname,
                email,
                password: hash
            })
            let token = generateToken(user.email, "user");
            res.cookie("token", token);
            res.json({success:true, message:"Account created!"});
        })
    })

}

module.exports.login = async (req, res) => {    
    const {email, password} = req.body;
    if(!email || !password){
        return res.json({success:false, message:"All fields are required"});
    }
    var user = await userModel.findOne({email});
    var role = "user";
    if(!user){
        user = await ownerModel.findOne({email});
        role = "admin";
    }
    
    if(!user){
        return res.json({success:false, message:"User do not exist.", accountExist:false});
    }
    bcrypt.compare(password, user.password, (err, result)=>{
        if(!result){
            return res.json({success:false, message:"Password Wrong!"})
        }else{
            let token = generateToken(user.email, role);
            res.cookie("token", token);
            return res.json({success:true, message:"Logged In"});
        }
    })
}

module.exports.logout = (req, res) => {
    res.clearCookie('token');
    res.json({success:true,message:"Logged Out"});
}

module.exports.uploadProfileImage = async (req,res)=>{
    let user = await userModel.findOneAndUpdate(
        {email:req.user.email},
        {$set: {image : req.file.filename}},
        {new : true}
    );
    res.json({success:true, message:"Image Uploaded"});
}

module.exports.getUser = async(req,res)=>{
    let user = await userModel.findOne({email:req.user.email});
    if(user){
        return res.json({success:true, message:"User found", user});
    }else{
        user = await ownerModel.findOne({email:req.user.email});
        if(user) return res.json({success:true, message:"User found", user});
        else return res.json({success:false,message:"User not found"});
    }
}