// src/types/application.ts
export interface Candidate {
    CandidateId: string;
    name: string;
    title: string | null;
    email?: string;
    skills: string[];
    matchScore: number;
}

export interface Job {
    id: number;
    identifier: string;
    jobTitle: string;
    jobDescription: string;
    category: string;
    location: string;
    employmentType: string;
    experienceLevel: string;
    deadline: string;
    applicants: Candidate[];
}

export interface Application {
    id: number;
    status: string;
    notes: string | null;
    appliedAt: string;
    updatedAt: string;
    job: Job;
}

export interface ApplicationResponse {
    status_code: number;
    status: string;
    data: Application[];
    total?: number;
}
