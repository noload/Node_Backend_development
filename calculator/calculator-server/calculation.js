const express = require("express");
const app=express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.get('/sum',function sum(req,res) {
        const a = req.query.a
        const b = req.query.b
        const result= Number.parseInt(a) + Number.parseInt(b)
    res.json({result})

})



app.post('/add',function (req,res) {
        const a = req.body.a;
        const b = req.body.b;

        const result= Number.parseInt(a) + Number.parseInt(b)
        res.json({result})
})

app.listen(3000,()=>{
    console.log("listening on port");
})
