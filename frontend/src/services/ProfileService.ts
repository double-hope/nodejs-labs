import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileAPI = createApi({
    reducerPath: 'profileAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3030'}),
    endpoints: (build) => ({
        userProfile: build.mutation({
            query: (body: {id: number, auth: string}) => ({
                url: '/profile',
                method: 'POST',
                body,
            }),
        }),
    }),

});

export const { useUserProfileMutation } = profileAPI;