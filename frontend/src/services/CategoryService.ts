import { Categories, Category } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllCategories: build.query<Categories, string>({
            query: (accessToken: string) => ({
                url: '/categories',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            providesTags: result => ['Category']
        }),
        createCategory: build.mutation<Category, {category: Category, accessToken: string}>({
            query: ({category, accessToken}) => ({
              url: '/categories',
              method: 'POST',
              body: category,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }),
            invalidatesTags: ['Category']
        }),
        updateCategory: build.mutation<Category, {category: Category, accessToken: string}>({
            query: ({category, accessToken}) => ({
                url: `/categories/${category.id}`,
                method: 'PUT',
                body: category,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: build.mutation<Category, {category: Category, accessToken: string}>({
            query: ({category, accessToken}) => ({
                url: `/categories/${category.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        })
    })
})