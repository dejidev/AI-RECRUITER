import {
    Home,
    Search,
    UserCog
} from "lucide-react";


const Dashboard = () => {
    return (
        <div className="px-4 bg-gray-50">

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
                    <span>Folashade Adewara</span></h1>
            </section>
        </div>
    )
}

export default Dashboard
