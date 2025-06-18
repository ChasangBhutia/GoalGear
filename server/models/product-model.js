const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price:Number,
    discount:{
        type:Number,
        default:0
    }, 
    image: String,
    
}, { timestamps: true });


module.exports = mongoose.model('product', productSchema);