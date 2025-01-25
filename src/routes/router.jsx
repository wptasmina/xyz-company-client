import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Page/ErrorPage";
import JoinEmployee from "../Page/Join-Employees/JoinEmployee";
import MyAssets from "../Page/Employee/MyAssets";
import MyTeam from "../Page/Employee/MyTeam";
import RequestAsset from "../Page/Employee/RequestAsset";
import All_Requests from "../Page/HR-Manager/All_Requests";
import Asset_List from "../Page/HR-Manager/Asset_List";
import My_Employee_List from "../Page/HR-Manager/My_Employee_List";
import Profile from "../Page/HR-Manager/Profile";
import LoginPage from "../Page/LoginPage";
import Register from "../Page/Register";
import Home from "../Page/Home";
import Join_HR from "../Page/Join-HR-Manager/Join_HR";
import MainLayouts from "../layouts/MainLayouts";
import Dashborad from "../Page/Dashborad/Dashborad";
import Add_Asset from "../Page/HR-Manager/Add_Asset";
import Add_Employee from "../Page/HR-Manager/Add_Employee";
import UpdateAsset from "../Page/HR-Manager/UpdateAsset";
import Admin_dashbord from "../Page/Admin-dashbord/Admin_dashbord";
import PrivatRoutes from './PrivateRoutes';



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee-register",
        element: <JoinEmployee />
      },
      {
        path: "/hr-register",
        element: <Join_HR />
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  // Company routes
  {
    path: "dashboard",
    element: (
      <PrivatRoutes >
        <Admin_dashbord />
      </PrivatRoutes>
    ),
    children: [
      // HR routes
      {
        path: "dashboard",
        element: <Dashborad/>,
      },
      {
        path: "asset-list",
        element: <Asset_List />,
      },
      {
        path: "add-an-asset",
        element: <Add_Asset />,
      },
      {
        path: "all-request",
        element: <All_Requests />,
      },
      {
        path: "my-employee-list",
        element: <My_Employee_List />,
      },
      {
        path: "add-an-employee",
        element: <Add_Employee />,
      },
      {
        path: "update-asset/:id",
        element: <UpdateAsset />,
        // loader: ({params}) => fetch(`http://localhost:5000/assets/${params.id}`)
      },
      {
        path: "my_profile",
        element: <Profile />,
      },

      // Employee Routes
      {
        path: "my-requested-assets",
        element: <MyAssets />,
      },
      {
        path: "my-team",
        element: <MyTeam/>,
      },
      {
        path: "request-for-an-asset",
        element: <RequestAsset></RequestAsset>,
        // loader: () => fetch("http://localhost:5000/assets"),
      },

    ],
  },

]);
