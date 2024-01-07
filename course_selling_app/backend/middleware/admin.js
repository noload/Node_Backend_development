
const {Admin} = require('../db');

async function adminMiddleware(req,res,next) {
    const username = req.headers.username
    const password = req.headers.password
    const resp =await Admin.findOne({
        username,
        password
    })
    if (resp) {
        next();
    } else {
        res.status(403).json({
            msg:"Admin doesnt exist"
        })
    }
}

module.exports =adminMiddleware