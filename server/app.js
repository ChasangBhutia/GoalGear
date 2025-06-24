const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
    methods: ['GET','POST','DELETE','PUT']
}));

const ConnectDB = require('./config/db');
const ownerRouter = require('./routes/ownerRouter')
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter');


ConnectDB();

app.use('/owner', ownerRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(3000,()=>{
    console.log("Server is live");
})