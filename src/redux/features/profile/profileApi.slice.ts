import { apiSlice } from "../../../redux/api/api.slice";

export const profileApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Profile"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      userDetail: builder.query<User.UserProfile, void>({
        query: () => ({
          url: `profile/get_my_profile`,
          method: "GET",
        }),
        providesTags: ["Profile"],
      }),
      deleteUserProfile: builder.mutation({
        query: () => ({
          url: `profile/delete_profile`,
          method: "DELETE",
        }),
        invalidatesTags: ["Profile"],
      }),
    }),
    overrideExisting: true,
  });

export const { useUserDetailQuery, useDeleteUserProfileMutation } = profileApi;
