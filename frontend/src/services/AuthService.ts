import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (build) => ({
        authUser: build.mutation({
            query: (body: {email: string, password: string}) => ({
                url: '/auth',
                method: 'POST',
                body,
            }),
        }),
    }),

});

export const { useAuthUserMutation } = authAPI;