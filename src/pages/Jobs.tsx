import {
  ChevronDown,
  Edit2,
  Home,
  Plus,
  Search,
  SlidersHorizontal,
  Trash,
  UserCog,
} from "lucide-react";
import { useEffect, useState } from "react";
import no_job from "../assets/no-job.png";

import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  useGetAllJobsQuery, useDeleteJobMutation,
} from "../redux/jobs/jobsApi";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";







const Jobs = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { data: jobsResponse, isLoading, isError } = useGetAllJobsQuery();
  const [deleteJob] = useDeleteJobMutation();


  const jobs = jobsResponse?.data ?? [];

  const navigate = useNavigate();
  const location = useLocation();

  const [statusFilter, setStatusFilter] = useState<"All" | "Open" | "Closed">(
    "All"
  );
  const [showJobDetails, setShowDetails] = useState<boolean>(false);


  // Map backend `isActive` → status string
  const mappedJobs = jobs.map((j) => ({
    id: j.identifier,
    title: j.jobTitle,
    status: j.isActive ? "Open" : "Closed",
    applicants: j.applicantsCount,
    date: new Date(j.postedAt).toLocaleDateString(),
  }));

  /* Filtered jobs */
  const filteredJobs =
    statusFilter === "All"
      ? mappedJobs
      : mappedJobs.filter((j) => j.status === statusFilter);

  /* Tailwind badge colours by status */
  const statusClasses = {
    Open: "bg-emerald-100 text-emerald-600",
    Closed: "bg-red-100 text-red-600",
    Draft: "bg-gray-200 text-gray-600",
  } as const;

  const handleShowJobOverview = () => {
    setShowDetails(!showJobDetails);
  };


  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await deleteJob(id).unwrap();
      alert("✅ Job deleted successfully");
    } catch (error) {
      console.error("❌ Error deleting job:", error);
      alert("Failed to delete job");
    }
  };


  const handleEdit = (id: string) => {
    navigate(`/dashboard/jobs/update/${id}`);
  };






  useEffect(() => {
    if (location.pathname === "/dashboard/jobs") {
      setShowDetails(false);
    }

  }, [location.pathname]);

  if (isLoading) return <p className="p-6">Loading jobs...</p>;

  if (isError) return <p className="p-6 text-red-500">Error loading jobs.</p>;










  return (
    <div className="px-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between flex-wrap gap-4  py-3 ">
        {/* Left section: Home title */}
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <Home size={18} />
          <h1>Jobs</h1>
        </div>

        {/* Middle section: Search bar */}
        <div className="flex-1 max-w-sm">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
              <Search size={18} className="text-[#1370C8]" />
            </span>
            <input
              type="text"
              placeholder="search job title..."
              className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
            />
          </div>
        </div>

        {/* Right section: Profile */}
        <div className="flex items-center gap-3">
          <div className="bg-green-500 p-2 rounded-full">
            <UserCog size={20} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-gray-800">
              User's Profile
            </p>

            {user ? (
              <p className="text-xs text-gray-500">{user.email}</p>
            ) : (
              <div className="h-3 w-28 bg-gray-200 animate-pulse rounded mt-1"></div>
            )}
          </div>
        </div>
      </div>






      {/* 🔹 Main Section */}
      <section className="mt-16">
        {/* ✅ Jobs List (only on /dashboard/jobs) */}
        {location.pathname === "/dashboard/jobs" && (
          <section className={`mt-16`}>
            <h1 className="gap-3 font-semibold text-xl mb-4">Jobs</h1>

            <div className="flex items-center justify-between w-full mb-4">
              {/* Left: Create New Job Button */}
              <button
                onClick={() => navigate('/dashboard/jobs/create')}
                className="flex items-center gap-2 bg-[#1370C8] text-white px-2 py-2 rounded hover:bg-[#0f5ca7] text-sm">
                <Plus size={16} />
                Create New Job
              </button>


              {/* Right: Filter */}
              <div className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer hover:text-[#1370C8]">
                <SlidersHorizontal size={16} />
                <span>Filter</span>
              </div>
            </div>

            <div className="bg-white p-4">
              <h1 className="flex items-center  font-semibold text-gray-800 text-xl ">
                Jobs
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* Left – All */}
                <span
                  onClick={() => setStatusFilter("All")}
                  className={`text-sm font-medium cursor-pointer ${statusFilter === "All" ? "text-[#1370C8]" : "text-gray-800"
                    }`}
                >
                  All
                </span>

                {/* Middle – Open | Closed | Draft */}
                <div className="flex gap-6 text-sm font-semibold">
                  {["Open", "Closed"].map((label) => (
                    <span
                      key={label}
                      onClick={() => setStatusFilter(label as "Open" | "Closed")}
                      className={`cursor-pointer whitespace-nowrap ${statusFilter === label
                        ? "text-[#1370C8]"
                        : "text-gray-600"
                        }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Right – dropdown buttons */}
                <div className="flex gap-2">
                  {["Job Status", "Department", "Location", "Date-Posted"].map(
                    (label) => (
                      <button
                        key={label}
                        className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {label}
                        <ChevronDown size={14} />
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* ----------------------------------------------------------------
                 Job table
              ---------------------------------------------------------------- */}
              <div className="bg-white shadow rounded-lg overflow-x-auto mt-4">
                <table className="w-full text-sm table-auto">
                  <thead className="bg-[#F6F9FC] text-gray-600 text-xs">
                    <tr>
                      <th className="px-4 py-3 text-left">Job Title</th>
                      <th className="px-4 py-3 text-center">Status</th>
                      <th className="px-4 py-3">Applicants</th>
                      <th className="px-4 py-3">Date Posted</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredJobs.map((job) => (
                      <tr
                        key={job.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => {
                          handleShowJobOverview();
                          navigate(`/dashboard/jobs/${job.id}`);
                        }}
                      >
                        <td className="px-4 py-3">{job.title}</td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded text-xs font-medium ${statusClasses[job.status as keyof typeof statusClasses]
                              }`}
                          >
                            {job.status}
                          </span>
                        </td>


                        <td className="px-4 py-3 text-center">
                          {job.applicants}
                        </td>
                        <td className="px-4 py-3 text-center">{job.date}</td>
                        <td className="px-4 py-3 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // prevent row click navigation
                              handleEdit(job.id);
                            }}
                            className="inline-flex items-center gap-1 text-xs text-[#1370C8] hover:underline mr-2"
                          >
                            <Edit2 size={14} /> Edit
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(job.id);
                            }}
                            className="inline-flex items-center gap-1 text-xs text-red-600 hover:underline"
                          >
                            <Trash size={14} /> Delete
                          </button>
                        </td>

                      </tr>
                    ))}

                    {filteredJobs.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-10">
                          <div className="flex flex-col items-center justify-center text-gray-500 my-8">
                            <img
                              src={no_job}
                              alt="No jobs"
                              className="w-40 h-40 mb-4 opacity-75"
                            />
                            <p className="text-base text-gray-500 ">
                              No jobs match this filter.
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        )}

        {/* ✅ Nested Routes (Job Details / Create Job) */}
        <Outlet />
      </section>
    </div>
  );



};

export default Jobs;
