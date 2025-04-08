import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UserManagement from "../page/UserManagement/UserManagement";
import CreatorManagement from "../page/CreatorManagement/CreatorManagement";
import Subscription from "../page/Subscription/Subscription";
import Profile from "../page/Settings/Profile";
import TermsCondition from "../page/Settings/TermsCondition";
import FAQ from "../page/Settings/FAQ";
import PrivacyPolicy from "../page/Settings/PrivacyPolicy";
import Categories from "../page/CategoriesManagement/Categories";
import Subcategory from "../page/CategoriesManagement/Subcategory";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";
import Notification from "../page/Notification/Notification";
import About from "../page/Settings/About";
import Login from "../Auth/Login";
import ForgetPassword from "../Auth/ForgetPass";

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
        path: "/dashboard/CreatorManagement",
        element: <CreatorManagement />,
      },
      {
        path: "/dashboard/CategoriesManagement/Categories",
        element: <Categories />,
      },
      {
        path: "/dashboard/CategoriesManagement/Subcategory",
        element: <Subcategory />,
      },
      {
        path: "/dashboard/Subscription",
        element: <Subscription />,
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
        path: "/dashboard/Settings/FAQ",
        element: <FAQ />,
      },
      {
        path: "/dashboard/Settings/aboutUs",
        element: <About />,
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
