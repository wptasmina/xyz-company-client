
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/SideBar/Sidebar'

// import Dashboard from './components/SideBar/Dashboard/Dashboard'
// import Admin_dashbord from './Page/Admin-dashbord/Admin_dashbord'


function App() {


  return (
    <>
    <div>
        {/* <Navbar /> */}

        <Outlet/>
        {/* <div className='grid grid-cols-4 grid-rows-1'>
          <div className='col-span-1'>
            <Sidebar />
          </div >
           <div className='col-span-3'>
              <Outlet/>
           </div>
        </div> */}
        
      </div>

    </>
  )
}

export default App
