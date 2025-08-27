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
// import { useAuth } from "../context/Auth";
// import Job from "../pages/Job";
// import Settings from "../pages/Settings";
import DashboardRouter from "./Dashboardrouter";
import Error from "../pages/Error";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { token } = useAuth();

  // Fallback: check localStorage directly
  const savedToken = localStorage.getItem("token");
  // const savedUser = localStorage.getItem("user");

  if (!token && !savedToken) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
