import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postsSlice'
import { postApi } from '../service/postApi';
export const store = configureStore({
    reducer:{
      posts:postReducer,
      [postApi.reducerPath]:postApi.reducer
  },
});
