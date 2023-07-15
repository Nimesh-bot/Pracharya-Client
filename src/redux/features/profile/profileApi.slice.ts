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
      editUserProfile: builder.mutation<any, any>({
        query: (data) => ({
          url: `profile/update_profile`,
          method: "PATCH",
          body: data,
        }),
        invalidatesTags: ["Profile"],
      }),
      changeUserAvatar: builder.mutation<any, any>({
        query: (formData) => ({
          url: `profile/update_avatar`,
          method: "POST",
          body: formData,
        }),
        invalidatesTags: ["Profile"],
      }),
    }),
    overrideExisting: true,
  });

export const {
  useUserDetailQuery,
  useDeleteUserProfileMutation,
  useEditUserProfileMutation,
  useChangeUserAvatarMutation,
} = profileApi;
