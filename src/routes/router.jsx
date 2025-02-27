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
import Home from "../Page/Home";
import Join_HR from "../Page/Join-HR-Manager/Join_HR";
import MainLayouts from "../layouts/MainLayouts";
import Dashborad from "../Page/Dashborad/Dashborad";
import Add_Asset from "../Page/HR-Manager/Add_Asset";
import UpdateAsset from "../Page/HR-Manager/UpdateAsset";
import Admin_dashbord from "../Page/Admin-dashbord/Admin_dashbord";
import PrivatRoutes from './PrivateRoutes';
import AddEmployee from "../Page/HR-Manager/AddEmployee";
import LoginPage from './../Page/Login/LoginPage';
import ContactPage from "../Page/ContactPage/ContactPage";
import ProductFeatures from './../Page/ProductFeatur/ProductFeatures';
import EditProfile from "../Page/HR-Manager/EditProfile";





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
        path: "/product-featur",
        element: <ProductFeatures />,
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
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/login",
        element: <LoginPage />,
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
        element: <AddEmployee />,
      },
      {
        path: "update-asset/:id",
        element: <UpdateAsset />,
        loader: ({params}) => fetch(`localhost:5000/assets/${params.id}`)
      },
      {
        path: "my_profile",
        element: <Profile />,
      },
      {
        path: "update-profile",
        element: <EditProfile />,
        // loader: ({params}) => fetch(`localhost:5000/update-profiles/${params.id}`)
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
        element: <RequestAsset/>,
        loader: () => fetch("localhost:5000/assets"),
      },

    ],
  },

]);
