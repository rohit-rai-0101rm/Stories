import PostMessage from "../models/postModel.js"
export const getPosts=(req,res)=>{
    res.send("this works")
}

export const  createPost=(req,res)=>{
    res.status(200).json({mesaage:"first route"})

}