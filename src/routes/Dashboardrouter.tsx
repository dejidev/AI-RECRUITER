// src/routes/DashboardRouter.tsx
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard"; // your main dashboard page
// import Jobs from "../pages/Job"
import Settings from "../pages/Settings";
import DashboardPage from "../pages/Dashboard-prev";
import Jobs from "../pages/Jobs";
// import Job from "../pages/Job";
import JobsDetails from "../pages/JobsDetails";
import CreateJobs from "../pages/CreateJobs";
import UpdateJobs from "../pages/UpdateJobs";
import Candidate from "../pages/Candidate";
import Matches from "../pages/Matches";
import Communication from "../pages/Communication";
import Analytics from "../pages/Analytics";
import TeamSettings from "../pages/TeamSettings";
// import SignOutButton from "../components/SignOutButton";

const DashboardRouter = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/jobs" element={<Jobs />}>
          <Route path=":id" element={<JobsDetails />} />
          <Route path="create" element={<CreateJobs />} />
          <Route path="update">
            <Route path=":id" element={<UpdateJobs />} />
          </Route>
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/candidates" element={<Candidate />} />
        <Route path="/matches" element={<Matches/>} />
        <Route
          path="/communications"
          element={<Communication/>}
        />
        <Route path="/analytics" element={<Analytics/>} />
        <Route
          path="/teams-settings"
          element={<TeamSettings/>}
        />
        <Route path="/previous" element={<DashboardPage />} />
        {/* <Route path="/logout" element={<SignOutButton />} /> */}
      </Routes>
    </DashboardLayout>
  );
};


export default DashboardRouter
