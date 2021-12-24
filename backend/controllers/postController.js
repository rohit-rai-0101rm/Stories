import { catchAsyncErr } from "../middleware/catchAsyncErrors.js"
import Errorhandler from "../utils/ErrorHandler.js";
import PostMessage from "../models/postModel.js";
export const getPosts=catchAsyncErr(async(req,res,next)=>{
    const allPostMessages=await PostMessage.find();
    if(!allPostMessages){
        return next(new Errorhandler(("Product not found", 404)))
    }
    res.status(200).json({
        success:true,
        
        allPostMessages
        
    })

    
})

export const addPost=catchAsyncErr(async(req,res,next)=>{
    const Post=await PostMessage.create(req.body);
    
    res.status(200).json({
        success:true,
        Post
        
    })

    
})