const userModel = require("../models/user-model");

module.exports.uploadProfileImage = async (req, res) => {
    let user = await userModel.findOneAndUpdate(
        { email: req.user.email },
        { $set: { image: req.file.filename } },
        { new: true }
    );
    res.json({ success: true, message: "Image Uploaded" });
}

module.exports.addAddress = async (req, res) => {
    const { country, state, city, street, zip } = req.body;
    if (!country || !state || !city || !street || !zip) return res.json({ success: false, message: "All fields are required" });
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) return res.json({ success: false, message: "User not found" });
    user.Address.push({
        country,
        state,
        city,
        street,
        zip
    });
    await user.save();
    res.json({ success: true, message: "Address Added" });
}

module.exports.deleteAddress = async (req, res) => {
    const {addressId} = req.params;
    let user = await userModel.findOneAndUpdate(
        {email:req.user.email},
        {$pull : {address :{_id : addressId}}}
    );
    if(!user) return res.json({success:false, message:"User not found"});
    res.json({success:true, message:"Address removed"});
    
}