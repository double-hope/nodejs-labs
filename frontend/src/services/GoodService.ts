import { Good } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const goodAPI = createApi({
    reducerPath: 'goodAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Good'],
    endpoints: (build) => ({
        fetchAllGoods: build.query<Good[], number>({
            query: (limit: number = 5) => ({
                url: '/goods',
                params: {
                    limit,
                }
            }),
            providesTags: result => ['Good']
        }),
        createGood: build.mutation<Good, Good>({
            query: (good) => ({
                url: '/goods',
                method: 'POST',
                body: good,
            }),
            invalidatesTags: ['Good']
        }),
        updateGood: build.mutation<Good, Good>({
            query: (good) => ({
                url: `/goods/${good.id}`,
                method: 'PUT',
                body: good,
            }),
            invalidatesTags: ['Good']
        }),
        deleteGood: build.mutation<Good, Good>({
            query: (good) => ({
                url: `/goods/${good.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Good']
        })
    })
})