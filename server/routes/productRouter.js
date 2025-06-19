const express = require('express');
const upload = require('../config/multer');
const { createProduct } = require('../controllers/productControllers');
const {isLoggedIn, isAdmin} = require('../middleware/isLoggedIn');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.post('/create-product',upload.single('image'), isLoggedIn, isAdmin, createProduct);

module.exports = router;