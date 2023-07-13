import { apiSlice } from "../../api/api.slice";

export const threadApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Thread"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getAllThreads: builder.query<Threads.ThreadsProps[], void>({
        query: () => ({
          url: `thread/get_all_thread`,
          method: "GET",
        }),
      }),
      getThreadsByCategory: builder.query<any, number>({
        query: (category) => ({
          url: `thread/get_thread_category/${category}`,
          method: "GET",
        }),
        providesTags: ["Thread"],
      }),
      getThreadById: builder.query({
        query: (id) => ({
          url: `thread/get_thread/${id}`,
          method: "GET",
        }),
        providesTags: ["Thread"],
      }),
      createThread: builder.mutation({
        query: (data) => ({
          url: `thread/new_thread`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Thread"],
      }),
      getUnverifiedThreads: builder.query<any, void>({
        query: () => ({
          url: `thread/get_unverified_thread`,
          method: "GET",
        }),
        providesTags: ["Thread"],
      }),
      verifyThread: builder.mutation({
        query: (id) => ({
          url: `thread/verify_thread/${id}`,
          method: "PATCH",
        }),
        invalidatesTags: ["Thread"],
      }),
    }),
    overrideExisting: true,
  });

export const {
  useGetAllThreadsQuery,
  useGetThreadsByCategoryQuery,
  useGetThreadByIdQuery,
  useCreateThreadMutation,
  useGetUnverifiedThreadsQuery,
  useVerifyThreadMutation,
} = threadApi;
