import { Good, Goods } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const goodAPI = createApi({
    reducerPath: 'goodAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    tagTypes: ['Good'],
    endpoints: (build) => ({
        fetchAllGoods: build.query<Goods, string>({
            query: (accessToken: string) => ({
                url: '/goods',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            providesTags: result => ['Good']
        }),
        createGood: build.mutation<Good, {good: Good, accessToken: string}>({
            query: ({good, accessToken}) => ({
                url: '/goods',
                method: 'POST',
                body: good,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        }),
        updateGood: build.mutation<Good, {good: Good, accessToken: string}>({
            query: ({good, accessToken}) => ({
                url: `/goods/${good.id}`,
                method: 'PUT',
                body: good,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        }),
        deleteGood: build.mutation<Good, {good: Good, accessToken: string}>({
            query: ({good, accessToken}) => ({
                url: `/goods/${good.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        })
    })
})