import React, { useState } from 'react'
import { BsArrowBarLeft, BsArrowBarRight, BsChevronDown, BsFillGrid1X2Fill, BsFillMapFill, BsSearch } from 'react-icons/bs'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutlineSettings } from 'react-icons/md';
import { AiFillDashboard } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import logo from '../../assets/xyzlogo.png'



export default function Sidebar() {
    const [open, setOpen] = useState(true)
    const [ submenuOpen, setsubmenuOpen] = useState(false)

    const Menus =[
        { title: "Dashbord", 
            link: "/",
            icon: <AiFillDashboard/> 
        },
        { title:"Home", 
            link: "/",
            icon:  <FaHome/> 
        },
        
        { title:"Employee", icon:  <BsFillGrid1X2Fill /> ,
            submenu: true,
            submenuItems: [
                { title:"Add Employee",
                  link: "/add-employee"
                },
                { title: "My Assets",
                  link: "/my-assets" , 
                 },
                { title:"My Team",
                  link: "/employee/:my-team",
                },
                { title: "RequestAsset", 
                  link: "/employee/:request-asset",
                },
            ],
        },

        // { 
        //     title:"HR Manager",  
        //     icon: <FcManager/>,
        //     submenu: true,
        //     submenuItems: [
        //         { title: "Manager1", 
        //             link: "/request-asset",
        //         },
        //         { title:"Manager 2" },
        //         { title:"Manager 3" },
        //     ], 
        // },

        {   title:"Anlytics", 
            icon:  <BsFillMapFill /> 
        },
        { 
            title:"Profile", 
            icon: <CgProfile />, 
            spacing: true },
        { 
            title:"Setting",
            icon: <MdOutlineSettings /> 
        },
        { 
            title:"LogOut", 
            icon: <BsArrowBarRight /> 
        },
        
    ]

  return (
    <>
    <div className='flex '>
    <div className={`${open ? "w-72" : "w-20" } h-screen px-4 py-5 bg-blue-950 duration-300 relative `}>

        <BsArrowBarLeft className={`absolute text-xl -right-2 top-7 cursor-pointer bg-white text-black ${!open && "rotate-180 -right-4 border "}`} onClick={() => setOpen(!open)} />

        <div className=' flex flex-col justify-center items-center mb-6'>
            <img src={logo}  className={`w-28 h-16 object-cover rounded-sm duration-300 
                ${!open && " w-10 h-8 duration-300"}`} />
        </div>

        {/* Search Bar*/}
        <div className={`flex items-center rounded-md bg-blue-50/30 ${!open ? "px-2" : "px-4"} py-2`}>
            <BsSearch className={`text-blue-50 text-xl font-medium block cursor-pointer ${open && "mr-2"}`} />
            <input type={'search'} placeholder='Search' className={`w-full text-blue-50/50 font-medium focus:outline-none bg-transparent ${!open && "hidden "}`}/>
        </div>
            
        {/* Menus */}
        <ul className='pt-2'>
            {Menus.map((menu, idx)=>(
                <>
                <li key={idx} className={`text-blue-50 text-md flex items-center gap-x-4 cursor-pointer p-2
                     hover:bg-blue-50/10 rounded-md ${menu.spacing? "mt-9" :"mt-2"}`} >
                    <span className='block font-bold text-blue-50 text-center text-xl'>
                       {menu.icon ? menu.icon :  <AiFillDashboard />}
                    </span>
                    <span ></span>
                    <Link className={`flex-1 ${!open && "hidden"}`} to={menu.link}>{menu.title}</Link>
                    {menu.submenu && open && (
                        <BsChevronDown className={`${submenuOpen && "rotate-180"} `} onClick={() => {setsubmenuOpen(!submenuOpen)}} />
                    )}
                </li>
                    {
                        menu.submenu && submenuOpen && open && (
                        <>
                            <ul className='dropdown'>
                                {menu.submenuItems.map((submenuItem, index) =>(
                                    <li key={index} className='text-blue-50/25 text-md flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-blue-50/10 rounded-md'>
                                        
                                        <Link to={submenuItem.link}>{submenuItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                        )
                    }
                    {/* {
                        menu.submenu && submenuOpen && open && (
                        <>
                            <ul className='dropdown'>
                                {menu.submenuItems.map((submenuItem, index) =>(
                                    <li key={index} className='text-blue-50/25 text-md flex items-center gap-x-4 cursor-pointer p-2 px-8 hover:bg-blue-50/10 rounded-md'>
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        </>
                        )
                    } */}
                </>
            ))}
        </ul>
    </div>



    {/* <Outlet></Outlet> */}
    {/* <div className="min-h-screen bg-slate-300 w-full "> */}
        <div className=''>
            {/* <h1 className="p-7 bg-slate-100 w-full">Home page</h1> */}
            {/* <Navbar/> */}
            {/* <AddEmployee /> */}
             {/* <MyTeam /> */}
            {/* <RequestAsset /> */}
        </div>
    {/* <h1 className="p-7 bg-slate-400 w-full">Home page</h1> */}
        {/* <Banner/> */}

    {/* </div> */}

    </div>
    </>
  )
}
