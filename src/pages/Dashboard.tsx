// pages/Dashboard.tsx
import {
    Home,
    Search,
    UserCog,
    Briefcase,
    Users,
    BarChart2,
    PlusCircle,
    FileText,
    ClipboardList,
    Layers,
    Eye,
    Settings,

} from "lucide-react";
import { Link } from "react-router-dom";

import PipelineCard from "../components/PipelineCard";
import JobOpening from "../components/JobOpening";
import { useGetApplicationsQuery } from "../redux/application/applicationApi";
import { useGetRolesQuery } from "../redux/role-match/rolematching";
import { useGetAllJobsQuery } from "../redux/jobs/jobsApi";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import ResponsiveCarousel from "../components/ResponsiveCarousel";

/* ------------------------------------------------------------------ */
/*  Data (unchanged)                                                   */
/* ------------------------------------------------------------------ */
const actionCards = [
    { title: "Create Job", icon: <PlusCircle size={24} />, subtitle: "Add job title & details", description: "Post new job openings here" },
    { title: "Add Description", icon: <FileText size={24} />, subtitle: "Write job summaries", description: "Clearly define job expectations" },
    { title: "Assign Requirements", icon: <ClipboardList size={24} />, subtitle: "Add qualifications", description: "List what candidates must have" },
    { title: "Organize Roles", icon: <Layers size={24} />, subtitle: "Group job roles", description: "Structure positions into departments" },
    { title: "Preview Job", icon: <Eye size={24} />, subtitle: "View before publishing", description: "Double-check all job details" },
    { title: "Manage Jobs", icon: <Settings size={24} />, subtitle: "Update or close listings", description: "Keep job posts up to date" },
];




/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
const Dashboard = () => {
    const user = useSelector((state: RootState) => state.auth.user);

    const { data: roles, isLoading: rolesloading } = useGetRolesQuery();
    const { data: jobs, isLoading: jobsloading } = useGetAllJobsQuery();
    const { data: applications, isLoading: applicationsloading } = useGetApplicationsQuery();

    const isLoadingAny = rolesloading || jobsloading || applicationsloading;

    const cards = [
        { title: "Job Posting", title_desc: "Active jobs", icon: <Briefcase size={20} />, active: jobs?.data?.length ?? 0, date: "04 Jul 2025", to: "/dashboard/jobs" },
        { title: "Application Received", title_desc: "Total Applicants", icon: <Users size={20} />, active: applications?.length ?? 0, date: "04 Jul 2025", to: "/dashboard/candidates" },
        { title: "AI Match", title_desc: "AI Match Quality", icon: <BarChart2 size={20} />, active: roles?.roles?.length ?? 0, date: "04 Jul 2025", to: "/dashboard/analytics" },
    ];



    return (
        <div className="px-4 bg-gray-50 min-h-screen">

            <div className="flex items-center justify-between flex-wrap gap-4 py-3 ">
                {/* Left */}
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                    <Home size={18} />
                    <h1>Home</h1>
                </div>

                {/* Search */}
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

                {/* Profile */}
                <div className="flex items-center gap-3">
                    <div className="bg-green-500 p-2 rounded-full">
                        <UserCog size={20} />
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-medium text-gray-800">User's Profile</p>
                        {user ? (
                            <p className="text-xs text-gray-500">{user.email}</p>
                        ) : (
                            <div className="h-3 w-28 bg-gray-200 animate-pulse rounded mt-1" />
                        )}
                    </div>
                </div>
            </div>

            {/* Stats */}
            <section className="mt-16">
                <h1 className="gap-3 font-semibold text-xl mb-4">
                    <span>Welcome, </span>
                    <span>{user?.email}</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {cards.map(({ icon, title, active, date, to, title_desc }) => (
                        <div key={title} className="bg-white shadow rounded-lg p-5">
                            <div className="flex items-center gap-2 text-[#1370C8] ">
                                <span className="bg-[#B6D3EE4D] p-2 rounded-lg ">{icon}</span>
                                <span className="font-medium text-gray-700">{title}</span>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm text-gray-500">{title_desc}</p>

                                {/* ONLY the number shows a skeleton when loading */}
                                <p className="text-3xl font-bold text-gray-800">
                                    {isLoadingAny ? (
                                        <span className="inline-block h-8 w-20 bg-gray-200 rounded animate-pulse" />
                                    ) : (
                                        active ?? 0
                                    )}
                                </p>
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <div className="flex items-center justify-between text-sm">
                                <Link to={to} className="text-[#1370C8] hover:underline">View Data</Link>
                                <span className="text-gray-400">{date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>




            {/* Shortcut / Carousel */}
            <section className="mt-16">
                <p className="font-semibold mb-4">Shortcut</p>

                <div>
                    <ResponsiveCarousel cards={actionCards} gap={16} />
                </div>
            </section>



            {/* Bottom area */}
            <section className="mt-16 flex flex-col lg:flex-row items-start gap-8 pb-16">
                <div className="flex-1">
                    <JobOpening />
                </div>
                <div className="w-full lg:w-96">
                    <PipelineCard />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
