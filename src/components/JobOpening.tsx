import {
    ArrowRight,
    Users
} from "lucide-react";
import { useGetAllJobsQuery } from "../redux/jobs/jobsApi";

const roleTableData = [
    { role: "Frontend Developer", users: 12, date: "2025-07-04" },
    { role: "Backend Developer", users: 9, date: "2025-07-02" },
    { role: "Product Manager", users: 5, date: "2025-07-01" },
    { role: "UI/UX Designer", users: 7, date: "2025-06-30" },
    { role: "QA Engineer", users: 3, date: "2025-06-28" },
];




const JobOpening = () => {

    const { data: jobs, isLoading: jobsloading } = useGetAllJobsQuery()

    // console.log(jobs?.data)


  return (
      <div className="w-1/2 ">
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
                      {jobs?.data.map(({ identifier, jobTitle, isActive, postedAt}) => (
                          <tr key={identifier} className="border-t hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium">{jobTitle}</td>
                              <td className="px-4 py-3 flex items-center gap-2">
                                  <Users size={16} className="text-[#1370C8]" />
                                  {isActive && 1}
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-500">{postedAt}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>


      </div>

  )
}

export default JobOpening
