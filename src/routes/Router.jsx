import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UserManagement from "../page/UserManagement/UserManagement";
import Profile from "../page/Settings/Profile";
import TermsCondition from "../page/Settings/TermsCondition";
import PrivacyPolicy from "../page/Settings/PrivacyPolicy";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";
import Notification from "../page/Notification/Notification";
import Login from "../Auth/Login";
import ForgetPassword from "../Auth/ForgetPass";
import Management from "../page/Management/Management";
import Report from "../page/Report/Report";
import VendorDashboard from "../page/VendorDashboard/VendorDashboard";
import AddNewBar from "../components/VendorDashboard/AddNewBar";
import AddNewEvent from "../components/VendorDashboard/AddNewEvent";
import ManageBar from "../components/VendorDashboard/ManageBar";
import Transaction from "../components/VendorDashboard/Transaction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/UserManagement",
        element: <UserManagement />,
      },
      {
        path: "/dashboard/management",
        element: <Management />,
      },

      {
        path: "/dashboard/report",
        element: <Report />,
      },
      {
        path: "/vendorDashboard",
        element: <VendorDashboard />,
      },
      {
        path: "/vendorDashboard/AddNewBar",
        element: <AddNewBar />,
      },
      {
        path: "/vendorDashboard/AddNewEvent",
        element: <AddNewEvent />,
      },
      {
        path: "/vendorDashboard/ManageBar",
        element: <ManageBar />,
      },
      {
        path: "/vendorDashboard/Transaction",
        element: <Transaction />,
      },
      {
        path: "/dashboard/Settings/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/Settings/notification",
        element: <Notification />,
      },
      {
        path: "/dashboard/Settings/Terms&Condition",
        element: <TermsCondition />,
      },
      {
        path: "/dashboard/Settings/PrivacyPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  // Auth routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/reset-password",
    element: <ResetPass />,
  },
]);
