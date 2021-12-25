import express from "express";
import mongoose from "mongoose";
import { catchAsyncErr } from "../middleware/catchAsyncErrors.js";
import cloudinary from "cloudinary";
import PostMessage from "../models/postModel.js";

const router = express.Router();

export const getPosts = catchAsyncErr(async (req, res) => {
  const postMessages = await PostMessage.find();

  res.status(200).json(postMessages);
});

export const createPost = catchAsyncErr(async (req, res) => {
  const { title, message, selectedFile, creator, tags } = req.body;
  const myCloud = await cloudinary.v2.uploader.upload(selectedFile, {
    folder: "Stories",
    width: 650,
    crop: "scale",
  });

  const newPostMessage = await PostMessage.create({
    title,
    message,
    selectedFile: { selectedFile: myCloud.selectedFile },
    creator,
    tags,
  });
  res.status(201).json({
    success: true,
    newPostMessage,
  });
});

export default router;
