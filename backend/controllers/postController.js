import express from 'express';
import mongoose from 'mongoose';
import { catchAsyncErr } from "../middleware/catchAsyncErrors.js"

import PostMessage from '../models/postModel.js';

const router = express.Router();

export const getPosts = catchAsyncErr( async (req, res) => { 
    
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    
})



export const createPost = catchAsyncErr( async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    
        await newPostMessage.save();

        res.status(201).json({
            success:true,
            newPostMessage
        })
  
})






export default router;