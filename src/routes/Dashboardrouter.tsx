// src/routes/DashboardRouter.tsx
import { Route, Routes } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/Dashboard" // your main dashboard page
import Jobs from "../pages/Job"
import Settings from "../pages/Settings"

const DashboardRouter = () => {
    return (
        // <Routes>
        //     <Route path="/" element={<DashboardLayout />}>
        //         <Route index element={<Dashboard />} /> {/* this will show at /dashboard */}
        //         <Route path="jobs" element={<Jobs />} />
        //         <Route path="settings" element={<Settings />} />
        //     </Route>
        // </Routes>

        <DashboardLayout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </DashboardLayout>

    )
}

export default DashboardRouter
