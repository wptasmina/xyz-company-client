import { useContext, useState } from "react";
import img from "../../assets/register.png"
import logo from "../../assets/logo.png"
import gImg from "../../assets/google.webp";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const JoinHR = () => {

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // navigate user
  const navigate = useNavigate();

  // post data using axios
  const axiosPublic = useAxiosPublic();

  // user auth
  const { handleGoogleLogin, handleRegister, updateUserProfile } = useContext(AuthContext)

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
            .then(() => { })
            .catch((error) => {
              console.log(error);
            });
        });
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
    <div className="bg-white dark:bg-[#172231]">

      <Helmet>
        <title>TrakSmart || Join HR </title>
      </Helmet>


      <div className="w-10/12 mx-auto flex md:flex-row flex-col justify-center items-center min-h-screen">

        {/* Left Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-white dark:bg-[#172231]">
          <img src={img} alt="Image" />
        </div>

        {/* Right Form Section */}
        <div className="bg-white dark:bg-[#101927] dark:text-white flex flex-col w-full md:w-1/2 items-center justify-center md:shadow-xl rounded-lg md:px-8 px-4 py-8 my-10">

          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-12" />
            </Link>
            <h1 className="text-2xl md:text-3xl pt-6 font-bold dark:text-white text-gray-800 mb-4 text-center">
              Join as HR Manager
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">

            <div className="md:flex gap-4">
              {/* Full Name */}
              <div className="mb-4  md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:outline-none
               outline-none focus:border-[#7789fd]"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>

              {/* Company Name */}
              <div className="mb-4  md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="company"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  placeholder="Enter your company name"
                  {...register("company_name", { required: true })}
                />
                {errors.company_name && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>
            </div>

            <div className="md:flex gap-4">
              {/* Email */}
              <div className="mb-4 md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  placeholder="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4 relative md:w-1/2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={passwordVisible ? "text" : "password"}
                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-400 dark:bg-[#101927] rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2] focus:outline-none"
                    placeholder="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be at least 6 characters" },
                      maxLength: { value: 16, message: "Password must be at most 16 characters" },
                      pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message: "Password must contain an uppercase, a number, and a special character" }
                    })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {passwordVisible ? (
                      <IoEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <IoEye className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <div className="text-red-600 text-sm mt-1">
                    <p>{errors.password?.message}</p>
                  </div>
                )}
              </div>

            </div>
            <div className="md:flex gap-4">
              {/* Date of Birth */}
              <div className="mb-4 md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="dob"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  {...register("dob", { required: true })}
                />
                {errors.dob && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>

              {/* Company Logo */}
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="logo"
                >
                  Company Logo
                </label>
                <input
                  type="file"
                  id="logo"
                  placeholder="Enter your Company Logo"
                  className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  {...register("company_logo", { required: true })}
                />
                {errors.company_logo && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>
            </div>
            {/* Package Selection */}
            <div className="mb-4 ">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                htmlFor="package"
              >
                Select a Package
              </label>
              <select
                id="package"
                className="w-full px-4 py-2 dark:text-gray-500 dark:bg-[#101927] border border-gray-300 rounded-lg focus:bg-white focus:ring-[#1753c2] focus:border-[#1753c2]"
                {...register("package", { required: true })}
              >
                <option value="basic" className="bg-gray-200 text-black text-sm px-0">Maximum 5 Employees- $5/month</option>
                <option value="standard" className="bg-gray-200 text-black text-sm">Maximum 10 Employees- $8/month</option>
                <option value="premium" className="bg-gray-200 text-black text-sm">Maximum 20 Employees- $15/month</option>
              </select>
              {errors.package && (
                <p className="text-red-600">This field is required</p>
              )}
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Signup"
              className="w-full cursor-pointer bg-[#031278] text-white font-bold py-2 px-4 rounded-lg focus:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-[#031278]"
            />


            {/* GoogleSignIn  */}
            <div className="text-center py-4 text-gray-600 dark:text-gray-200">____________OR____________</div>

            <div
              className="flex justify-center items-center border border-[#1753c2ce] md:gap-6 gap-2 py-2 rounded-full hover:bg-[#EDF2FA] dark:hover:text-[#303030]"
              onClick={handleGoogleSignIn}>

              <img src={gImg} className="w-6" alt="Google" />
              <div>
                <h4 className="w-full font-medium cursor-pointer text-center">Continue with Google</h4>
              </div>
            </div>

          </form>

          <p className="text-md text-gray-700 dark:text-gray-200 my-4">
            Already have an account?
            <Link
              to="/login"
              className="text-[#142f61] dark:text-blue-700 ml-1 font-bold underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinHR;
