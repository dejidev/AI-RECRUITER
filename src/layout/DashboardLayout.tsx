import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/DashBoardHeader"

const DashboardLayout = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader />
            <main className="flex-1 p-4">
                {/* Use children if passed, otherwise use Outlet for nested routing */}
                {children || <Outlet />}
            </main>
        </div>
    )
}

export default DashboardLayout;
