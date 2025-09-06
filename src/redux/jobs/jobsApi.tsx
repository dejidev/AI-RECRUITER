// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Job type
// type Job = {
//     identifier: string;
//     jobTitle: string;
//     isActive: boolean;
//     shortDescription: string;
//     applicantsCount: number;
//     postedAt: string;
// };

// Job type (matches backend exactly)
// type CreateJob = {
//     jobTitle: string;
//     category: string;
//     location: string;
//     employmentType: string;
//     experienceLevel: string;
//     deadline: string;
//     jobDescription: string;
//     responsibilities: string;
//     requirements: string;
//     benefits: string;
//     salaryMin: number;
//     salaryMax: number;
//     currency: string;
// };


// export const jobsApi = createApi({
//     reducerPath: "jobsApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "https://ai-recruiter-n5t7.onrender.com/interface",
//         prepareHeaders: (headers) => {
//             const token = localStorage.getItem("token"); // 👈 get token from localStorage
//             if (token) {
//                 headers.set("Authorization", `${token}`); // 👈 add Bearer prefix
//             }
//             return headers;
//         },
//     }),
//     tagTypes: ["Job"],

//     endpoints: (builder) => ({
//         // ✅ Corrected endpoint: /jobs
//         getAllJobs: builder.query<
//             { status_code: number; status: string; data: Job[]; total: number },
//             void
//         >({
//             query: () => "/job",
//             providesTags: ["Job"],
//         }),

//         getJobById: builder.query<
//             { status_code: number; status: string; data: Job },
//             string
//         >({
//             query: (id) => `/job/${id}`,
//             // providesTags: (id) => [{ type: "Job", id }],
//             providesTags: (result, error, id) => [{ type: "Job", id }],
//         }),

//         createJob: builder.mutation<
//             { status_code: number; status: string; data: CreateJob },
//             Partial<Job>
//         >({
//             query: (newJob) => ({
//                 url: "/job",
//                 method: "POST",
//                 body: newJob,
//             }),
//             invalidatesTags: ["Job"],
//         }),
//         updateJob: builder.mutation<
//             { status_code: number; status: string; data: Job },
//             { id: string; job: Partial<Job> }
//         >({
//             query: ({ id, job }) => ({
//                 url: `/job/${id}`,
//                 method: "PUT",
//                 body: job,
//             }),
//             invalidatesTags: ["Job"], // ✅ Invalidate all jobs cache
//         }),

//         deleteJob: builder.mutation<{ status_code: number; status: string }, string>(
//             {
//                 query: (id) => ({
//                     url: `/job/${id}`,
//                     method: "DELETE",
//                 }),
//                 invalidatesTags: ["Job"],
//             }
//         ),
//     }),
// });

// export const {
//     useGetAllJobsQuery,
//     useGetJobByIdQuery,
//     useCreateJobMutation,
//     useUpdateJobMutation,
//     useDeleteJobMutation,
// } = jobsApi;





import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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
        baseUrl: "https://ai-recruiter-n5t7.onrender.com/interface",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", `${token}`);
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
            providesTags: (_result, _id, id) => [{ type: "Job", id }],
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
            invalidatesTags: ["Job"],
        }),

        /** Delete job */
        deleteJob: builder.mutation<DeleteJobResponse, string>({
            query: (id) => ({
                url: `/job/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Job"],
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
