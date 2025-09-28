import { Search, UserCog, Users } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import ApplicationsBoard from "../components/ApplicationBoard";

export default function Candidate() {
  // 👇 Get user from Redux store
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="px-4 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between flex-wrap gap-4 py-3">
        {/* Left section: Home title */}
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <Users size={18} />
          <h1>Candidates</h1>
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

      <section className="mt-16">
        <ApplicationsBoard />
      </section>
    </div>
  );
}
