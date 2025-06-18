const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    image: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ],
   
}, { timestamps: true });


module.exports = mongoose.model('owner', ownerSchema);
