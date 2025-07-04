import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
// import Dashboard from "../pages/Dashboard";
import { useAuth } from "../context/AuthContext";
// import Job from "../pages/Job";
// import Settings from "../pages/Settings";
import DashboardRouter from "./Dashboardrouter";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/sign-up" />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
