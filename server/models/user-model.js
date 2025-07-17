const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minlength: [3, "Fullname must be atleast 3 characters long"],
        required: true,
        maxlength: [30, "Fullname must have less than 30 characters"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be atleast 8 characters"],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
            'Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.'
        ]
    },
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
            type: {
                type: String,
                enum: ['Main', 'Secondary', 'Home', 'Work', 'Other']
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