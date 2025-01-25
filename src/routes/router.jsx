import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/ErrorPage";

import Dashbord from "../Page/Dashbord/Dashbord";
import PrivatRoutes from "../PrivateRoutes/PrivateRoutes";
import JoinEmployee from "../Page/Join-Employees/JoinEmployee";
import AddEmployee from "../Page/Employee/Add_Employee/AddEmployee";
import MyAssets from "../Page/Employee/MyAssets";
import MyTeam from "../Page/Employee/MyTeam";
import RequestAsset from "../Page/Employee/RequestAsset";
import HR_Manager from "../Page/HR-Manager/HR_Manager";
import All_Requests from "../Page/HR-Manager/All_Requests";
import Asset_List from "../Page/HR-Manager/Asset_List";
import My_Employee_List from "../Page/HR-Manager/My_Employee_List";
import Profile from "../Page/HR-Manager/Profile";
import Add_an_Employee from "../Page/HR-Manager/Add_an_Employee";
import Add_an_Asset from "../Page/HR-Manager/Add_an_Asset";
import LoginPage from "../Page/LoginPage";
import Register from "../Page/Register";
import Home from "../Page/Home";
import Join_HR from "../Page/Join-HR-Manager/Join_HR";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/employee-register",
        element:
            <JoinEmployee />
      },
      
      {
        path: "/hr-register",
        element:  <Join_HR />
      },
      {
        path: "/dashbord",
        element: <Dashbord />,
      },
     

      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/my-assets",
        element: <MyAssets />,
      },
      {
        path: "/employee/:my-team",
        element: <MyTeam />,
      },
      {
        path: "/employee/:request-asset",
        element: <RequestAsset />,
      },
      {
        path: "/hr-manager",
        element: <HR_Manager />,
      },
      {
        path: "/hr-manager/:add-an-asset",
        element: <Add_an_Asset />,
      },
      {
        path: "/hr-manager/:add-an-employee",
        element: <Add_an_Employee />,
      },
      {
        path: "/all-requests",
        element: <All_Requests />,
      },
      {
        path: "/asset-list",
        element: <Asset_List />,
      },
      {
        path: "/my-employee-list",
        element: <My_Employee_List />,
      },
      {
        path: "/my-profile",
        element: <Profile />,
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
]);
