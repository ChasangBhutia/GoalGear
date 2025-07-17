const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlenggth: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
            'Password must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 special character.'
        ]
    },
    image: {
        type: String,
        default: 'defaultUserProfilePic.jpg'
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ],

}, { timestamps: true });


module.exports = mongoose.model('owner', ownerSchema);
