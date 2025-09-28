// redux/auth/authApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    AuthCredentials,
    AuthResponse,
    User,
    SignInResponse,
    SignUpResponse
} from "./authTypes";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ai-recruiter-n5t7.onrender.com/interface/auth/email",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        },
    }),
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        /** Sign In */
        signIn: builder.mutation<SignInResponse, AuthCredentials>({
            query: (credentials) => ({
                url: "/sign-in",
                method: "POST",
                body: credentials,
            }),
            transformResponse: (response: AuthResponse): SignInResponse => {
                if (response.status === "error") {
                    throw new Error(response.message || "Sign in failed");
                }

                const user: User = {
                    id: response.data?.userId || "",
                    email: response.data?.userId || "",
                    authProvider: response.data?.auth_provider || "email"
                };

                return {
                    user,
                    token: response.token || "",
                    message: response.message
                };
            },
            transformErrorResponse: (response: any) => {
                return {
                    message: response.data?.message || "Sign in failed",
                    status: response.status
                };
            },
        }),

        /** Sign Up */
        signUp: builder.mutation<SignUpResponse, AuthCredentials>({
            query: (credentials) => ({
                url: "/sign-up",
                method: "POST",
                body: credentials,
            }),
            transformResponse: (response: AuthResponse): SignUpResponse => {
                if (response.status === "error") {
                    throw new Error(response.message || "Sign up failed");
                }

                const user: User = {
                    id: response.data?.userId || "",
                    email: response.data?.userId || "",
                    authProvider: response.data?.auth_provider || "email"
                };

                return {
                    user,
                    token: response.token || "",
                    message: response.message
                };
            },
            transformErrorResponse: (response: any) => {
                return {
                    message: response.data?.message || "Sign up failed",
                    status: response.status
                };
            },
        }),

        /** Refresh Token (if needed) */
        refreshToken: builder.mutation<SignInResponse, void>({
            query: () => ({
                url: "/refresh-token",
                method: "POST",
            }),
            transformResponse: (response: AuthResponse): SignInResponse => {
                if (response.status === "error") {
                    throw new Error(response.message || "Token refresh failed");
                }

                const user: User = {
                    id: response.data?.userId || "",
                    email: response.data?.userId || "",
                    authProvider: response.data?.auth_provider || "email"
                };

                return {
                    user,
                    token: response.token || "",
                    message: response.message
                };
            },
        }),
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useRefreshTokenMutation,
} = authApi;