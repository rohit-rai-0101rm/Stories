import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  const baseUrl=process.env.REACT_APP_POST_API
  const createRequest = (url) => ({ url});

  export const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => createRequest('/posts')
        }),
        
        
        
    })
})
export const{
    useGetPostsQuery
}=postApi;