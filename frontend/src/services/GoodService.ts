import { Roles } from '@/common';
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
        createGood: build.mutation<Good, {good: Good, accessToken: string, roles: Roles[]}>({
            query: ({good, accessToken, roles}) => ({
                url: '/goods',
                method: 'POST',
                body: {
                    name: good.name,
                    price: good.price,
                    description: good.description,
                    roles,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        }),
        updateGood: build.mutation<Good, {good: Good, accessToken: string, roles: Roles[]}>({
            query: ({good, accessToken, roles}) => ({
                url: `/goods`,
                method: 'PUT',
                body: {
                    id: good.id, 
                    name: good.name,
                    price: good.price,
                    description: good.description,
                    roles,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        }),
        deleteGood: build.mutation<Good, {good: Good, accessToken: string, roles: Roles[]}>({
            query: ({good, accessToken, roles}) => ({
                url: `/goods`,
                method: 'DELETE',
                body: {
                    id: good.id,
                    roles,
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: ['Good']
        })
    })
})