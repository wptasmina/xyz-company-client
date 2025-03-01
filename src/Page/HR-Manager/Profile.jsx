import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import bgImage from '../../assets/bgImage.png'


export default function Profile() {
    
  const {user} = useContext(AuthContext)


  return (
    <section className='w-11/12 mx-auto md:p-4 md:py-16'>
      <Helmet>
      <title>TrakSmart || Profile </title>
    </Helmet>
      <div className='bg-gray-100 shadow-xl rounded-lg overflow-hidden'>
      <div className=' bg-[#e5eefd]  flex md:flex-row flex-col justify-between gap-10 sm:px-10 '>
        <h2 className='pt-10 text-2xl text-[#16305f] font-bold text-center'>Welcome Back!</h2>
          <div>
          <img src={bgImage} alt="Backgorund image" className='w-full md:h-[250px] object-cover bg-no-repeat bg-center' />
          </div>
        </div>
      
      <div >
        <img src={user.photoURL} alt={user.displayName} className='md:w-36 md:h-36 w-24 h-24 rounded-full -mt-16 border-2 shadow-sm mx-10' />
       <div className='md:px-14 px-10 pt-4 pb-8'>
        <h3 className='text-xl font-medium dark:text-black'>Name: {user.displayName}</h3>
        <p className='text-gray-600'>Email: {user.email}</p>
        <p className='text-gray-600'>Mobile: +880 123456789</p>
        <p className='text-gray-600'>Country: Bangladesh</p>
       </div>
      </div>
      </div>
    </section>
  )
}
