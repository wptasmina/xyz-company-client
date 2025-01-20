import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


export default function AddEmployee() {

  const contextValue = useContext(AuthContext) 

  const handleSubmit = (e) => {
    e.preventDefault();

  const form = e.target;

  const userName = form.userName.value;
  const email = form.email.value;
  const password = form.password.value;
  const date = form.date.value;

  const newAddEmployee = { userName, email, password,
     date, category, shortDesc, longDesc }

  // send data to the server
  fetch('https://blogging-server-alpha.vercel.app/blogger', {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAddEmployee)
  })
  .then(res => res.json())
  .then(data => {
    toast.success("Add blog success!")

    // console.log(data)
    form.reset()
  })

}
  return (
    <>
    <div className="bg-base-100 w-full md:w-11/12 mx-auto shadow-sm md:px-10 px-4 my-10 pt-4 pb-10">
        <h2 className="md:text-4xl text-2xl text-gray-800 font-extrabold pb-2 text-center"> Add an Employee</h2>
        <p className="text-md text-gray-600 font-medium text-center md:w-1/2 mx-auto">Start your journey as a Employees! Create a new Employees to share your unique ideas,
      stories, or knowledge with the world.</p>


      <form onSubmit={handleSubmit} className="mt-8">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Full Name:
            </label>
            <input
            type="text"
            name="userName"
            placeholder='Enter your Full Name'  className="w-full outline-none
             px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1
              focus:ring-[#60e49991]" required />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 pb-2">
            Email:
            </label>
              <input type="email" placeholder='Enter your email' name="email" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>


          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Password:
            </label>
              <input type="password" placeholder='Enter your Password' name="password" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>

          <div className=''>
            <label className="block text-lg font-medium text-gray-700 pb-2">
             Date Of Bauth:
            </label>
              <input type="date" placeholder='Enter your Image URL' name="date" required className="w-full outline-none px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#60e49991]" />
          </div>
          
        </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <input
            
              type="submit"
              value="Add Employee"
              className="w-full py-3 bg-gray-800/90 text-white text-lg font-semibold rounded-lg focus:outline-none focus:bg-[#0EA64F]"
            />
              
          </div>
        </form>
      </div>
    </>
  )
}
