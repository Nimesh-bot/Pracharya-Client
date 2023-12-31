import { apiSlice } from "../../api/api.slice";

import { authorize } from "./auth.slice";

export const authApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Auth"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      verifyPhone: builder.mutation<any, any>({
        query: (data) => ({
          url: `auth/number_verify`,
          method: "POST",
          body: data,
        }),
      }),
      verifyOtp: builder.mutation({
        query: (data) => ({
          url: `auth/sms_verify`,
          method: "POST",
          body: data,
        }),
        async onCacheEntryAdded(arg, { dispatch, cacheDataLoaded }) {
          const { data } = await cacheDataLoaded;
          if (data.access_token) {
            dispatch(authorize({ ...data, user: undefined }));
          }
        },
      }),
      signUp: builder.mutation({
        query: (data) => ({
          url: `auth/signup`,
          method: "POST",
          body: data,
        }),
      }),
    }),
    overrideExisting: true,
  });

export const {
  useVerifyPhoneMutation,
  useVerifyOtpMutation,
  useSignUpMutation,
} = authApi;
