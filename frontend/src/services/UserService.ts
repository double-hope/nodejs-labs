import { User } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<User[], number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    limit,
                }
            }),
            providesTags: result => ['User']
        }),
    })
})