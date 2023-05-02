import { Category } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { HYDRATE } from "next-redux-wrapper";

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
    },
    tagTypes: ['Category'],
    endpoints: (build) => ({
        fetchAllCategories: build.query<Category[], number>({
            query: (limit: number = 5) => ({
                url: '/categories',
                // params: {
                //     limit,
                // }
            }),
            providesTags: result => ['Category']
        }),
        createCategory: build.mutation<Category, Category>({
            query: (category) => ({
                url: '/categories',
                method: 'POST',
                body: category,
            }),
            invalidatesTags: ['Category']
        }),
        updateCategory: build.mutation<Category, Category>({
            query: (category) => ({
                url: `/categories/${category.id}`,
                method: 'PUT',
                body: category,
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: build.mutation<Category, Category>({
            query: (category) => ({
                url: `/categories/${category.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Category']
        })
    })
})