// src/routes/DashboardRouter.tsx
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard"; // your main dashboard page
// import Jobs from "../pages/Job"
import Settings from "../pages/Settings";
import DashboardPage from "../pages/Dashboard-prev";
import Jobs from "../pages/Jobs";
import Job from "../pages/Job";
import JobsDetails from "../pages/JobsDetails";

const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />}>
          <Route path=":jobsId" element={<JobsDetails />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/candidates" element={<Job />} />
        <Route path="/matches" element={<div>Matches & Scoring Page</div>} />
        <Route
          path="/communications"
          element={<div>Communications Page</div>}
        />
        <Route path="/analytics" element={<div>Analytics Page</div>} />
        <Route
          path="/teams-settings"
          element={<div>Teams & Settings Page</div>}
        />
        <Route path="/previous" element={<DashboardPage />} />
      </Routes>
    </DashboardLayout>
  );
};


export default DashboardRouter
