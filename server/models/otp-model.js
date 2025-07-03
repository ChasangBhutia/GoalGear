const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
        otp:{
            type:String,
            required: true
        },
        expiresAt:{
            type:Date,
            required:true
        },
        verified:{
            type: Boolean,
            default: false
        }
});

otpSchema.index({expiresAt:1}, {expireAfterSeconds:0});

module.exports = mongoose.model('otp', otpSchema);