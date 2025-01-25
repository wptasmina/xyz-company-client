import { useContext, useState } from "react";
import logo from "../../assets/register.webp"
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import  { AuthContext } from "../../AuthProvider/AuthProvider";


const JoinEmployee = () => {
  // Host image
  // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  // const image_hosting_api = https://api.imgbb.com/1/upload?key=${image_hosting_key};

  // navigate user
  const navigate = useNavigate();

  // post data using axios
  const axiosPublic = useAxiosPublic();

  // user auth
  const { handleRegister, updateUserProfile } = useContext(AuthContext);

  // react form to get data
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
   
    // const profile = res.data.data.display_url;

    // user info
    const userInfo = {
      name: data.name,
      email: data.email,
      // profile: profile,
      password: data.password,
      role: "employee",
      employee_status: false,
    };

    // post user info
    axiosPublic.post("/employee-account", userInfo).then((res) => {
      if (res.data.insertedId) {
        // create user
        handleRegister(data.email, data.password).then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);

          // update user
          updateUserProfile(data.name, profile)
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        });

        // after success fully submit form then reset the form
        reset();

        // if account create and post data the show the success alert
        Swal.fire({
          title: "Register Success!",
          text: "Successfully Register",
          icon: "success",
          timer: 1500,
        });

        // navigate the user
        navigate("/dashboard/dashboard");
      } else {
        Swal.fire({
          title: "Already Exist",
          text: "Email Already Exist",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Animation Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-white">
      <img src={logo} alt="image" />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 items-center justify-center px-8 lg:px-16 bg-white my-12">
        <h1 className="md:text-4xl text-2xl md:font-extrabold font-bold text-gray-800 mb-4 text-center">
          Join as Employee
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200 outline-none"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Company Logo */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="logo"
            >
            Photo URL
            </label>
            <input
              type="text"
              id="logo"
              placeholder="Profile Photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200 outline-none"
              {...register("profile", { required: true })}
            />
            {errors.company_logo && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200 outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-200 focus:border-blue-200 outline-none"
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
              className="absolute inset-y-0 right-3 top-[40%] flex items-center text-gray-500 hover:text-blue-700 focus:outline-none"
            >
              {passwordVisible ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
            </button>
          </div>

          {/* Submit Button */}
          <input 
            type="submit" value="Signup"
            className="w-full bg-blue-400 font-bold text-white py-2 px-4 rounded-lg focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-700 focus:ring-offset-2"
          />
        </form>

        <p className="text-md text-gray-600 my-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 underline text-md font-bold"
          >
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
};

export default JoinEmployee;
// api.imgbb.com
