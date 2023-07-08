import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutErrorHandling } from '../../../redux/api/api.slice';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: baseQueryWithoutErrorHandling,
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        me: builder.query({
            query: () => ({
                url: `profile/get_my_profile`,
                method: 'GET',
            }),
            providesTags: ['Profile'],
        }),
        deleteMyProfile: builder.mutation({
            query: () => ({
                url: `profile/delete_profile`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Profile'],
        }),
    })
})