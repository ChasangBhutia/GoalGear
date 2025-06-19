const jwt = require('jsonwebtoken');
const isLoggedIn = async (req, res, next)=>{
    var token = req.cookies.token;
    try{
        jwt.verify(token, process.env.JWT_KEY, (err, decode)=>{
            if(!err){
                req.user = decode;
                next();
            }else{
                console.log(err.message);   
            }
        })
    }catch(err){
        console.log(err.message);
    }
}

const isAdmin = (req, res, next)=>{
    if(req.user.role === "admin"){
        next();
    }else{
        res.json({success:false, message:"You are not allowed."});
    }
}

const isUser = (req, res, next)=>{
    if(req.user.role === "user"){
        next();
    }else{
        res.json({success:false, message:"You are not allowed."});
    }
}

module.exports = {isLoggedIn, isAdmin, isUser};