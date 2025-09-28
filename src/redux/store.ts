// import { configureStore } from "@reduxjs/toolkit";
// import { jobsApi } from "./jobs/jobsApi"; // your RTK Query slice
// import { applicationApi } from "./application/applicationApi";
// import { roleMatchingApi } from "./role-match/rolematching";

// export const store = configureStore({
//     reducer: {
//         [jobsApi.reducerPath]: jobsApi.reducer,
//         [applicationApi.reducerPath]: applicationApi.reducer,
//         [roleMatchingApi.reducerPath]: roleMatchingApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware()
//             .concat(jobsApi.middleware)
//             .concat(applicationApi.middleware)
//             .concat(roleMatchingApi.middleware),

// });

// // types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
















// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

// Auth
import { authApi } from "./auth/authApi";
import authReducer from "./auth/authSlice";

// Existing APIs
import { jobsApi } from "./jobs/jobsApi";
import { applicationApi } from "./application/applicationApi";
import { roleMatchingApi } from "./role-match/rolematching";

export const store = configureStore({
    reducer: {
        // Auth
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,

        // Existing APIs
        [jobsApi.reducerPath]: jobsApi.reducer,
        [applicationApi.reducerPath]: applicationApi.reducer,
        [roleMatchingApi.reducerPath]: roleMatchingApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    // RTK Query actions that contain non-serializable values
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                ],
            },
        })
            .concat(authApi.middleware)
            .concat(jobsApi.middleware)
            .concat(applicationApi.middleware)
            .concat(roleMatchingApi.middleware),
});

// Enable refetch on focus/reconnect for RTK Query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;