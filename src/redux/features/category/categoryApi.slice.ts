import { apiSlice } from "../../api/api.slice";

export const categoryApi = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["Category"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCategories: builder.query<CategoryProps[], void>({
        query: () => ({
          url: `category/get_category`,
          method: "GET",
        }),
        providesTags: ["Category"],
      }),
    }),
    overrideExisting: true,
  });

export const { useGetCategoriesQuery } = categoryApi;
