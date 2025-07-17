const express = require('express');
const { uploadProfileImage,  addAddress, deleteAddress } = require('../controllers/userControllers');
const { getUser } = require('../controllers/authControllers');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartControllers');
// const {isLoggedIn, isUser} = require('../middleware/isLoggedIn');
const router = express.Router();
const upload = require('../config/multer');

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.get('/profile', getUser);
router.put('/profile/image',upload.single('image'), uploadProfileImage)
router.post('/profile/address', addAddress);
router.delete('/profile/address/:addressId', deleteAddress);

// Cart APIs
router.get('/cart', getCart);
router.post('/cart/:productId', addToCart)
router.delete('/cart/:productId', removeFromCart)


module.exports = router;