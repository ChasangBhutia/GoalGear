const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    image: {
        type: String,
        default: 'defaultUserProfilePic.jpg'
    },
    mobile: {
        type: String,
        default: '0000000000'
    },
    address: [
        {
            type:{
                type:String,
            },
            country: String,
            state: String,
            city: String,
            street: String,
            zip: String
        }
    ],
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
            totalPrice: Number,
            totalDiscount: Number,

        }
    ],
    orders: {
        type: Array,
        default: []
    }
}, { timestamps: true });


module.exports = mongoose.model('user', userSchema);