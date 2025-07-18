const jwt = require('jsonwebtoken');

const isLoggedIn = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after 'Bearer '

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.user = decoded; // Set user info in request object
        next();
    } catch (err) {
        console.log("JWT Error:", err.message);
        return res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ success: false, message: "You are not allowed." });
    }
};

const isUser = (req, res, next) => {
    if (req.user.role === "user") {
        next();
    } else {
        res.status(403).json({ success: false, message: "You are not allowed." });
    }
};

module.exports = { isLoggedIn, isAdmin, isUser };
