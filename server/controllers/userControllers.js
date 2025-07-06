const userModel = require("../models/user-model");

module.exports.uploadProfileImage = async (req, res) => {
    // find the user and update the image value in the database
    await userModel.findOneAndUpdate(
        { email: req.user.email },
        { $set: { image: req.file.filename } },
        { new: true }
    );
    res.json({ success: true, message: "Image Uploaded" });
}

module.exports.addAddress = async (req, res) => {
    // create new address
    const { country, state, city, street, zip, type } = req.body;
    if (!country || !state || !city || !street || !zip || !type) return res.json({ success: false, message: "All fields are required" });
    let user = await userModel.findOne({ email: req.user.email });
    if (!user) return res.json({ success: false, message: "User not found" });
    user.address.push({
        country,
        state,
        city,
        street,
        zip,
        type
    });
    await user.save();
    res.json({ success: true, message: "Address Added" });
}

module.exports.deleteAddress = async (req, res) => {
    // remove address
    const {addressId} = req.params;
    let user = await userModel.findOneAndUpdate(
        {email:req.user.email},
        {$pull : {address :{_id : addressId}}}
    );
    if(!user) return res.json({success:false, message:"User not found"});
    res.json({success:true, message:"Address removed"});
    
}