const express = require('express');
const router = express.Router();
const { registerUser, login, logout, sendOtp, verifyOtp } = require('../controllers/authControllers');

router.post('/register', registerUser);
router.post('/login', login);
router.get('/logout', logout);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);

module.exports = router;