import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
// import DashboardLayout from "../components/DashboardLayout.jsx";

import Home from "../features/home/pages/Home.jsx";
import LoginPage from "../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../features/auth/pages/RegisterPage.jsx";

// // import Dashboard from "../features/dashboard/pages/Dashboard.jsx";
// import UploadResume from "../features/dashboard/pages/UploadResume.jsx";
// import MyResumes from "../features/dashboard/pages/MyResumes,jsx";
// import Profile from "../features/dashboard/pages/Profile.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Landing Pages */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Dashboard */}
      {/* <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/upload" element={<UploadResume />} />
        <Route path="/dashboard/resumes" element={<MyResumes />} />
        <Route path="/dashboard/profile" element={<Profile />} />
      </Route> */}
    </>
  )
);