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


    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import PipelineCard from "../components/PipelineCard";
import JobOpening from "../components/JobOpening";


interface JobCardProps {
    /** Icon (Lucide or any JSX) */
    icon: JSX.Element;
    title_desc: string;
    /** Card title – e.g. "Job Posting" */
    title: string;
    /** Number of active jobs */
    active: number;
    /** Date string – e.g. "04 Jul 2025" */
    date: string;
    /** Where “View Data” should point to */
    to?: string;
}


const cards = [
    {
        title: "Job Posting",
        title_desc: "Active jobs",
        icon: <Briefcase size={20} />,
        active: 12,
        date: "04 Jul 2025",
        to: "/jobs",
    },
    {
        title: "Application Received",
        title_desc: "Total Applicants",
        icon: <Users size={20} />,
        active: 87,
        date: "04 Jul 2025",
        to: "/candidates",
    },
    {
        title: "AI Match",
        title_desc: "AI Match Quality",
        icon: <BarChart2 size={20} />,
        active: 5,
        date: "04 Jul 2025",
        to: "/analytics",
    },
];



const actionCards = [
    {
        title: "Create Job",
        icon: <PlusCircle size={24} />,
        subtitle: "Add job title & details",
        description: "Post new job openings here",
    },
    {
        title: "Add Description",
        icon: <FileText size={24} />,
        subtitle: "Write job summaries",
        description: "Clearly define job expectations",
    },
    {
        title: "Assign Requirements",
        icon: <ClipboardList size={24} />,
        subtitle: "Add qualifications",
        description: "List what candidates must have",
    },
    {
        title: "Organize Roles",
        icon: <Layers size={24} />,
        subtitle: "Group job roles",
        description: "Structure positions into departments",
    },
    {
        title: "Preview Job",
        icon: <Eye size={24} />,
        subtitle: "View before publishing",
        description: "Double-check all job details",
    },
    {
        title: "Manage Jobs",
        icon: <Settings size={24} />,
        subtitle: "Update or close listings",
        description: "Keep job posts up to date",
    },
];









const Dashboard = () => {

    return (
        <div className="px-4 bg-gray-50 min-h-screen">

            <div className="flex items-center justify-between flex-wrap gap-4  py-3 ">
                {/* Left section: Home title */}
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                    <Home size={18} className="" />
                    <h1>Home</h1>
                </div>

                {/* Middle section: Search bar */}
                <div className="flex-1 max-w-sm">
                    <div className="relative w-full">
                        <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
                            <Search size={18} className="text-[#1370C8]" />
                        </span>
                        <input
                            type="text"
                            placeholder="search job titile..."
                            className="w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>
                </div>

                {/* Right section: Profile */}
                <div className="flex items-center gap-3">
                    {/* <img
                        src={}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    /> */}

                    <div className="bg-green-500 p-2 rounded-full">
                        <UserCog size={20} />
                    </div>
                    <div className="leading-tight">
                        <p className="text-sm font-medium text-gray-800">Jane Doe</p>
                        <p className="text-xs text-gray-500">jane.doe@example.com</p>
                    </div>
                </div>
            </div>

            <section className="mt-16">
                <h1 className="gap-3 font-semibold text-xl">
                    <span>Welcome, </span>
                    <span>Folashade Adewara</span>
                </h1>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {cards.map(({ icon, title, active, date, to, title_desc }) => (
                        <div key={title} className="bg-white shadow rounded-lg p-5">
                            {/* Header */}
                            <div className="flex items-center gap-2 text-[#1370C8] ">
                                <span className="bg-[#B6D3EE4D] p-2 rounded-lg ">{icon}</span>
                                <span className="font-medium text-gray-700">{title}</span>
                            </div>

                            {/* Active jobs */}
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">{title_desc}</p>
                                <p className="text-3xl font-bold text-gray-800">{active}</p>
                            </div>

                            {/* Divider */}
                            <hr className="my-4 border-gray-200" />

                            {/* Footer */}
                            <div className="flex items-center justify-between text-sm">
                                <Link to={to} className="text-[#1370C8] hover:underline">
                                    View Data
                                </Link>
                                <span className="text-gray-400">{date}</span>
                            </div>
                        </div>
                    ))}
                </div>







            </section>






            <section className="mt-16 ">
                <p className="font-semibold mb-4">Shortcut</p>

                <div>
                    {/* --- one‑line container: buttons + swiper --- */}
                    <div className="flex items-center gap-2">
                        {/* Prev button */}
                        <button
                            className="swiper-prev p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-[#1370C8]"
                            aria-label="Previous"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Swiper */}
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".swiper-prev",
                                nextEl: ".swiper-next",
                            }}
                            spaceBetween={16}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: { slidesPerView: 2.2 },
                                1024: { slidesPerView: 3.2 },
                            }}
                            className="flex-1"
                        >
                            {actionCards.map(({ icon, title, subtitle, description }) => (
                                <SwiperSlide key={title}>
                                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                                        <div className="text-[#1370C8] mb-4">{icon}</div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-1">{subtitle}</p>
                                        <p className="text-xs text-gray-400">{description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Next button */}
                        <button
                            className="swiper-next p-2 rounded-full border border-gray-300 hover:bg-gray-100"
                            aria-label="Next"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </section>







            <section className="mt-16 flex justify-center gap-8 ">


                <JobOpening />




                <PipelineCard />



            </section>
        </div>
    )
}

export default Dashboard
