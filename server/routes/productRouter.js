const express = require('express');
const upload = require('../config/multer');
const { getAllProducts, getProduct, createProduct, deleteProduct } = require('../controllers/productControllers');
const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/',isLoggedIn, getAllProducts);
router.get('/:productId', isLoggedIn, getProduct);
router.post('/', isLoggedIn, isAdmin, upload.single('image'), createProduct);
router.delete('/:productId', isLoggedIn, isAdmin, deleteProduct);


module.exports = router;