import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const registerAPI = createApi({
    reducerPath: 'registerAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (body: {name: string, email: string, password: string}) => ({
                url: '/register',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useRegisterUserMutation } = registerAPI;
