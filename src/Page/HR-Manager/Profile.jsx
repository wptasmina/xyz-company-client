import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import bgImage from '../../assets/bgImage.png'


export default function Profile() {
    
  const {user} = useContext(AuthContext)


  return (
    <section className='w-11/12 mx-auto sm:p-6 p-4 md:py-16'>
      <Helmet>
      <title>TrakSmart || Profile </title>
    </Helmet>
      <div className='bg-gray-100 shadow-xl rounded-md'>
      <div className=' bg-[#e5eefd]  flex md:flex-row flex-col justify-between gap-10 px-10'>
        <h2 className='pt-10 text-2xl text-[#16305f] font-bold'>Welcome Back!</h2>
          <div>
          <img src={bgImage} alt="Backgorund image" className='w-full h-[250px] object-cover bg-no-repeat bg-center' />
          </div>
        </div>
      
      <div >
        <img src={user.photoURL} alt={user.displayName} className='w-36 h-36 rounded-full -mt-16 border-2 shadow-sm mx-10' />
       <div className='px-14 py-6 '>
        <h3 className='text-xl font-medium'>{user.displayName}</h3>
        <p className='text-gray-600'>{user.email}</p>
       </div>
      </div>
      </div>
    </section>
  )
}
