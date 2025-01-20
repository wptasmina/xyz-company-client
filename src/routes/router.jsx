import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Page/ErrorPage";
import JoinEmployee from "../Page/JoinEmployees/JoinEmployee";
import MyAssets from "../components/Employee/MyAssets";
import MyTeam from "../components/Employee/MyTeam";
import RequestAsset from "../components/Employee/RequestAsset";
import AssetList from "../components/HR-Manager/AssetList";
import AddAsset from "../components/HR-Manager/AddAsset";
import MyEmployees from "../components/HR-Manager/MyEmployees";
import PrivatRoutes from "../PrivateRoutes/PrivateRoutes";
import AddEmployee from "../components/Employee/Add_Employee/AddEmployee";
import Join_HR_Manager from "../Page/Join-HR-Manager/Join_HR_Manager";
import Home from "../Page/Home";
import Dashboard from "../components/SideBar/Dashboard/Dashboard";
import Admin_dashbord from "../Page/Admin-dashbord/Admin_dashbord";
import LoginPage from "../Page/LoginPage";
import Register from "../Page/Register";
import Add_HR_Manager from './../components/HR-Manager/Add_HR_Manager';

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
        path: "/join-employee",
        element: (
          <PrivatRoutes>
            <JoinEmployee />
          </PrivatRoutes>
        ),
      },
      
      {
        path: "/join-hr",
        element: (
          <PrivatRoutes>
            <Join_HR_Manager />
          </PrivatRoutes>
        ),
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
