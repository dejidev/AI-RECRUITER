import {
    Briefcase,
    Users,
    BarChart2,
    TrendingUp,
    CheckCircle,
    XCircle,
} from "lucide-react";
import { useGetAllJobsQuery } from "../redux/jobs/jobsApi";
import { useGetApplicationsQuery } from "../redux/application/applicationApi";
import { useGetRolesQuery } from "../redux/role-match/rolematching";
import { Card, CardContent } from "../components/ui/card";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const COLORS = ["#1370C8", "#22C55E", "#EF4444", "#FACC15"];

const Analytics = () => {
    const { data: jobs } = useGetAllJobsQuery();
    const { data: applications } = useGetApplicationsQuery();
    const { data: roles } = useGetRolesQuery();

    // Define the Application type based on expected structure
    type Application = {
        status: string;
        // add other fields if needed
    };

    // Example stats
    const totalJobs = jobs?.data?.length || 0;
    const totalApplications = applications?.length || 0;
    const aiMatches = roles?.roles?.length || 0;
    // const accepted = applications?.filter((a: Application) => a.status === "accepted").length || 0;
    const rejected = applications?.filter((a: Application) => a.status === "rejected").length || 0;
    const applied = applications?.filter((a: Application) => a.status === "applied").length || 0;
    const interview = applications?.filter((a: Application) => a.status === "interview").length || 0;
    const hired = applications?.filter((a: Application) => a.status === "hired").length || 0;

    // Line chart data (mocking trend by month — you can map backend data if available)
    const applicationsTrend = [
        { month: "Jan", applications: 5 },
        { month: "Feb", applications: 10 },
        { month: "Mar", applications: 7 },
        { month: "Apr", applications: totalApplications },
    ];

    // Pie chart breakdown
    const applicationStatus = [
        { name: "Applied", value: applied },
        { name: "Rejected", value: rejected },
        { name: "Interview", value: interview },
        { name: "Hired", value: hired },
        // { name: "Pending", value: totalApplications - (accepted + rejected) },
    ];

    const cards = [
        {
            title: "Job Postings",
            desc: "Active jobs listed",
            icon: <Briefcase size={22} />,
            value: totalJobs,
        },
        {
            title: "Applications",
            desc: "Total candidates applied",
            icon: <Users size={22} />,
            value: totalApplications,
        },
        {
            title: "AI Matches",
            desc: "Matches found by AI",
            icon: <BarChart2 size={22} />,
            value: aiMatches,
        },
        {
            title: "Success Rate",
            desc: "Applications",
            icon: <TrendingUp size={22} />,
            value: totalApplications
                ? `${Math.round((hired / totalApplications) * 100)}%`
                : "0%",
        },
    ];

    return (
        <div className="px-6 py-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-8 text-gray-800 flex items-center gap-2">
                <BarChart2 className="text-[#1370C8]" /> Analytics Dashboard
            </h1>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {cards.map((c) => (
                    <Card key={c.title} className="shadow-md rounded-2xl">
                        <CardContent className="p-5">
                            <div className="flex items-center gap-3 text-[#1370C8] mb-3">
                                {c.icon}
                                <h2 className="font-semibold text-gray-700">{c.title}</h2>
                            </div>
                            <p className="text-3xl font-bold text-gray-800">{c.value}</p>
                            <p className="text-sm text-gray-500">{c.desc}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Line Chart */}
                <Card className="shadow-md rounded-2xl">
                    <CardContent className="p-5">
                        <h2 className="font-semibold mb-4">Applications Over Time</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={applicationsTrend}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="applications" stroke="#1370C8" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Pie Chart */}
                <Card className="shadow-md rounded-2xl">
                    <CardContent className="p-5">
                        <h2 className="font-semibold mb-4">Application Status Breakdown</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={applicationStatus}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    dataKey="value"
                                    label
                                >
                                    {applicationStatus.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="flex gap-4 justify-center mt-4">
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle size={18} /> Applied: {applied}
                            </div>
                            <div className="flex items-center gap-2 text-yellow-600">
                                <XCircle size={18} /> Interview: {interview}
                            </div>
                        </div>
                        <div className="flex gap-4 justify-center mt-4">
                            <div className="flex items-center gap-2 text-blue-600">
                                <CheckCircle size={18} /> Hired: {hired}
                            </div>
                            <div className="flex items-center gap-2 text-red-600">
                                <XCircle size={18} /> Rejected: {rejected}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Analytics;
