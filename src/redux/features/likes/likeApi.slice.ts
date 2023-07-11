import { apiSlice } from "../../api/api.slice";

const LikeApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Like"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getLikesofThread: builder.query<any, void>({
        query: (threadId) => ({
          url: `like/get_like_count/${threadId}`,
          method: "GET",
        }),
      }),
      likeThread: builder.mutation<any, any>({
        query: (threadId) => ({
          url: `like/add_like/${threadId}`,
          method: "POST",
        }),
      }),
      removeLike: builder.mutation<any, void>({
        query: (threadId) => ({
          url: `like/remove_like/${threadId}`,
          method: "DELETE",
        }),
      }),
    }),
    overrideExisting: true,
  });

export const {
  useGetLikesofThreadQuery,
  useLikeThreadMutation,
  useRemoveLikeMutation,
} = LikeApiSlice;
