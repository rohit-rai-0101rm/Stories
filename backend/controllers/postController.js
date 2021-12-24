import { catchAsyncErr } from "../middleware/catchAsyncErrors.js"
import PostMessage from "../models/postModel.js";
import { getAllPosts } from "../services/postServices.js";
export const getPosts=catchAsyncErr(async(req,res,next)=>{
    const allPostMessages=await getAllPosts();
    const name="g"
    res.status(200).json({
        success:true,
        name,
        allPostMessages
        
    })

    
})

export const  createPost=(req,res)=>{
    res.status(200).json({mesaage:"first route"})

}