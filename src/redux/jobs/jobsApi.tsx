// redux/jobs/jobsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import type {
    CreateJobInput,
    CreateJobResponse,
    GetAllJobsResponse,
    GetJobByIdResponse,
    UpdateJobInput,
    UpdateJobResponse,
    DeleteJobResponse,
} from "./type-jobApi";

export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://ai-recruiter-n5t7.onrender.com/Interface",
        prepareHeaders: (headers, { getState }) => {
            // Get token from Redux state instead of localStorage
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    tagTypes: ["Job"],

    endpoints: (builder) => ({
        /** Get all jobs */
        getAllJobs: builder.query<GetAllJobsResponse, void>({
            query: () => "/job",
            providesTags: ["Job"],
        }),

        /** Get job by ID */
        getJobById: builder.query<GetJobByIdResponse, string>({
            query: (id) => `/job/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Job", id }],
        }),

        /** Create new job */
        createJob: builder.mutation<CreateJobResponse, CreateJobInput>({
            query: (newJob) => ({
                url: "/job",
                method: "POST",
                body: newJob,
            }),
            invalidatesTags: ["Job"],
        }),

        /** Update existing job */
        updateJob: builder.mutation<
            UpdateJobResponse,
            { id: string; job: UpdateJobInput }
        >({
            query: ({ id, job }) => ({
                url: `/job/${id}`,
                method: "PUT",
                body: job,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Job", id },
                "Job"
            ],
        }),

        /** Delete job */
        deleteJob: builder.mutation<DeleteJobResponse, string>({
            query: (id) => ({
                url: `/job/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, id) => [
                { type: "Job", id },
                "Job"
            ],
        }),
    }),
});

export const {
    useGetAllJobsQuery,
    useGetJobByIdQuery,
    useCreateJobMutation,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobsApi;