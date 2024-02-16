import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tradeApi = createApi({
  reducerPath: "tradeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<any, void>({
      query: () => "posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = tradeApi