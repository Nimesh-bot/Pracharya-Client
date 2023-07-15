import { apiSlice } from "../../api/api.slice";

const commentsApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Comments"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCommentsOfThread: builder.query<any, void>({
        query: (threadId) => ({
          url: `comment/get_comment/${threadId}`,
          method: "GET",
        }),
        providesTags: ["Comments"],
      }),
      createComment: builder.mutation<any, any>({
        query: ({ threadId, data }) => ({
          url: `comment/add_comment/${threadId}`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Comments"],
      }),
      getReplies: builder.query<any, void>({
        query: (commentId) => ({
          url: `comment/get_child_comment/${commentId}`,
          method: "GET",
        }),
        providesTags: ["Comments"],
      }),
      deleteComment: builder.mutation<any, void>({
        query: (commentId) => ({
          url: `comment/delete_comment/${commentId}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Comments"],
      }),
    }),
    overrideExisting: true,
  });

export const {
  useGetCommentsOfThreadQuery,
  useCreateCommentMutation,
  useGetRepliesQuery,
  useDeleteCommentMutation,
} = commentsApiSlice;
