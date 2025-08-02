const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
    },
    price: {
        type: Number,
        required:true,
        min:[0, 'Price must be a positive number.']
    },
    discount: {
        type: Number,
        default: 0,
        min : [0, 'Discount cannot be negative']
    },
    image: String,
    image_id:String,
    imagePublicId:String,
    category: {
        type: String,
        enum: ['jerseys', 'boots', 'gloves', 'bags', 'socks', 'guards']
    }

}, { timestamps: true });


module.exports = mongoose.model('product', productSchema);