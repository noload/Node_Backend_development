const express = require("express");

const app=express()

function isEligible(age) {
    if (age>18) {
        return true
    } else {
        return false        
    }
}

function isEligibleMiddleware(req,res,next) {
    age=req.query.age
    if (age > 18) {
        next()
    } else {
        res.json({
            msg:"You are not eligible"
        })
    }
}

//without middleware

app.get('/ride1',function (req,res) {

    if (isEligible(req.query.age)) {
        res.status(200).json({
            msg:"You have successfully riden the ride 1"
        })
    }else{
        res.status(404).json({
            msg:"You are not eligible for ride"
        })
    }
    
})


//using middleware

app.get('/ride2',isEligibleMiddleware,function (req,res) {
        res.status(200).json({
            msg:"You have successfully riden the ride 1"
        })
})

app.listen(3000,()=>{
    console.log("listening of port");
})