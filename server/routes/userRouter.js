const express = require('express');
const { registerUser, login, logout, getUser } = require('../controllers/authControllers');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartControllers');
const {isLoggedIn, isUser} = require('../middleware/isLoggedIn');
const upload = require('../config/multer');
const userModel = require('../models/user-model');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.post('/register',upload.none(), registerUser);
router.post('/login',upload.none(), login);
router.get('/logout', logout);

router.get('/get-user',isLoggedIn, isUser, getUser);

router.get('/get-cart', isLoggedIn, isUser, getCart);
router.post('/add-to-cart/:productId',isLoggedIn, isUser, addToCart)
router.delete('/remove-from-cart/:cartId',isLoggedIn, isUser, removeFromCart)


module.exports = router;