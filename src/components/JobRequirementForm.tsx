import React from "react";
import type { formDatatype } from "src/pages/CreateJobs";

interface Props {
    formData: formDatatype;
    onChange: (field: string, value: string) => void;
}

const JobRequirementForm: React.FC<Props> = ({ formData, onChange }) => {
    return (
        <div className="space-y-4">
            {/* Job Description */}
            <div className="flex flex-col gap-2">
                <label htmlFor="jobDescription" className="text-sm">
                    Job Description
                </label>
                <textarea
                    id="jobDescription"
                    placeholder="We’re looking for a Product Designer to jon our fast grrowing AI recruitment platform. You will help shape intuitive, elegant, and scalable design solutions that simplify how companies discover and hire talent using AI..."
                    value={formData.jobDescription}
                    onChange={(e) => onChange("jobDescription", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                    rows={3}
                />
            </div>

            {/* Responsibilities */}
            <div className="flex flex-col gap-2">
                <label htmlFor="responsibilities" className="text-sm">
                    Responsibilities
                </label>
                <textarea
                    id="responsibilities"
                    placeholder="Design and Prototype flows and interface . 
Collaborate with product managers, developers and stakeholders"
                    value={formData.responsibilities}
                    onChange={(e) => onChange("responsibilities", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                    rows={3}
                />
            </div>

            {/* Requirements */}
            <div className="flex flex-col gap-2">
                <label htmlFor="requirements" className="text-sm">
                    Requirements
                </label>
                <textarea
                    id="requirements"
                    placeholder="3+ years experiences for desktop and mobile
Strong portfolio of product work"
                    value={formData.requirements}
                    onChange={(e) => onChange("requirements", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                    rows={3}
                />
            </div>

            {/* Benefits */}
            <div className="flex flex-col gap-2">
                <label htmlFor="benefits" className="text-sm">
                    Benefits
                </label>
                <textarea
                    id="benefits"
                    placeholder="Remote-first culture
Paid time off plus flexible holidays"
                    value={formData.benefits}
                    onChange={(e) => onChange("benefits", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-4 text-sm placeholder:text-[#464040] focus:outline-none"
                    rows={3}
                />
            </div>
        </div>

    );
};

export default JobRequirementForm;
