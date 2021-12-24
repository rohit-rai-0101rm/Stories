import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles';


const Posts = () => {
    const posts=useSelector((state)=>state.posts)
        const classes = useStyles();
        console.log(posts)

    return (
        <div>
            
        </div>
    )
}

export default Posts
