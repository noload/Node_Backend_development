const z = require('zod');
const express = require('express');
const app=express();

const schema = z.array(z.number());
app.use(express.json());

/**
 * user={
 * username:"vaibhav@gmail.com",
 * password:"287783dghd",
 * coursePursed:[2,3,4,5]
 * }
 * 
 * writing schema for above obj
 * const schema = z.Object({
 * username:z.string().email(),
 * password:z.string().min(8),
 * coursePurchased:z.array(z.number())
 * })
 */

app.post('/courses',(req,res)=>{
    const ids = req.body.courseIds

    const resp= schema.safeParse(ids);
    res.json({
        resp
    })

})

app.listen(3000);