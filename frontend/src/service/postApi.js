import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:5000/api/v1",
    }),
    endpoints: (builder) => ({
      getPosts: builder.query({
        query: () => "posts",
      }),
      
      createPost: builder.mutation({
        query: (newPost) => ({
          url: "posts",
          method: "POST",
          body: newPost
        }),
       
  
      }),
      
     
    }),
  });
  export const { useGetPostsQuery, useCreatePostMutation
     } = postApi;