import { apiSlice } from "../../api/api.slice";

export const threadApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Thread"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getThreadsByCategory: builder.query({
        query: (category) => ({
          url: `threads/get_thread_category/${category}`,
          method: "GET",
        }),
        providesTags: ["Thread"],
      }),
      getThreadById: builder.query({
        query: (id) => ({
          url: `threads/get_thread/${id}`,
          method: "GET",
        }),
      }),
      createThread: builder.mutation({
        query: (data) => ({
          url: `threads/new_thread`,
          method: "POST",
          body: data,
        }),
      }),
    }),
  });

export const {
  useGetThreadsByCategoryQuery,
  useGetThreadByIdQuery,
  useCreateThreadMutation,
} = threadApi;
