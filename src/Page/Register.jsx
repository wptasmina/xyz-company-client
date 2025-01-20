
import regImg from '../assets/register.png'
import { useContext } from "react";
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';

export default function Register() {

  const {handleRegister} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    // console.log(form,name,email,password,conPassword,photoURL )

    handleRegister(email, password)
    .then(res=>{
       toast.success("Register is success!")
      console.log(res)
    })
    .catch(error => {
      console.log(error.message)
    })


    form.reset()
  }

  return (
    <>
   <div className="bg-[#EDF2FA]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-11/12 mx-auto md:gap-10 gap-4 justify-center items-center text-center lg:text-left">
            <div>
             <img src={regImg} className="sm:w-full md:w-96 md:my-6" alt="image" />
            </div>
           
            <div className="bg-base-100 w-full max-w-sm shrink-0 shadow-md sm:p-8 p-4 border">
            <h1 className="md:text-3xl text-2xl font-bold text-center pb-8">Sign Up Now!</h1>
              <form onSubmit={handleSubmit} className="card-body">
                <div className="text-start">
                  <label className="">
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    name="email"
                    className="input border w-full py-2 px-3 rounded-md mb-4 mt-2 focus:outline-none focus:border-blue-300"
                    required
                  />
                </div>
                <div className="text-start">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Your password"
                    name="password"
                    className="input border w-full py-2 px-3 rounded-md mb-4 mt-2 focus:outline-none focus:border-blue-300"
                    required
                  />
                  
                </div>
                <div className="text-start">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="photoURL" className="input border w-full py-2 px-3 rounded-md mt-2 focus:outline-none focus:border-blue-300" required />
                </div>
                <div className="mt-6">
                  <input
                    type="submit"
                    value="Sign In"
                    className="btn bg-blue-500 border-0 w-full py-2 cursor-pointer rounded-md mb-4 text-white text-lg hover:bg-blue-500 btn-primary"
                  />
                </div>
               
              </form>
            </div>
        </div>
    </div>

  </>
  )
}
