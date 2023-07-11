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
      }),
      createThread: builder.mutation({
        query: (data) => ({
          url: `thread/new_thread`,
          method: "POST",
          body: data,
        }),
      }),
    }),
    overrideExisting: true,
  });

export const {
  useGetAllThreadsQuery,
  useGetThreadsByCategoryQuery,
  useGetThreadByIdQuery,
  useCreateThreadMutation,
} = threadApi;
