const jwt = require('jsonwebtoken');

module.exports.generateToken = (email, role)=>{
    return jwt.sign({email,role}, process.env.JWT_KEY);
}

;