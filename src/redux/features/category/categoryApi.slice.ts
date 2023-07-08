import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutErrorHandling } from '../../api/api.slice';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: baseQueryWithoutErrorHandling,
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategories: builder.query<any, void>({
            query: () => ({
                url: `categories/get_categories`,
                method: 'GET',
            }),
            providesTags: ['Category'],
        }),
    })
})

export const { useGetCategoriesQuery } = categoryApi;