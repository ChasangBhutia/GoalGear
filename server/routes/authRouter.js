const express = require('express');
const router = express.Router();
const { registerUser, login, logout } = require('../controllers/authControllers');
const upload = require('../config/multer');

router.post('/register',upload.none(), registerUser);
router.post('/login',upload.none(), login);
router.get('/logout', logout);

module.exports = router;