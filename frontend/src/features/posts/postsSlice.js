import { createSlice } from "@reduxjs/toolkit";
export const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[]
    },
    reducers:{
        fetch:(state,action)=>{
            state.posts=action.payload
        },

    }
})
export const{fetch}=postsSlice.actions
export const getPosts=(state)=>state.posts.posts
export default postsSlice.reducer