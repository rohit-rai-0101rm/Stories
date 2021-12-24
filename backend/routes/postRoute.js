import express from "express"
import { addPost, getPosts } from "../controllers/postController.js"
const router=express.Router()
router.route("/posts").get(getPosts).post(addPost)
export default router
