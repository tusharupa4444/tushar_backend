const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/user_management_system");

const express = require("express");
const app = express();


const userRoute= require('./routes/userRoute');
const adminRoute= require('./routes/adminRoute');

app.use('/',userRoute);
app.use('/',adminRoute);
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());

app.listen(3000,function(){
    console.log("Server is running");
})