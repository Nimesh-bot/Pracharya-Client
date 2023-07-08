import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithoutErrorHandling } from '../../api/api.slice';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: baseQueryWithoutErrorHandling,
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryProps[], void>({
            query: () => ({
                url: `category/get_category`,
                method: 'GET',
            }),
            providesTags: ['Category'],
        }),
    })
})

export const { useGetCategoriesQuery } = categoryApi;