import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApplicationResponse, Application } from "./type-application";
import type { RootState } from "../store";

export const applicationApi = createApi({
    reducerPath: "applicationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ai-recruiter-n5t7.onrender.com/interface",
        prepareHeaders: (headers, { getState }) => {
            // Get token from Redux state instead of localStorage
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    tagTypes: ["Applications"], // 👈 add caching tag
    endpoints: (builder) => ({
        getApplications: builder.query<Application[], void>({
            query: () => "/apply",
            transformResponse: (response: ApplicationResponse) => response.data,
            providesTags: ["Applications"],
        }),

        applyToJob: builder.mutation<
            { message: string },
            { identifier: string }
        >({
            query: ({ identifier }) => ({
                url: "/apply",
                method: "POST",
                body: { identifier },
            }),
            invalidatesTags: ["Applications"],
        }),

        updateApplication: builder.mutation<
            { message: string }, // adjust to match your backend's success response
            { id: number; status: string }
        >({
            query: ({ id, status }) => ({
                url: `/apply/${id}`,
                method: "PUT",
                body: { status },   // ✅ matches Postman payload
            }),
            invalidatesTags: ["Applications"], // optional: ensures refetch
        }),

    }),
});

export const {
    useGetApplicationsQuery,
    useApplyToJobMutation,
    useUpdateApplicationMutation, // 👈 export new hook
} = applicationApi;
