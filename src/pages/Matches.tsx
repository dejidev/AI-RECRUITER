import React from 'react'
import { useState } from "react";
import axios from "axios";


const Matches = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<any>(null);
    const [message, setMessage] = useState("");

    const base_url = "https://ai-recruiter-n5t7.onrender.com/interface"; // update if needed

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) setFiles(e.target.files);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!jobTitle || !jobDescription || !files) {
            setMessage("Job title, description and at least one resume are required.");
            return;
        }

        const formData = new FormData();
        formData.append("job_title", jobTitle);
        formData.append("job_description", jobDescription);
        Array.from(files).forEach((file) => {
            formData.append("resumes", file); // 👈 backend must expect this key
        });

        try {
            setLoading(true);
            setMessage("");
            const res = await axios.post(`${base_url}/roles-matching`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setResponse(res.data);
            setMessage("Analysis completed successfully!");
        } catch (err: any) {
            console.error("Upload error:", err.response?.data || err.message);
            setMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
  return (
      <div className="flex items-center justify-center min-h-screen  bg-gray-50 px-4"> 
      {/* // bg-gradient-to-br from-blue-50 to-indigo-100  */}
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
              {/* Header */}
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                  Role Matching & Applicant Analysis
              </h1>
              <p className="text-center text-gray-600 mb-6 text-sm">
                  Provide the job details and upload candidate resumes to analyze matches.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Title
                      </label>
                      <input
                          type="text"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                          placeholder="e.g. Software Engineer"
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Description
                      </label>
                      <textarea
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                          rows={4}
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                          placeholder="Describe the role, requirements, responsibilities..."
                      />
                  </div>

                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Resumes
                      </label>
                      <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          multiple
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
                      {loading ? "Analyzing..." : "Submit for Matching"}
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

              {/* Results */}
              {response?.results && (
                  <div className="mt-8">
                      <h2 className="text-xl font-semibold text-gray-800 mb-4">
                          Top Matches
                      </h2>
                      <div className="grid gap-4">
                          {response.results.top_matches.map((match: any, idx: number) => (
                              <div
                                  key={idx}
                                  className="border rounded-lg p-4 shadow-sm bg-gray-50"
                              >
                                  <div className="flex justify-between items-center">
                                      <h3 className="text-lg font-bold text-indigo-700">
                                          {match.name}
                                      </h3>
                                      <span className="text-sm font-semibold text-gray-600">
                                          Score: {match.matchScore}%
                                      </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-2">{match.title}</p>

                                  <h4 className="font-semibold text-gray-700">Key Strengths:</h4>
                                  <ul className="list-disc pl-5 text-sm text-gray-600 mb-2">
                                      {match.keyStrengths.map((s: string, i: number) => (
                                          <li key={i}>{s}</li>
                                      ))}
                                  </ul>

                                  <h4 className="font-semibold text-gray-700">
                                      Areas for Consideration:
                                  </h4>
                                  <ul className="list-disc pl-5 text-sm text-gray-600">
                                      {match.areasForConsideration.map((a: string, i: number) => (
                                          <li key={i}>{a}</li>
                                      ))}
                                  </ul>
                              </div>
                          ))}
                      </div>
                  </div>
              )}
          </div>
      </div>
  )
}

export default Matches
