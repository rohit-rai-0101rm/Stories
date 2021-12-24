import { catchAsyncErr } from "../middleware/catchAsyncErrors.js"
import { Error } from "../middleware/error.js";
import PostMessage from "../models/postModel.js"
export const getAllPosts=catchAsyncErr(async(req,res,next)=>{
    const postMessages=await PostMessage.find();
    

})