const bcrypt = require('bcrypt');
const Otp = require('../models/otp-model');
const ownerModel = require('../models/owner-model');
const userModel = require('../models/user-model');
const { generateToken } = require('../utils/generateToken');
const { generateOtp } = require('../utils/generateOtp');
const sendOtpToEmail = require('../config/mailTransporter');

module.exports.registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) return res.status(400).json({ success: false, message: "All fields are required" })

    try {
        let user = await userModel.findOne({ email });
        if (user) return res.status(409).json({ success: false, message: "Account already exist! Please Login", accountExist: true });

        // OTP verification when try to register through email
        let optRecord = await Otp.findOne({ email });
        if (!optRecord) return res.status(404).json({ success: false, message: "OTP not Found" });
        if (!optRecord.verified) return res.status(401).json({ success: false, message: "OTP not verified" })

        //hashing password to store an hashed password in the database
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt);
        let newUser = await userModel.create({
            fullname,
            email,
            password: hash
        })
        let token = generateToken(newUser.email, "user");
        res.cookie("token", token);
        return res.status(201).json({ success: true, message: "Account created!" });
    } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: "Internal server error" });
}
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.json({ success: false, message: "All fields are required" });

    //find user in both user and owner model and give them the role accordingly
    var user = await userModel.findOne({ email });
    var role = "user";
    if (!user) {
        user = await ownerModel.findOne({ email });
        role = "admin";
    }
    if (!user) return res.json({ success: false, message: "User do not exist.", accountExist: false });

    //compare the hashed password with the user password
    bcrypt.compare(password, user.password, (err, result) => {
        if (!result) {
            return res.json({ success: false, message: "Password Wrong!" })
        } else {
            let token = generateToken(user.email, role);
            res.cookie("token", token);
            return res.json({ success: true, message: "Logged In" });
        }
    })
}

module.exports.logout = (req, res) => {
    // delete the cookie from the browser
    res.clearCookie('token');
    res.json({ success: true, message: "Logged Out" });
}

module.exports.getUser = async (req, res) => {
    // to see who is logged in to show the details like name, email, cart, orders, etc. in the client side.
    let user = await userModel.findOne({ email: req.user.email });
    if (user) {
        return res.json({ success: true, message: "User found", user });
    } else {
        user = await ownerModel.findOne({ email: req.user.email });
        if (user) return res.json({ success: true, message: "User found", user });
        else return res.json({ success: false, message: "User not found" });
    }
}

module.exports.sendOtp = async (req, res) => {
    const otp = generateOtp();
    const { email } = req.body;
    if (!email) return res.json({ success: false, message: "Please enter an email" });

    // create an expiring time for the otp which is of 10 mins
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 mins - current time + 10 mins
    try {
        // delete the user with the email provided so that all the previous otp are removed and fresh new otp is stored 
        await Otp.deleteMany({ email });
        //fresh otp stored
        await Otp.create({ email, otp, expiresAt });
        //send otp function from config directory to send otp via email to users
        sendOtpToEmail(email, otp);
        res.json({ success: true, message: "OTP sent successfully" });
    } catch (err) {
        console.log(err.message);
    }

}

module.exports.verifyOtp = async (req, res) => {
    const { otp, email } = req.body;

    //otp verification is done by checking the otp value in the otp model for particular user.
    let optRecord = await Otp.findOne({ email });
    if (!optRecord) return res.json({ success: false, message: "OTP not found" });
    if (optRecord.otp !== otp.toString()) return res.json({ success: false, message: "Incorrect Otp" });

    //checks weather otp is expired or not
    if (new Date() > optRecord.expiresAt) {
        await Otp.deleteMany({ email });
        return res.json({ success: false, message: "OTP expired" });
    }

    //verification set to true so that the user can now register. Default value is false.
    optRecord.verified = true;
    await optRecord.save();
    res.json({ success: true, message: "OTP verified" });
}