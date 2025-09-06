
import React, { useState } from "react";
import { useCreateJobMutation } from "../redux/jobs/jobsApi";


import { ChevronLeft, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import JobDetailsForm from "../components/JobDetailsForm";
import JobRequirementForm from "../components/JobRequirementForm";
import CompensationForm from "../components/CompensationForm";

// Job type (matches backend exactly)
export type formDatatype = {
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
    salaryMin: number | string;
    salaryMax: number | string;
    currency: string;
};






const CreateJobs: React.FC = () => {
    const navigate = useNavigate();



    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<formDatatype>({
        jobTitle: "",
        category: "",
        location: "",
        employmentType: "",
        experienceLevel: "",
        deadline: "",

        jobDescription: "",
        responsibilities: "",
        requirements: "",
        benefits: "",

        salaryMin: 0,
        salaryMax: 0,
        currency: "",
    });

    console.log(formData)

    const [createJob, { isLoading }] = useCreateJobMutation();

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        // 1. Check for empty fields
        for (const [key, value] of Object.entries(formData)) {
            if (!value) {
                alert(`${key} is required ❌`);
                return;
            }
        }

        // 2. Salary check
        const min = Number(formData.salaryMin);
        const max = Number(formData.salaryMax);

        if (isNaN(min) || isNaN(max)) {
            alert("Salary values must be numbers ❌");
            return;
        }

        if (max <= min) {
            alert("Maximum salary must be greater than minimum salary ❌");
            return;
        }

        // 3. Deadline check
        const deadlineDate = new Date(formData.deadline);
        if (isNaN(deadlineDate.getTime())) {
            alert("Invalid deadline ❌");
            return;
        }
        if (deadlineDate <= new Date()) {
            alert("Deadline must be in the future ❌");
            return;
        }

        // ✅ If all checks passed, submit
        try {
            const response = await createJob(
                {
                    ...formData,
                    salaryMin: formData.salaryMin === "" || formData.salaryMin === null ? null : Number(formData.salaryMin),
                    salaryMax: formData.salaryMax === "" || formData.salaryMax === null ? null : Number(formData.salaryMax),
                }
            ).unwrap();

            console.log(response)
            alert("Job created successfully ✅");
            navigate("/dashboard/jobs")
        } catch (error) {
            console.error("Error creating job:", error);
            alert("Failed to create job ❌");
        }
    };

    return (

        <section className="mt-16 bg-white p-5 rounded-2xl min-h-screen">
            {/* Back Button */}
            <p
                className="text-[#64748B] flex cursor-pointer mb-3"
                onClick={() => navigate(-1)}
            >
                <ChevronLeft />
                <span>Back to all Jobs</span>
            </p>




            <div>
                <div >
                    <div>
                        <h1 className="gap-3 font-semibold text-2xl mb-4"> Post a New Job</h1>

                    </div>
                    {/* Step Indicator */}
                    <div className="flex items-center my-6">



                        <button
                            onClick={() => setStep(1)}
                            className={`flex items-center gap-2 mr-4 md:mr-8 ${step === 1 ? "text-[#1370C8]" : "text-[#64748B]"}`}
                        >
                            <Circle size={10} className={`rounded-full ${step === 1 ? "bg-[#1370C8]" : "bg-[#64748B]"}`} />  Job Details
                        </button>
                        <button
                            onClick={() => setStep(2)}
                            className={`flex items-center gap-2 mr-4 md:mr-8 ${step === 2 ? "text-[#1370C8]" : "text-[#64748B]"}`}
                        >
                            <Circle size={10} className={`rounded-full ${step === 2 ? "bg-[#1370C8]" : "bg-[#64748B]"}`} />

                            Job Requirements
                        </button>
                        <button
                            onClick={() => setStep(3)}
                            className={`flex items-center gap-2 mr-4 md:mr-8 ${step === 3 ? "text-[#1370C8]" : "text-[#64748B]"}`}
                        >
                            <Circle size={10} className={`rounded-full ${step === 3 ? "bg-[#1370C8]" : "bg-[#64748B]"}`} />
                            Compensation
                        </button>
                    </div>

                    {/* Step Content */}
                    {step === 1 && <JobDetailsForm formData={formData} onChange={handleChange} />}
                    {step === 2 && <JobRequirementForm formData={formData} onChange={handleChange} />}
                    {step === 3 && <CompensationForm formData={formData} onChange={handleChange} />}

                    {/* Navigation */}
                    <div className="flex justify-between mt-6">
                        {step > 1 && (
                            <button
                                onClick={() => setStep(step - 1)}
                                className="bg-gray-300 px-12 py-4 rounded"
                            >
                                Back
                            </button>
                        )}
                        {step < 3 ? (
                            <button
                                onClick={() => setStep(step + 1)}
                                className="bg-[#1370C8] text-white px-12 py-4 rounded"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="bg-[#1370C8] text-white px-12 py-4 rounded"
                            >
                                {isLoading ? "Submitting..." : "Submit"}
                            </button>
                        )}
                    </div>
                </div>
            </div>


        </section>
    )
}

export default CreateJobs;













