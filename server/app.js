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
const authRouter = require('./routes/authRouter');


ConnectDB();

app.use('/api/auth', authRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.listen(3000,()=>{
    console.log("Server is live");
})