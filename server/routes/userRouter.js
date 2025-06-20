const express = require('express');
const { registerUser, login, logout } = require('../controllers/authControllers');
const { addToCart, removeFromCart } = require('../controllers/cartControllers');
const {isLoggedIn, isUser} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.post('/register', registerUser);
router.post('/login', login);
router.get('/logout', logout);
router.post('/add-to-cart/:productId',isLoggedIn, isUser, addToCart)
router.delete('/remove-from-cart/:cartId',isLoggedIn, isUser, removeFromCart)


module.exports = router;