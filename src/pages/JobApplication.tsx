import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobApplication: React.FC = () => {
    // const { jobId } = useParams<{ jobId: string }>();
    const base_url = "https://ai-recruiter-n5t7.onrender.com";

    const { identifier } = useParams<{ identifier: string }>();


    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setResumeFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!resumeFile) {
            setMessage("Please upload your resume before submitting.");
            return;
        }

        console.log(resumeFile)
        const formData = new FormData();
        formData.append("resume", resumeFile);

        try {
            setLoading(true);
            setMessage("");

            const token = localStorage.getItem("token"); // adjust if needed

            const response = await axios.post(
                `${base_url}/interface/apply/${identifier}/upload-resume`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        ...(token && { Authorization: `Bearer ${token}` }),
                    },
                }
            );

            setMessage("Resume uploaded successfully ✅");
            console.log("Upload success:", response.data);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Upload error:", error.response?.data || error.message);
            } else if (error instanceof Error) {
                console.error("Upload error:", error.message);
            } else {
                console.error("Upload error:", error);
            }
            setMessage("Something went wrong ❌ Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                {/* Header */}
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Apply for Job
                </h1>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Please upload your resume to complete your application.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="resume"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Upload Resume
                        </label>
                        <input
                            type="file"
                            id="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            className="block w-full text-sm text-gray-600
                file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100
                cursor-pointer border border-gray-300 rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700
              text-white font-medium rounded-lg shadow-md
              transition-colors duration-300 disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>

                {/* Feedback */}
                {message && (
                    <p
                        className={`mt-4 text-center text-sm font-medium ${message.includes("success")
                            ? "text-green-600"
                            : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default JobApplication;
