import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import { useGetPostsQuery } from "../../service/postApi";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";

const Posts = () => {
  const { data, isFetching, isError } = useGetPostsQuery();
  const classes = useStyles();
  if (isFetching) return <CircularProgress />;
  console.log(data);
  const posts = data.postMessages;
  console.log(posts)
  return (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
    {posts.map((post) => (
      <Grid key={post._id} item xs={12} sm={6} md={6}>
        <Post post={post}  />
      </Grid>
    ))}
  </Grid>
  );
};
export default Posts;
