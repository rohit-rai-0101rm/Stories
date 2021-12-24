import mongoose from 'mongoose'
const postSchema=({

    title:{
       type: String,
       required:[true,"please enter title"],
       maxLength:[30,"Name cannot exceed 30 characters"],
       minLength:[3,"Name should have  more than 3 characters"],
       trim:true
    },
    message:{
        type: String,
        required:[true,"please enter your message"],
        trim:true

     },
     creator:{
        type: String,
        required:[true,"please enter name of the creator"],
        trim:true

     },
     tags:{
        type: [String],
        required:[true,"please enter tag names"],
        trim:true

     },
     selectedFile:{
        type: String,
        required:[true,"please echoose a file"]
     },//will convert base 64 image to string
    likeCount:{
        
            type:Number,
            default:0
    
    },
    createdAt:{
        type:Date,
        default:new Date()
    }

})
const PostMessage=mongoose.model('PostMessage',postSchema)
export default PostMessage

 

