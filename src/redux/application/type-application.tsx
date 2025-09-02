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



































// ---- Types ----
export interface Address {
    city: string | null;
    state: string | null;
    street: string | null;
    country: string | null;
    zipCode: string | null;
}

export interface ContactInfo {
    email: string;
    phone: string | null;
    github: string | null;
    linkedIn: string | null;
    portfolio: string | null;
    address: Address;
}

export interface WorkExperience {
    title: string;
    company: string;
    current: boolean;
    startDate: string; // ISO date
    endDate: string | null; // ISO date or null if current
    duration: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    fieldOfStudy: string;
    graduationYear: number | null;
    gpa: number | null;
}

export interface Candidate {
    id: number;
    identifier: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    isDeleted: boolean;
    location: string | null;
    resumeText: string;
    skills: string[];
    experienceYears: number;
    workExperience: WorkExperience[];
    education: Education[];
    languages: string[];
    certifications: string[];
    contactInfo: ContactInfo;
    status: string; // "active"
    summary: string;
}

export interface Application {
    id: number;
    candidate: Candidate;
    status: "applied" | "interview" | "hired" | "rejected"; // strict enum
    notes: string | null;
    appliedAt: string; // ISO date
    updatedAt: string; // ISO date
}

