import React from "react";
import type { formDatatype } from "src/pages/CreateJobs";

interface Props {
    formData: formDatatype;
    onChange: (field: string, value: string) => void;
}

const JobDetailsForm: React.FC<Props> = ({ formData, onChange }) => {
    return (
        <div className="space-y-4">
            {/* Job Title */}
            <div className="flex flex-col gap-2">
                <label htmlFor="jobTitle" className="text-sm ">
                    Job Title
                </label>
                <input
                    id="jobTitle"
                    type="text"
                    placeholder="Enter job title"
                    value={formData.jobTitle}
                    onChange={(e) => onChange("jobTitle", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm">
                    Category
                </label>
                <input
                    id="category"
                    type="text"
                    placeholder="Enter category"
                    value={formData.category}
                    onChange={(e) => onChange("category", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                />
            </div>

            {/* Location */}
            <div className="flex flex-col gap-2">
                <label htmlFor="location" className="text-sm ">
                    Location
                </label>
                <input
                    id="location"
                    type="text"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={(e) => onChange("location", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                />
            </div>




            {/* Employment types */}
            <div className="flex flex-col gap-2 relative">
                <label htmlFor="employmentType" className="text-sm">
                    Employment Type
                </label>

                <select
                    id="employmentType"
                    value={formData.employmentType}
                    onChange={(e) => onChange("employmentType", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm focus:outline-none appearance-none pr-10"
                >
                    <option value="">Select Employment Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                    <option value="Contract">Contract</option>
                </select>

                {/* Custom dropdown icon */}
                <svg
                    className="w-5 h-5 text-[#CBD5E1] absolute right-3 top-[52%] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>



            {/* Experience Level */}
            <div className="flex flex-col gap-2 relative">
                <label htmlFor="experienceLevel" className="text-sm">
                    Experience Level
                </label>

                <select
                    id="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={(e) => onChange("experienceLevel", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm focus:outline-none appearance-none pr-10"
                >
                    <option value="">Select Experience Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Mid-level">Mid-level</option>
                    <option value="Expert">Expert</option>
                </select>

                {/* Custom dropdown icon */}
                <svg
                    className="w-5 h-5 text-[#CBD5E1] absolute right-3 top-[52%] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Deadline */}
            <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-sm">
                    Deadline
                </label>
                <input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => onChange("deadline", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm focus:outline-none"
                />
            </div>


        </div>

    );
};

export default JobDetailsForm;
