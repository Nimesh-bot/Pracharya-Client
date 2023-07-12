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
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          let result;

          try {
            const data = await queryFulfilled;
            result = dispatch(
              LikeApiSlice.util.updateQueryData(
                "getLikesofThread",
                undefined,
                (draft) => {
                  draft.data = data;
                }
              )
            );
          } catch (err) {
            console.log(err);
          }
        },
      }),
      removeLike: builder.mutation<any, any>({
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
