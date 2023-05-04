import { Categories, Category, UpdateCategory } from '@/models';
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
        fetchOneCategory: build.query<Category, {id: string, accessToken: string}>({
            query: ({id, accessToken}) => ({
                url: `/categories/${id}`,
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
        updateCategory: build.mutation<Category, {id: string, category: UpdateCategory, accessToken: string}>({
            query: ({id, category, accessToken}) => ({
                url: `/categories`,
                method: 'PUT',
                body: {
                    id,
                    name: category.name,
                    description: category.description,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: build.mutation<Category, {id: string, accessToken: string}>({
            query: ({id, accessToken}) => ({
                url: `/categories`,
                method: 'DELETE',
                body: {
                    id,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        })
    })
})