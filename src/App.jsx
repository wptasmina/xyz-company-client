
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar/Sidebar'
// import Dashboard from './components/SideBar/Dashboard/Dashboard'
// import Admin_dashbord from './Page/Admin-dashbord/Admin_dashbord'


function App() {


  return (
    <>
    <div>
        <Navbar />
        {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        {/* <Admin_dashbord /> */}
        {/* <div className="min-h-[calc(100vh-260px)] ">
        </div> */}
        <Outlet></Outlet>
        
      </div>

    </>
  )
}

export default App
