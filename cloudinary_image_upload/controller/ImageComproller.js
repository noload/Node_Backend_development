const { uploadToCloudinary } = require("../helpers/cloudinary");
const ImageModel = require("../models/Image");


const  uploadImage = async(req,res)=>{
    try {

        if (!req.file) {
            return res.status(400).json({
                success:false,
                message:"file not found"
            })
        }

        const {public_id,url} = await uploadToCloudinary(req.file.path);

        const image = new ImageModel({
            publicId:public_id,
            url
        })

        await image.save()

        return res.status(200).json({
            success:true,
            message:"Image uploaded successfully",
            data:image
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}

module.exports = {uploadImage}