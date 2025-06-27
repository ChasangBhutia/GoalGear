const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const {generateToken} = require('../utils/generateToken');
const ownerModel = require('../models/owner-model');
const { getUser,login } = require('../controllers/authControllers');

router.get('/', (req, res)=>{
    res.send("Its working");
})
router.post('/register-owner', (req,res)=>{
    const { fullname, email, password } = req.body;
    
    if (!fullname || !email || !password) {
        return res.json({ success: false, message: "All fields are required" })
    }
    const owner = ownerModel.findOne({email});
    if(owner) return res.json({success:false, message:"Account already exist! Please Login"});
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let owner = await ownerModel.create({
                fullname,
                email,
                password: hash
            })
            let token = generateToken(owner.email, "admin");
            res.cookie("token", token);
            res.json({success:true, message:"Admin created!"});
        })
    })
})
router.post('/login', login);

router.get('/get-user',isLoggedIn, isAdmin, getUser);

module.exports = router;