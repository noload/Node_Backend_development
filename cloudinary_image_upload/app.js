const express = require('express')
const  bodyParser = require('body-parser');
const { connectDB } = require('./config/database');
require('dotenv').config()

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

connectDB()

app.listen(3000,()=>{
    console.log("Server started on port 3000");
})
