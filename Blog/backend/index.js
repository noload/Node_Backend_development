const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();

let blogList =[
    {
        name:"vaibhav kamble",
        age:25,
        role:"Developer"
    }
];
let id = 1010101

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json());

app.get('/blogs',(req,res)=>{
    res.status(200).json({
        data:blogList,
        success:true
    })
})

app.post('/blogs',(req,res)=>{
    let newObj = req.body
    newObj['id']=id++
    blogList.push(newObj);
    res.json({
        msg:"Blog got created successfully",
        BlogId:newObj.id
    })
})

app.get('/blogs/:blogId',(req,res)=>{
    const blogId = req.params.blogId
    blogList.forEach((blog)=>{
        if (blog.id == blogId) {
            res.status(200).json({
                user:blog,
                success:true
            })            
        }
    })
    res.status(404).json({
        msg:"Blog not found",
        success:false
    })
})

function isBlogIdExist(blogId) {
    let exist=false
    blogList.forEach((blog)=>{
        if (blog.id == blogId) {
             exist=true;
        }
    })
    return exist;
}


app.delete('/blogs/:blogId',(req,res)=>{
    const blogId = req.params.blogId

    let exist =isBlogIdExist(blogId);

    let newBlogList =blogList.filter((blog)=>{
        if (blog.id != blogId) {
            return blog            
        }
    })
    blogList = newBlogList
    if (exist) {
        res.status(200).json({
            msg:"Blog deleted successfully",
            success:true
        })
    }else{
        res.status(404).json({
            msg:"Blog not present with blogId "+blogId,
            success:false
        })
    }
})

app.listen(PORT,()=>{
    console.log("Listening on port"+PORT);
})