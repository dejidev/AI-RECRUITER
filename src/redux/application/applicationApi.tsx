import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ApplicationResponse, Application } from "./type-application";

export const applicationApi = createApi({
    reducerPath: "applicationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/interface",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) headers.set("Authorization", token);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getApplications: builder.query<Application[], void>({
            query: () => "/apply",
            transformResponse: (response: ApplicationResponse) => response.data,
        }),
        applyToJob: builder.mutation<
            { message: string }, // expected success response
            { identifier: string } // request body
        >({
            query: ({ identifier }) => ({
                url: "/apply",
                method: "POST",
                body: { identifier },
            }),
        }),
    }),
});

export const { useGetApplicationsQuery, useApplyToJobMutation } = applicationApi;
