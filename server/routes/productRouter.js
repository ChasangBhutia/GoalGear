const express = require('express');
const upload = require('../config/multer');
const { getAllProducts, createProduct, deleteProduct } = require('../controllers/productControllers');
const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.get('/all-products', getAllProducts)

router.post('/create-product', isLoggedIn, isAdmin, upload.single('image'), createProduct);
router.get('/delete-product/:productId', isLoggedIn, isAdmin, deleteProduct);


module.exports = router;