import { ArrowRight, Users } from "lucide-react";
import { useGetAllJobsQuery } from "../redux/jobs/jobsApi";

const JobOpening = () => {
    const { data: jobs, isLoading: jobsLoading } = useGetAllJobsQuery();

    return (
        <div>
            <div className="flex justify-between mb-8 font-semibold pr-6">
                <p>Job Openings</p>
                <div className="flex gap-2 items-center text-xs">
                    <p>View All</p>
                    <ArrowRight />
                </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-x-auto font-semibold">
                <table className="w-full table-auto text-sm text-left">
                    <tbody className="text-gray-700">
                        {(jobs?.data || Array.from({ length: 5 })).map(
                            (job: any, index: number) => (
                                <tr
                                    key={job?.identifier || index}
                                    className="border-t hover:bg-gray-50"
                                >
                                    <td className="px-4 py-3 font-medium">
                                        {jobsLoading ? (
                                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                                        ) : (
                                            job.jobTitle
                                        )}
                                    </td>

                                    <td className="px-4 py-3 flex items-center gap-2">
                                        <Users size={16} className="text-[#1370C8]" />
                                        {jobsLoading ? (
                                            <div className="h-3 w-6 bg-gray-200 rounded animate-pulse" />
                                        ) : (
                                            job.isActive && 1
                                        )}
                                    </td>

                                    <td className="px-4 py-3 text-sm text-gray-500">
                                        {jobsLoading ? (
                                            <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                                        ) : (
                                            job.postedAt
                                        )}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobOpening;
