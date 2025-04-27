import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form";
import img from "../../assets/em-register.png"
import logo from "../../assets/logo.png"
import gImg from "../../assets/google.webp";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


const JoinEmployee = () => {

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // navigate user
  const navigate = useNavigate();

  // post data using axios
  const axiosPublic = useAxiosPublic();

  // user auth
  const { handleGoogleLogin, handleRegister, updateUserProfile } = useContext(AuthContext);

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
    const imageFile = { image: data.profile[0] };
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
      profile: profile,
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
          // console.log(loggedUser);

          // update user
          updateUserProfile(data.name, profile)
            .then(() => { })
            .catch((error) => {
              console.log(error);
            });
        });
        reset();

        // Show the success alert
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
      <div className=" w-10/12 mx-auto flex md:flex-row flex-col justify-center items-center min-h-screen">

        <Helmet>
          <title>TrakSmart || Join Employee </title>
        </Helmet>
        {/* Left Animation Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center">
          <img src={img} alt="image" />
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col w-full rounded-lg lg:w-1/2 md:shadow-xl items-center justify-center md:px-8 px-4 py-8 bg-white dark:text-gray-500 dark:bg-[#101927] my-10">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-12" />
            </Link>
            <h1 className="text-2xl md:text-3xl pt-6 font-bold dark:text-white text-gray-800 mb-4 text-center">
              Join as Employee
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            {/* Full Name */}
            <div className="md:flex gap-4">
              <div className="mb-4 md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:text-gray-500 dark:bg-[#101927] rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>

              {/* Company Logo */}
              <div className="mb-4 md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="logo"
                >
                  Profile Photo
                </label>
                <input
                  type="file"
                  id="logo"
                  className="w-full px-4 py-2 border border-gray-300 dark:text-gray-500 dark:bg-[#101927] rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
                  {...register("profile", { required: true })}
                />
                {errors.company_logo && (
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
                  className="w-full px-4 py-2 border border-gray-300 dark:text-gray-500 dark:bg-[#101927] rounded-lg focus:outline-none 
              outline-none focus:border-[#7789fd]"
                  placeholder="Enter your email address"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-600">This field is required</p>
                )}
              </div>

              {/* Password */}
              <div className="mb-4 relative md:w-1/2">
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 dark:text-gray-500 dark:bg-[#101927] rounded-lg focus:outline-none outline-none focus:border-[#7789fd]"
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
                  className="absolute inset-y-0 right-4 top-[40%] flex items-center text-gray-500 dark:text-gray-200 hover:text-[#203a6b] focus:outline-none"
                >
                  {passwordVisible ? <IoEyeOff className="text-xl" /> : <IoEye className="text-xl" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="SignUp"
              className="w-full bg-[#031278] text-white py-2 px-4 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1753c2] focus:ring-offset-2"
            />

            {/* GoogleSignIn  */}
            <div className="text-center py-4 text-gray-600">____________OR____________</div>

            <div
              className="flex justify-center items-center dark:hover:text-[#303030] border border-[#1753c2ce] md:gap-6 gap-2 py-2 rounded-full hover:bg-[#EDF2FA]"
              onClick={handleGoogleSignIn}>

              <img src={gImg} className="w-6" alt="Google" />
              <div>
                <h4 className="w-full font-medium cursor-pointer text-center">Continue with Google</h4>
              </div>
            </div>

          </form>

          <p className="text-sm text-gray-700 dark:text-gray-200 my-4 ">
            Already have an account?
            <Link
              to="/login"
              className="text-[#031378ee] dark:text-blue-700 ml-1 font-bold underline "
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinEmployee;
