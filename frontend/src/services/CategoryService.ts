import { Roles } from '@/common';
import { Categories, Category, CreateCategory, UpdateCategory } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllCategories: build.query<Category[], string>({
            query: (accessToken: string) => ({
                url: '/categories',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            providesTags: result => ['Category']
        }),
        fetchOneCategory: build.query<Category, {id: number, accessToken: string}>({
            query: ({id, accessToken}) => ({
                url: `/categories/${id}`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            providesTags: result => ['Category']
        }),
        createCategory: build.mutation<Category, {category: CreateCategory, accessToken: string, roles: Roles[]}>({
            query: ({category, accessToken, roles}) => ({
              url: '/categories',
              method: 'POST',
              body: {
                name: category.name,
                description: category.description,
                roles,
              },
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }),
            invalidatesTags: ['Category']
        }),
        updateCategory: build.mutation<Category, {id: number, category: UpdateCategory, accessToken: string, roles: Roles[]}>({
            query: ({id, category, accessToken, roles}) => ({
                url: `/categories`,
                method: 'PUT',
                body: {
                    id,
                    name: category.name,
                    description: category.description,
                    roles,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: build.mutation<Category, {id: number, accessToken: string, roles: Roles[]}>({
            query: ({id, accessToken, roles}) => ({
                url: `/categories`,
                method: 'DELETE',
                body: {
                    id,
                    roles,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            }),
            invalidatesTags: ['Category']
        })
    })
})