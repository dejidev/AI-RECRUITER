// src/redux/services/roleMatchingApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RoleResponse, Role } from "./rolematchingtype";

export const roleMatchingApi = createApi({
    reducerPath: "roleMatchingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ai-recruiter-n5t7.onrender.com/interface",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) headers.set("Authorization", token);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRoles: builder.query<{ roles: Role[]; meta: RoleResponse["meta"] }, void>({
            query: () => "/role-matching/list",
            transformResponse: (response: RoleResponse) => ({
                roles: response.data,
                meta: response.meta,
            }),
        }),

        getRoleById: builder.query<Role, string>({
            query: (identifier) => `/role-matching/${identifier}`,
            transformResponse: (response: { status_code: number; status: string; data: Role }) =>
                response.data,
        }),

        matchRole: builder.mutation<{ message: string }, { identifier: string }>({
            query: ({ identifier }) => ({
                url: "/role-matching",
                method: "POST",
                body: { identifier },
            }),
        }),
    }),
});

export const { useGetRolesQuery, useGetRoleByIdQuery, useMatchRoleMutation } =
    roleMatchingApi;
