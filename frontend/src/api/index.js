import axios from "axios";
const url = "http://localhost:8000/api/v1/posts";
export const fetchPosts = () => {
  axios.get(url);
};
export const createPost=(newPost)=>{
    axios.post(url,newPost)
}
