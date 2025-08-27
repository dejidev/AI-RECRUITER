import { ChevronLeft, Target, Star, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetJobByIdQuery } from "../redux/jobs/jobsApi";


// interface JobProps {
//   job: {
//     jobTitle: string;
//     jobDescription: string;
//     category: string;
//     location: string;
//     employmentType: string;
//     experienceLevel: string;
//     deadline: string;
//     responsibilities: string;
//     requirements: string;
//     benefits: string;
//     currency: string;
//     salaryMin: number | null;
//     salaryMax: number | null;
//     applicationLink: string;
//   };
// }


export default function JobsDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // get jobId from URL



  const { data: job, isLoading, isError } = useGetJobByIdQuery(id!);

  const jobs = job?.data;

  console.log(job?.data)
  const [showJobDescription, setShowJobDescription] = useState<boolean>(false);

  if (isLoading) {
    return (
      <section className="mt-16 bg-white p-5 rounded-2xl min-h-screen">
        <p className="text-gray-500">Loading job details...</p>
      </section>
    );
  }

  if (isError || !job) {
    return (
      <section className="mt-16 bg-white p-5 rounded-2xl min-h-screen">
        <p className="text-red-500">Failed to load job details.</p>
      </section>
    );
  }



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

      {/* Title + Posted Time */}
      <div className="flex items-center gap-5 mb-3">
        <h1 className="text-3xl font-semibold">{job?.data.jobTitle}</h1>
        <small className="bg-blue-100 text-blue-600 p-[5px] rounded-md">
          Posted {/* replace with your util fn */} {job?.data.createdAt}
        </small>
      </div>

      <p className="text-[#64748B] mb-3">
        {job?.data.category} • {job?.data.location} • {job?.data.identifier}
      </p>

      <p className="text-[#64748B] flex items-center gap-10 mb-3">
        <span>Status : </span>
        <span
          className={`px-[3px] rounded-md ${job?.data.isActive
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
            }`}
        >
          {job?.data.isActive ? "Active" : "Inactive"}
        </span>
      </p>

      {/* Applicants Info */}
      <ul className="flex gap-5">
        <li className="flex gap-2">
          <Users color="#2c99ed" />
          {job?.data.applicants?.length ?? 0} Applicants
        </li>
        <li className="flex gap-2">
          <Star stroke="yellow" fill="yellow" /> {job?.data.shortlisted ?? 0} Shortlisted
        </li>
        <li className="flex gap-2">
          <Target color="#ed2c35" /> {job?.data.avgFit ?? 0}% Avg Fit
        </li>
      </ul>

      {/* Job Overview & Description Tabs */}
      <div className="flex gap-10 mt-5">
        <ul>
          <p
            className={`mb-5 cursor-pointer ${!showJobDescription && "text-[#2c99ed] font-semibold"
              }`}
            onClick={() => setShowJobDescription(false)}
          >
            Job Overview
          </p>

          {!showJobDescription && (
            <>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Job Title: </span>
                <span>{job?.data.jobTitle}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Category: </span>
                <span>{job?.data.category}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Location: </span>
                <span>{job?.data?.jobLocation}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Date Posted: </span>
                <span>{job?.data.createdAt?.split("T")[0]}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Deadline: </span>
                <span>{job?.data.deadline}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Type: </span>
                <span>{job?.data.employmentType}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Experience: </span>
                <span>{job?.data.experienceLevel}</span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Salary Range: </span>
                <span>
                  {job?.data.salaryMin && job?.data.salaryMax
                    ? `${job.data.salaryMin} - ${job.data.salaryMax} ${job.data.currency}`
                    : "Not specified"}
                </span>
              </li>
              <li className="flex gap-3 mb-3">
                <span className="text-[#64748B]">Job ID: </span>
                <span>{job?.data.identifier}</span>
              </li>
            </>
          )}
        </ul>

        {/* Job Description */}
        <ul>
          <p
            className={`mb-5 cursor-pointer ${showJobDescription && "text-[#2e99dc] font-bold"
              }`}
            onClick={() => setShowJobDescription(true)}
          >
            Job Description
          </p>
          {showJobDescription && (
            <div>
              <p className="text-gray-700">{job?.data.jobDescription}</p>
              <p className="mt-4">
                <strong>Responsibilities:</strong> {job?.data.responsibilities}
              </p>
              <p className="mt-2">
                <strong>Requirements:</strong> {job?.data.requirements}
              </p>
              <p className="mt-2">
                <strong>Benefits:</strong> {job?.data.benefits}
              </p>
              {/* <a
                href={job?.data.applicationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline"
              >
                Apply Here
              </a> */}

              <p className="inline-block mt-4 ">
                <span>Apply Here:</span>  <span className="text-blue-600 hover:underline"> {job?.data.applicationLink}</span>
              </p>

            </div>
          )}
        </ul>
      </div>
    </section>

  );
}
