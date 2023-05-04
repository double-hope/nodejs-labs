import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const logoutAPI = createApi({
    reducerPath: 'logoutAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (build) => ({
        logoutUser: build.mutation({
            query: () => ({
                url: '/logout',
            }),
        }),
    }),
});

export const { useLogoutUserMutation } = logoutAPI;