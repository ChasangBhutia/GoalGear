const express = require('express');
const { registerUser, login, logout } = require('../controllers/authControllers');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Its working");
})

router.post('/register', registerUser);
router.post('/login', login);
router.get('/logout', logout);


module.exports = router;