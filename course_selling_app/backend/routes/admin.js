const {Router} = require('express');
const router = Router();
const {Admin} = require('../db');
const {adminMiddleware} =require('../middleware/admin')
// router.use();

router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const data =await Admin.create({
        username,
        password
    })
    console.log(data);
if (data) {
    res.json({
        msg:"Admin created successfully"
    })
}else{
    res.json({
        msg:"Admin not created successfully"
    })
}
  
});



router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description=req.body.description
    const imageLink = req.body.imageLink
    const price =  req.body.price
    const newCourse= await Course.create({title,
    description,
imageLink,
price})
    
res.json({
    msg:"Course created successfully",
    courseId:newCourse._id
})

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const resp = await Course.find({});
    res.status(200).json({
        Courses:resp
    })
    
});

module.exports = router;