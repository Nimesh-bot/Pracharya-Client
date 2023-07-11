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
      }),
      createComment: builder.mutation<any, any>({
        query: ({ data, threadId }) => ({
          url: `comment/add_comment/${threadId}`,
          method: "POST",
          body: data,
        }),
      }),
      getReplies: builder.query<any, void>({
        query: (commentId) => ({
          url: `comment/get_child_comment/${commentId}`,
          method: "GET",
        }),
      }),
      deleteComment: builder.mutation<any, void>({
        query: (commentId) => ({
          url: `comment/delete_comment/${commentId}`,
          method: "DELETE",
        }),
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
