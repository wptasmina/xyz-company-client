import {motion} from 'framer-motion'
import { useState } from 'react'
import { BsArrowRightSquareFill, BsBrowserEdge } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
{/* <BsBarChartLineFill /> */}
{/* <BsBarChartLine /> */}

export default function Sidebar() {
  const Sidebar_animation = {
    open : {
      width: "16rem",
      transition: {
        damping: 40,
    },
  },
    closed : {
      width: "4rem",
      transition: {
        damping: 40,
      },
    }
  }

  const [isOpen, setIsOpen] = useState(true)

  return (
  <>
  <div className='flex'>
      
  <motion.div 
    variants={Sidebar_animation} 
    animate={isOpen ? "open" : "closed"}
    className='bg-[#f1f1f1] flex  w-[16rem] max-w-[16rem] overflow-hidden h-screen md:relative fixed z-50 border'>
     

{/* logo  */}
    <div className='flex border-b mx-3 py-6 border-slate-900 gap-2'>
      <BsBrowserEdge size={45} />
      <h1  className='text-xl whitespace-pre'>company</h1>
    </div>


{/* menus  */}

<div className='flex flex-col h-full '>
  <ul className='whitespace-pre px-2 text-xl py-5 flex gap-2 flex-col'>
    <li className=''>
      <NavLink to='/'>
          Home
      </NavLink>
    </li>
    <li className=''>
      <NavLink to='/employee/:add-employee'>
        AddEmployee
      </NavLink>
    </li>
  </ul>

  {/* secend  */}
  <div className=''>

  </div>

</div>



    {/* button  */}

    <motion.div 
    animate={isOpen ? {
      x: 0,
      y : 0,
      rotate : 180,
    } : {
      x : 0,
      y : 0,
      roteta : 0,
    }
  }
    onClick={() => setIsOpen(!isOpen)} 
    className='duration-300 md:block hidden absolute w-fit h-fit z-50 -right-1 cursor-pointer'>
      <BsArrowRightSquareFill  />
    </motion.div>
  </motion.div>
     
    

    {/* dashbord  */}
    {/* <div className='border p-7'>
    deahdord
    </div> */}
    </div>
    
    </>
  )
}
