const express = require('express');
const upload = require('../config/multer');
const { getAllProducts, getProduct, createProduct, deleteProduct } = require('../controllers/productControllers');
// const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', getAllProducts);
router.get('/:productId', getProduct);
router.post('/', upload.single('image'), createProduct);
router.delete('/:productId', deleteProduct);


module.exports = router;