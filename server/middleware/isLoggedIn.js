const jwt = require('jsonwebtoken');
const isLoggedIn = async (req, res, next) => {
    var token = req.cookies.token;
    try {
        let decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;
        next();
    } catch (err) {
        console.log(err.message);
        return res.status(401).json({success:false, message:"Invalid or expired Token"});
    }
}

const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        res.json({ success: false, message: "You are not allowed." });
    }
}

const isUser = (req, res, next) => {
    if (req.user.role === "user") {
        next();
    } else {
        res.json({ success: false, message: "You are not allowed." });
    }
}

module.exports = { isLoggedIn, isAdmin, isUser };