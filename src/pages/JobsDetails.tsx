import { ChevronLeft } from "lucide-react";
import { Target } from "lucide-react";
import { Star } from "lucide-react";
import { Users } from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function JobsDetails() {
  const naviagate = useNavigate();

  const [showJobDescription, setShowJobDescription] = useState<boolean>(false);

  const handleShowJobDescription = () => {
    setShowJobDescription(true);
  };

  return (
    <section className="mt-16 bg-white p-5 rounded-2xl min-h-screen">
      <p
        className="text-[#64748B] flex cursor-pointer mb-3"
        onClick={() => naviagate(-1)}
      >
        <span>
          <ChevronLeft />
        </span>
        <span>Back to all Jobs</span>
      </p>
      <div className="flex items-center gap-5 mb-3">
        <h1 className="text-3xl font-semibold">Product Designer</h1>
        <small className="bg-blue-100 text-blue-600 p-[5px] rounded-md">
          Posted 2 weeks ago
        </small>
      </div>

      <p className="text-[#64748B] mb-3">Design . Remote . #JD-2025-0013</p>
      <p className="text-[#64748B] flex items-center gap-10 mb-3">
        <span>Status : </span>
        <span className="bg-blue-100 text-blue-600 px-[3px] rounded-md">
          Open
        </span>
      </p>
      <ul className="flex gap-5">
        <li className="flex gap-2">
          <Users color="#2c99ed" />
          32 Applicants
        </li>
        <li className="flex gap-2">
          <Star stroke="yellow" fill="yellow" /> 5 Shortlisted
        </li>
        <li className="flex gap-2">
          <Target color="#ed2c35" />
          13% Avg Fit
        </li>
      </ul>

      <div className="flex gap-10 mt-5">
        <ul>
          <p
            className={`mb-5 cursor-pointer ${
              !showJobDescription && "text-[#2c99ed] font-semibold"
            }`}
            onClick={() => setShowJobDescription(false)}
          >
            Job Overview
          </p>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Job Title: </span>
            <span>Product Design</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Department: </span>
            <span>Design</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Location: </span>
            <span>Remote</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Date Posted: </span>
            <span>June 1 2025</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Deadline: </span>
            <span>June 30 2025</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Type: </span>
            <span>Fulltime</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Experience: </span>
            <span>Mid-Level (3-5) years</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Salary Range: </span>
            <span>#350 - #500 / month</span>
          </li>
          <li className="flex gap-3 mb-3">
            <span className="text-[#64748B]">Job ID: </span>
            <span>#JD -2025-0013</span>
          </li>
        </ul>

        <ul>
          <p
            className={`mb-5 cursor-pointer ${
              showJobDescription && "text-[#2e99dc] font-bold"
            }`}
            onClick={handleShowJobDescription}
          >
            Job Description
          </p>
          <div className={`${!showJobDescription && "hidden"}`}>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Job Title: </span>
              <span>Product Design</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Department: </span>
              <span>Design</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Location: </span>
              <span>Remote</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Date Posted: </span>
              <span>June 1 2025</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Deadline: </span>
              <span>June 30 2025</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Type: </span>
              <span>Fulltime</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Experience: </span>
              <span>Mid-Level (3-5) years</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Salary Range: </span>
              <span>#350 - #500 / month</span>
            </li>
            <li className="flex gap-3 mb-3">
              <span className="text-[#64748B]">Job ID: </span>
              <span>#JD -2025-0013</span>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}
