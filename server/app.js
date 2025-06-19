const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const ConnectDB = require('./config/db');
const ownerRouter = require('./routes/ownerRouter')
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

ConnectDB();

app.use('/owner', ownerRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(3000,()=>{
    console.log("Server is live");
})