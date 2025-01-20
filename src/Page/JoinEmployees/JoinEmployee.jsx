import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import Sidebar from '../../components/SideBar/Sidebar'
// import Dashboard from '../../components/Dashboard'

export default function JoinEmployee() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const redirectPath = location.state?.from?.pathname || "/";
  navigate(redirectPath);

  return (
    <>
      <div className='flex'>
      {/* <Sidebar />
      <Dashboard/> */}
      </div>
    </>
  )
}
