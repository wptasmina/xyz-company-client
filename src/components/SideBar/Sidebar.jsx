import React, { useState } from 'react'
import { BsArrowBarLeft, BsArrowBarRight, BsCaretDown, BsChevronDown, BsFillGrid1X2Fill, BsFillMapFill, BsSearch } from 'react-icons/bs'
import { FaHome, FaUsers } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard';
import { MdAdminPanelSettings, MdOutlineSettings } from 'react-icons/md';
import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import AddEmployee from '../Employee/Add_Employee/AddEmployee';
// import Banner from '../Banner';
import { Link } from 'react-router-dom';
import RequestAsset from './../Employee/RequestAsset';

export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [ submenuOpen, setsubmenuOpen] = useState(false)

    const Menus =[
        { title:<Link to="/dashboard">Dashbord</Link>,icon: <AiFillDashboard/> },
        { title:<Link to="/">Home</Link>, icon:  <FaHome/> },
        
        { title:"Employee", icon:  <BsFillGrid1X2Fill /> ,
            submenu: true,
            submenuItems: [
                { title:<Link to="/add-employee">Add Employee</Link>},
                { title: <Link to="/">My Assets</Link> },
                { title:<Link to="/">My Team</Link>  },
                { title:<Link to="/">RequestAsset</Link>  },
            ],
        },

        // { title:"HR Manager",  icon: <FcManager/>,
        //     submenu: true,
        //     submenuItems: [
        //         { title:"Manager 1" },
        //         { title:"Manager 2" },
        //         { title:"Manager 3" },
        //     ], 
        // },
        { title:"Anlytics", icon:  <BsFillMapFill /> },
        { title:"Profile", icon: <CgProfile />, spacing: true },
        { title:"Setting", icon: <MdOutlineSettings /> },
        { title:"LogOut", icon: <BsArrowBarRight /> },
        
    ]

  return (
    <>
    <div className='flex'>
    <div className={`${open ? "w-72" : "w-20" } h-screen  px-4 py-5 bg-blue-950 duration-300 relative `}>

        <BsArrowBarLeft className={`absolute text-xl -right-2 top-7 cursor-pointer bg-white text-black ${!open && "rotate-180 -right-4 border "}`} onClick={() => setOpen(!open)} />

        <div className='inline-flex mb-6'>
            <MdAdminPanelSettings className=' text-2xl cursor-pointer text-blue-50 block mr-1' />
            <h1  className={`text-xl text-blue-100 font-bold text-center duration-300 ${!open && "scale-0 "}`}>Admin Dashboard</h1>
        </div>

        {/* Search Bar*/}
        <div className={`flex items-center rounded-md bg-blue-50/30 ${!open ? "px-2" : "px-4"} py-2`}>
            <BsSearch className={`text-blue-50 text-xl font-medium block cursor-pointer ${open && "mr-2"}`} />
            <input type={'search'} placeholder='Search' className={`w-full text-blue-50/50 font-medium focus:outline-none bg-transparent ${!open && "hidden "}`}/>
        </div>

        <ul className='pt-2'>
            {Menus.map((menu, idx)=>(
                <>
                <li key={idx} className={`text-blue-50 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-50/10 rounded-md ${menu.spacing? "mt-9" :"mt-2"}`} >
                    <span className='block font-bold text-blue-50 text-center text-xl'>
                       {menu.icon ? menu.icon :  <AiFillDashboard />}
                    </span>
                    <span className={`flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                    {menu.submenu && open && (
                        <BsChevronDown className={`${submenuOpen && "rotate-180"} `} onClick={() => {setsubmenuOpen(!submenuOpen)}} />
                    )}
                </li>
                    {
                        menu.submenu && submenuOpen && open && (
                        <>
                            <ul>
                                {menu.submenuItems.map((submenuItem, index) =>(
                                    <li key={index} className='text-blue-50/25 text-md flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-blue-50/10 rounded-md' >{submenuItem.title}</li>
                                ))}
                            </ul>
                        </>
                        )
                    }


                </>
            ))}
        </ul>
    </div>




    <div className="p-7 bg-slate-800 w-full">
        <h1>Home page</h1>
        {/* <Banner/> */}

    </div>

    </div>
    </>
  )
}
