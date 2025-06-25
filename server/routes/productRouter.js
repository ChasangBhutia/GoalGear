const express = require('express');
const upload = require('../config/multer');
const { getAllProducts, getProduct, createProduct, deleteProduct } = require('../controllers/productControllers');
const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.get('/all-products',isLoggedIn, getAllProducts);
router.get('/get-product/:productId', isLoggedIn, getProduct);

router.post('/create-product', isLoggedIn, isAdmin, upload.single('image'), createProduct);
router.delete('/delete-product/:productId', isLoggedIn, isAdmin, deleteProduct);


module.exports = router;