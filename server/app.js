const express = require('express');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

// https://goal-gear.vercel.app

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
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