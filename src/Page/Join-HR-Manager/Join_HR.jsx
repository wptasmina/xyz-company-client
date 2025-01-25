import { useContext, useState } from "react";
import img from "../../assets/register.png"
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const JoinHR = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // navigate user
  const navigate = useNavigate();

  // post data using axios
  const axiosPublic = useAxiosPublic();

  // user auth
  const { handleRegister, updateUserProfile } = useContext(AuthContext)

  // payment status
  const paymentStatus = false;

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

  const onSubmit = async (data) => {
    const imageFile = { image: data.company_logo[0] };
    // host image
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const profile = res.data.data.display_url;

    // user info
    const userInfo = {
      name: data.name,
      email: data.email,
      company_name: data.company_name,
      company_logo: profile,
      package: data.package,
      dob: data.dob,
      password: data.password,
      paymentStatus: paymentStatus,
      role: "HR",
    };

    // post user info
    axiosPublic.post("/hr-account", userInfo).then((res) => {
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

        // after success then reset the form
        reset();

        //show the success alert 
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
      {/* Left Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-white">
        <img src={img} alt="Image" />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 lg:px-16 bg-white my-12">
        <h1 className="md:text-4xl text-2xl md:font-extrabold font-bold text-gray-800 mb-4 text-center">
          Join as HR Manager
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="company"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter your company name"
              {...register("company_name", { required: true })}
            />
            {errors.company_name && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Company Logo */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="logo"
            >
              Company Logo
            </label>
            <input
              type="file"
              id="logo"
              placeholder="Enter your Company Logo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2]"
              {...register("company_logo", { required: true })}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
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
              {passwordVisible ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
            </button>
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="dob"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-400 focus:border-blue-400"
              {...register("dob", { required: true })}
            />
            {errors.dob && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Package Selection */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="package"
            >
              Select a Package
            </label>
            <select
              id="package"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:bg-white focus:ring-gray-700 focus:border-[#1753c2]"
              {...register("package", { required: true })}
            >
              <option value="basic" className="bg-gray-200 text-black ">Maximum 5 Employees- $5/month</option>
              <option value="standard" className="bg-gray-200 text-black ">Maximum 10 Employees- $8/month</option>
              <option value="premium" className="bg-gray-200 text-black ">Maximum 20 Employees- $15/month</option>
            </select>
            {errors.package && (
              <p className="text-red-600">This field is required</p>
            )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Signup"
            className="w-full cursor-pointer bg-blue-400 text-white font-bold py-2 px-4 rounded-lg focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
          />
            
          
        </form>

        <p className="text-md text-gray-600 my-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#1753c2] font-bold underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default JoinHR;
