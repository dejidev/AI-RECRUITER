// src/types/roleMatching.ts
export interface Role {
    identifier: string;
    jobTitle: string;
    isActive: boolean;
    shortDescription: string;
    applicantsCount: number;
    postedAt: string;
}

export interface Meta {
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
}

export interface RoleResponse {
    status_code: number;
    status: string;
    data: Role[];
    meta: Meta;
}
