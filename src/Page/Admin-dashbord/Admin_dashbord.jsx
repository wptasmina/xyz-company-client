
import { Outlet } from 'react-router-dom';
// import Sidebar from './../../components/SideBar/Sidebar';
import Navbar from './../../components/Navbar';

export default function Admin_dashbord() {
  return (
    <>
        {/* <Sidebar /> */}
        <Navbar/>
        <Outlet></Outlet>
    </>
  )
}
