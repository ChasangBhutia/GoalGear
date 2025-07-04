const mongoose = require('mongoose');

const ConnectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected!");
    }catch(err){
        console.log("MongoDB connection failed: ",err.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;