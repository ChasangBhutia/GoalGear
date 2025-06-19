const jwt = require('jsonwebtoken');

const generateToken = (email, role)=>{
    return jwt.sign({email,role}, process.env.JWT_KEY);
}

module.exports.generateToken = generateToken;