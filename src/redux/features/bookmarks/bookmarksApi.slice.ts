import { apiSlice } from "../../../redux/api/api.slice";

const bookmarkApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Bookmark"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getBookmarks: builder.query<any, void>({
        query: () => ({
          url: `bookmark/get_bookmark`,
          method: "GET",
        }),
        providesTags: ["Bookmark"],
      }),
      addBookmark: builder.mutation({
        query: (data) => ({
          url: `bookmark/add_bookmark`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Bookmark"],
      }),
      deleteBookmark: builder.mutation({
        query: (data) => ({
          url: `bookmark/del_bookmark`,
          method: "DELETE",
          body: data,
        }),
        invalidatesTags: ["Bookmark"],
      }),
    }),
    overrideExisting: true,
  });

export const {
  useGetBookmarksQuery,
  useAddBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarkApiSlice;
