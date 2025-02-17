import { useContext, useState } from "react";
// import loginImg from "../assets/login.png";
import Lottie from "lottie-react";
import loginAm from "./login.json";
import gImg from "../../assets/google.webp";

import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const LoginPage = () => {
  // navigate user
  const navigate = useNavigate();

  // user auth
  const { handleGoogleLogin, handleLogin } =  useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // password toggle
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  //   submit form
  const onSubmit = async (data) => {
    // create user
    handleLogin(data.email, data.password).then((result) => {
      const handleLogin = result.user;
      // console.log(handleLogin);
      Swal.fire({
        title: "Login Success!",
        text: "Successfully Register",
        icon: "success",
        timer: 1500,
      });
      // navigate the user
      navigate("/dashboard/dashboard");
    });
    reset();
  };

    // Handle Google Login
    const handleGoogleSignIn = () => {
      handleGoogleLogin().then((result) => {
        const user = result.user;
        navigate("/dashboard/dashboard");
        const userInfo = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
          role: 'employee',
          employee_status: false
        }
        axiosPublic.post('/employee-account', userInfo).then(res => {
          res.data
        })
      });
    };
    

  return (
    <div className="flex md:flex-row flex-col justify-center items-center min-h-screen">

  <Helmet>
    <title>TrakSmart || Login </title>
  </Helmet>

        {/* <div className="mt-10"> */}
        <div className="hidden md:block w-3/6">
          <Lottie animationData={loginAm} />
        </div>
        {/* </div> */}

      {/* Right Form Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 lg:px-16 bg-white shadow-md rounded-md  py-6">

        <h1 className="md:text-4xl text-2xl font-extrabold text-[#031278] mb-4 text-center">
          Welcome To Login!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2]   focus:outline-none outline-none"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2] focus:outline-none outline-none"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 16,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
            />
            {errors.password && (
              <p className="text-red-600">This field is required</p>
            )}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-[40%] flex items-center text-gray-500 hover:text-[#1753c2] focus:outline-none"
            >
              {passwordVisible ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value=" Login"
            className="w-full bg-[#031278] text-white cursor-pointer py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#031278] focus:ring-offset-2"
          />

          <div className="text-center py-4 text-gray-600">____________OR____________</div>

          <div
            className="flex justify-center items-center border border-[#1753c2ce] md:gap-6 gap-2 py-2 rounded-full hover:bg-[#EDF2FA]"
            onClick={handleGoogleSignIn}>

            <img src={gImg} className="w-6" alt="Google" />
            <div>
              <h4 className="w-full font-medium cursor-pointer text-center">Continue with Google</h4>
            </div>
          </div>

        </form>

        <p className="text-sm text-gray-600 my-4">
          Create a New account? 
          <Link
            to="/employee-register"
            className="text-[#031278] font-bold ml-1 underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;