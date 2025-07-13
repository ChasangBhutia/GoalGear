const express = require('express');
const { uploadProfileImage,  addAddress, deleteAddress } = require('../controllers/userControllers');
const { getUser } = require('../controllers/authControllers');
const { addToCart, removeFromCart, getCart } = require('../controllers/cartControllers');
const {isLoggedIn, isUser} = require('../middleware/isLoggedIn');
const router = express.Router();
const upload = require('../config/multer');

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.get('/get-user',isLoggedIn, getUser);
router.put('/upload-profile-image',upload.single('image'), isLoggedIn, isUser, uploadProfileImage)
router.post('/add-address', isLoggedIn, isUser, addAddress);
router.delete('/remove-address/:addressId', isLoggedIn, isUser, deleteAddress);

// Cart APIs
router.get('/cart', isLoggedIn, isUser, getCart);
router.post('/cart/:productId',isLoggedIn, isUser, addToCart)
router.delete('/cart/:productId',isLoggedIn, isUser, removeFromCart)


module.exports = router;