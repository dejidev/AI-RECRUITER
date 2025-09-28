// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import LandingPage from "../pages/LandingPage";
// import SignUp from "../pages/SignUp";
// import SignIn from "../pages/SignIn";
// // import Dashboard from "../pages/Dashboard";
// // import { useAuth } from "../context/Auth";
// // import Job from "../pages/Job";
// // import Settings from "../pages/Settings";
// import DashboardRouter from "./Dashboardrouter";
// import Error from "../pages/Error";
// import { useAuth } from "../context/useAuth";
// import JobApplicationForm from "../pages/JobApplication";

// const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
//   const { token } = useAuth();

//   // Fallback: check localStorage directly
//   const savedToken = localStorage.getItem("token");
//   // const savedUser = localStorage.getItem("user");

//   if (!token && !savedToken) {
//     return <Navigate to="/signin" replace />;
//   }

//   return children;
// };


// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/apply/:identifier" element={<JobApplicationForm />} />
//         <Route
//           path="/dashboard/*"
//           element={
//             <ProtectedRoute>
//               <DashboardRouter />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;




// // routes/AppRoutes.tsx
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState } from "../redux/store";
// import LandingPage from "../pages/LandingPage";
// // import SignUp from "../pages/SignUp";
// // import SignIn from "../pages/SignIn";
// import DashboardRouter from "./Dashboardrouter";
// import Error from "../pages/Error";
// import JobApplicationForm from "../pages/JobApplication";
// import SignIn from "../components/SignIn";
// import SignUp from "../components/SignUp";

// import { restoreCredentials, setLoading } from "../redux/auth/authSlice";
// import { useEffect, useState } from "react";

// // Loading Component
// const LoadingScreen = () => (
//   <div className="min-h-screen flex items-center justify-center">
//     <div className="flex flex-col items-center space-y-4">
//       <svg
//         className="animate-spin h-12 w-12 text-blue-600"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         />
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//         />
//       </svg>
//       <p className="text-gray-600">Loading...</p>
//     </div>
//   </div>
// );

// // Protected Route Component
// const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
//   const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/signin" replace />;
//   }

//   return children;
// };

// // Public Route Component (redirects to dashboard if authenticated)
// const PublicRoute = ({ children }: { children: React.ReactElement }) => {
//   const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

//   if (isLoading) {
//     return <LoadingScreen />;
//   }

//   if (isAuthenticated) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   return children;
// };

// const AppRoutes = () => {
//   const dispatch = useDispatch();

//   // local guard so we don't render Routes until we restore from localStorage
//   const [restored, setRestored] = useState(false);

//   useEffect(() => {
//     // synchronous restore from localStorage
//     dispatch(setLoading(true));          // show LoadingScreen inside Protected/Public routes
//     dispatch(restoreCredentials());      // reads localStorage into Redux state
//     dispatch(setLoading(false));         // done
//     setRestored(true);                   // allow route tree to render
//   }, [dispatch]);

//   // block route rendering until we have attempted restore
//   if (!restored) {
//     return <LoadingScreen />;
//   }

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />

//         {/* Auth Routes - Redirect to dashboard if already authenticated */}
//         <Route
//           path="/signup"
//           element={
//             <PublicRoute>
//               <SignUp />
//             </PublicRoute>
//           }
//         />

//         <Route
//           path="/signin"
//           element={
//             <PublicRoute>
//               <SignIn />
//             </PublicRoute>
//           }
//         />

//         {/* Job Application - Public route for external candidates */}
//         <Route path="/apply/:identifier" element={<JobApplicationForm />} />

//         {/* Protected Dashboard Routes */}
//         <Route
//           path="/dashboard/*"
//           element={
//             <ProtectedRoute>
//               <DashboardRouter />
//             </ProtectedRoute>
//           }
//         />

//         {/* Error/404 Route */}
//         <Route path="*" element={<Error />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;









// routes/AppRoutes.tsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { restoreCredentials } from "../redux/auth/authSlice";

import LandingPage from "../pages/LandingPage";
import DashboardRouter from "./Dashboardrouter";
import Error from "../pages/Error";
import JobApplicationForm from "../pages/JobApplication";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

// Loading Component
const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <svg
        className="animate-spin h-12 w-12 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

// Public Route Component
const PublicRoute = ({ children }: { children: React.ReactElement }) => {
  const { isAuthenticated, isLoading } = useSelector(
    (state: RootState) => state.auth
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  // ✅ Restore session from sessionStorage on mount
  useEffect(() => {
    dispatch({ type: "auth/setLoading", payload: true });
    dispatch(restoreCredentials());
    dispatch({ type: "auth/setLoading", payload: false });
  }, [dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />

        {/* Job Application */}
        <Route path="/apply/:identifier" element={<JobApplicationForm />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRouter />
            </ProtectedRoute>
          }
        />

        {/* Error/404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
