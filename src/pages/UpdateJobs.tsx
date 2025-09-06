import { ChevronLeft, Circle } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CompensationForm from '../components/CompensationForm';
import JobDetailsForm from '../components/JobDetailsForm';
import JobRequirementForm from '../components/JobRequirementForm';
import { useGetJobByIdQuery, useUpdateJobMutation, } from '../redux/jobs/jobsApi';



const UpdateJobs: React.FC = () => {

    const navigate = useNavigate();


    // ✅ get jobId from URL params
    const { id } = useParams<{ id: string }>();

    const { data: job, isLoading } = useGetJobByIdQuery(id!);
    const [updateJob, { isLoading: isUpdating }] = useUpdateJobMutation();


    console.log(id)

    console.log(job)




    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
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
        salaryMin: "",
        salaryMax: "",
        currency: "",
        isActive: true,
    });



    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    // ✅ Prefill
    useEffect(() => {
        if (job) {
            setFormData({
                jobTitle: job.data.jobTitle ?? "",
                category: job.data.category ?? "",
                location: job.data.location ?? "",
                employmentType: job.data.employmentType ?? "",
                experienceLevel: job.data.experienceLevel ?? "",
                deadline: job.data.deadline ?? "",
                jobDescription: job.data.jobDescription ?? "",
                responsibilities: job.data.responsibilities ?? "",
                requirements: job.data.requirements ?? "",
                benefits: job.data.benefits ?? "",
                // salaryMin: job.data.salaryMin ?? 0,
                // salaryMax: job.data.salaryMax ?? 0,
                salaryMin: job.data.salaryMin !== undefined && job.data.salaryMin !== null ? String(job.data.salaryMin) : "",
                salaryMax: job.data.salaryMax !== undefined && job.data.salaryMax !== null ? String(job.data.salaryMax) : "",
                currency: job.data.currency ?? "",
                isActive: job.data.isActive ?? true,
            });
        }
    }, [job]);

    // ✅ Handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        for (const [key, value] of Object.entries(formData)) {
            if (key === "isActive") continue; // ✅ skip boolean validation
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

        if (!formData.jobTitle || !formData.jobDescription) {
            alert("Job title and description are required.");
            return;
        }

        try {
            if (!id) {
                alert("Job ID is missing.");
                return;
            }
            const result = await updateJob({ id, job: formData }).unwrap();
            console.log("Updated ✅", result);
            alert("Job updated successfully!");
            navigate("/dashboard/jobs")
        } catch (err) {
            console.error("Update failed ❌", err);
            // alert(err?.data?.error || "Update failed");
            alert("Update failed");

        }
    };

    if (isLoading) return <p>Loading job...</p>;





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


            <div className='flex  items-center gap-16'>
                <h1 className="gap-3 font-semibold text-2xl mb-4"> Update Job</h1>

                <div className='flex items-center mb-4'>
                    <div
                        onClick={() =>
                            setFormData((prev) => ({ ...prev, isActive: !prev.isActive }))
                        }
                        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${formData.isActive ? "bg-[#1370C8]" : "bg-gray-200"
                            }`}
                    >
                        <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${formData.isActive ? "translate-x-6" : ""
                                }`}
                        />
                    </div>

                    <span className="ml-2 text-sm text-gray-700">
                        {formData.isActive ? "Active" : "Inactive"}
                    </span>

                </div>

            </div>












            <div>
                <div >
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
                                disabled={isUpdating}
                                className="bg-[#1370C8] text-white px-12 py-4 rounded"
                            >
                                {isUpdating ? "Updating job..." : "Update Job"}
                            </button>
                        )}
                    </div>
                </div>
            </div>


        </section>
    )
}

export default UpdateJobs;
