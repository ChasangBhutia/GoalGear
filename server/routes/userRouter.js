const express = require('express');
const { getUser } = require('../controllers/authControllers');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartControllers');
const {isLoggedIn, isUser} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.get('/get-user',isLoggedIn, isUser, getUser);

// Cart APIs
router.get('/cart', isLoggedIn, isUser, getCart);
router.post('/cart/:productId',isLoggedIn, isUser, addToCart)
router.delete('/cart/:productId',isLoggedIn, isUser, removeFromCart)


module.exports = router;