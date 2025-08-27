import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./jobs/jobsApi"; // your RTK Query slice
import { applicationApi } from "./application/applicationApi";
import { roleMatchingApi } from "./role-match/rolematching";

export const store = configureStore({
    reducer: {
        [jobsApi.reducerPath]: jobsApi.reducer,
        [applicationApi.reducerPath]: applicationApi.reducer,
        [roleMatchingApi.reducerPath]: roleMatchingApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(jobsApi.middleware)
            .concat(applicationApi.middleware)
            .concat(roleMatchingApi.middleware),

});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
