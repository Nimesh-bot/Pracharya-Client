import { createApi, EndpointDefinition } from "@reduxjs/toolkit/query/react";
import { baseQueryWithoutErrorHandling } from "../../api/api.slice";

import { authorize } from './auth.slice'

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: baseQueryWithoutErrorHandling,
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        verifyPhone: builder.mutation({
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
        }),
        signUp: builder.mutation({
            query: (data) => ({
                url: `auth/signup`,
                method: "POST",
                body: data,
            }),
        }),
    })
})

export const { useVerifyPhoneMutation, useVerifyOtpMutation, useSignUpMutation } = authApi;
