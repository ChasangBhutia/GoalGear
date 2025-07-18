const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.use(cors({
    origin:'https://goal-gear.vercel.app',
    credentials:true,
    methods: ['GET','POST','DELETE','PUT']
}));
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(cookieParser());

const ConnectDB = require('./config/db');
const ownerRouter = require('./routes/ownerRouter')
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter');
const authRouter = require('./routes/authRouter');
const paymentRouter = require('./routes/paymentRouter')


ConnectDB();

app.use('/api/auth', authRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/payment', paymentRouter)

app.listen(PORT || 3000,()=>{
    console.log("Server is live");
})