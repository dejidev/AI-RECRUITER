// type-job.ts

/** Used when creating a new job */
export interface CreateJobInput {
    jobTitle: string;
    jobDescription: string;
    category: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    deadline: string; // ISO date string (e.g. "2025-09-30")
    responsibilities: string;
    requirements: string;
    benefits: string;
    salaryMin: number | null;
    salaryMax: number | null;
}

/** Response after creating a job */
export interface CreateJobResponse {
    status_code: number;
    status: string;
    message: string;
    data: {
        jobId: string;
        jobTitle: string;
        applicationLink: string;
    };
}

/** Summary of a job (list view, update response) */
export interface JobSummary {
    identifier: string;
    jobTitle: string;
    isActive: boolean;
    shortDescription: string;
    applicantsCount: number;
    postedAt: string; // ISO date
}

/** Response for getAllJobs */
export interface GetAllJobsResponse {
    status_code: number;
    status: string;
    data: JobSummary[];
    total: number;
}

/** Detailed job (single job view) */
export interface JobDetail {
    createdAt: string;
    id: number;
    identifier: string;
    isActive: boolean;
    isDeleted: boolean;
    updatedAt: string;
    jobTitle: string;
    jobDescription: string;
    category: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    deadline: string;
    responsibilities: string;
    requirements: string;
    benefits: string;
    salaryMin: number | null;
    salaryMax: number | null;
    currency: string;

    // avgFit: string;
    // shortlisted: number

    applicationLink: string;
    applicants: string[]; // adjust if you have applicant typing
}

/** Response for getJobById */
export interface GetJobByIdResponse {
    status_code: number;
    status: string;
    data: JobDetail;
}

/** Update job request (similar to create, but salaries are required here) */
export interface UpdateJobInput {
    jobTitle: string;
    jobDescription: string;
    category: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    deadline: string;
    responsibilities: string;
    requirements: string;
    benefits: string;
    salaryMin: number | string; // backend accepts string or number
    salaryMax: number | string;
    isActive: boolean
}

/** Update job response */
export interface UpdateJobResponse {
    status_code: number;
    status: string;
    data: JobSummary;
}

/** Delete job response */
export interface DeleteJobResponse {
    status_code: number;
    status: string;
}
