const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    image: String,
    cart: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product'
            },
            quantity: {
                type: Number,
                default: 1,
            },
            size: String,
        }
    ],
    orders: {
        type: Array,
        default: []
    }
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema);