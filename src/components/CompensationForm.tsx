import React from "react";
import type { formDatatype } from "src/pages/CreateJobs";

interface Props {
    formData: formDatatype;
    onChange: (field: string, value: string) => void;
}

const CompensationForm: React.FC<Props> = ({ formData, onChange }) => {
    return (
        <div className="space-y-4">
            {/* Minimum Salary */}
            <div className="flex flex-col gap-2">
                <label htmlFor="salaryMin" className="text-sm">
                    Minimum Salary
                </label>
                <input
                    id="salaryMin"
                    type="number | text"
                    placeholder="Enter minimum salary"
                    value={formData.salaryMin}
                    onChange={(e) => onChange("salaryMin", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-3 text-sm placeholder:text-[#464040] focus:outline-none"
                />
            </div>

            {/* Maximum Salary */}
            <div className="flex flex-col gap-2">
                <label htmlFor="salaryMax" className="text-sm">
                    Maximum Salary
                </label>
                <input
                    id="salaryMax"
                    type="number | text"
                    placeholder="Enter maximum salary"
                    value={formData.salaryMax}
                    onChange={(e) => onChange("salaryMax", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-3 text-sm placeholder:text-[#464040] focus:outline-none"
                />
            </div>

            {/* Currency */}
            <div className="flex flex-col gap-2 relative">
                <label htmlFor="currency" className="text-sm">
                    Currency
                </label>
                <select
                    id="currency"
                    value={formData.currency}
                    onChange={(e) => onChange("currency", e.target.value)}
                    className="w-full border border-[#CBD5E1] rounded px-3 py-3 text-sm appearance-none focus:outline-none"
                >
                    <option value="">Select Currency</option>
                    <option value="USD">USD</option>
                    <option value="NGN">NGN</option>
                    <option value="EUR">EUR</option>
                </select>
                {/* Custom dropdown arrow */}
                <span className="pointer-events-none absolute right-3 top-10 text-gray-500 text-sm">▼</span>
            </div>
        </div>

    );
};

export default CompensationForm;
