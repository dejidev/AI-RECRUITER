import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Job type
type Job = {
    identifier: string;
    jobTitle: string;
    isActive: boolean;
    shortDescription: string;
    applicantsCount: number;
    postedAt: string;
};

// Job type (matches backend exactly)
type CreateJob = {
    jobTitle: string;
    category: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    deadline: string;
    jobDescription: string;
    responsibilities: string;
    requirements: string;
    benefits: string;
    salaryMin: number;
    salaryMax: number;
    currency: string;
};


export const jobsApi = createApi({
    reducerPath: "jobsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/interface",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token"); // 👈 get token from localStorage
            console.log(token)
            if (token) {
                headers.set("Authorization", `${token}`); // 👈 add Bearer prefix
            }
            return headers;
        },
    }),
    tagTypes: ["Job"],

    endpoints: (builder) => ({
        // ✅ Corrected endpoint: /jobs
        getAllJobs: builder.query<
            { status_code: number; status: string; data: Job[]; total: number },
            void
        >({
            query: () => "/job",
            providesTags: ["Job"],
        }),

        getJobById: builder.query<
            { status_code: number; status: string; data: Job },
            string
        >({
            query: (id) => `/job/${id}`,
            providesTags: (result, error, id) => [{ type: "Job", id }],
        }),

        createJob: builder.mutation<
            { status_code: number; status: string; data: CreateJob },
            Partial<Job>
        >({
            query: (newJob) => ({
                url: "/job",
                method: "POST",
                body: newJob,
            }),
            invalidatesTags: ["Job"],
        }),

        updateJob: builder.mutation<
            { status_code: number; status: string; data: Job },
            { id: string; job: Partial<Job> }
        >({
            query: ({ id, job }) => ({
                url: `/job/${id}`,
                method: "PUT",
                body: job,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Job", id }],
        }),

        deleteJob: builder.mutation<{ status_code: number; status: string }, string>(
            {
                query: (id) => ({
                    url: `/job/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ["Job"],
            }
        ),
    }),
});

export const {
    useGetAllJobsQuery,
    useGetJobByIdQuery,
    useCreateJobMutation,
    useUpdateJobMutation,
    useDeleteJobMutation,
} = jobsApi;
