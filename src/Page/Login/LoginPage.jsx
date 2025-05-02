import { useContext, useState, useEffect } from "react";
import home from "../../assets/logo.png";
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
  const navigate = useNavigate();
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  // Password visibility state
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  // Autofill Form Data
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Autofill effect
  useEffect(() => {
    setValue("email", formData.email);
    setValue("password", formData.password);
  }, [formData, setValue]);

  // Handle Employee & HR autofill
  const handleEmployeeLogin = () => setFormData({ email: "employee@example.com", password: "Employee@123" });
  const handleHRLogin = () => setFormData({ email: "admin@xyz.com", password: "Admin123!" });

  // Handle Login
  const onSubmit = async (data) => {
    try {
      const result = await handleLogin(data.email, data.password);
      console.log("Login Successful:", result.user);

      Swal.fire({
        title: "Login Success!",
        text: "Successfully Logged In",
        icon: "success",
        timer: 1500,
      });

      navigate("/dashboard/dashboard"); // Navigate only on success
      reset();
    } catch (error) {
      console.error("Login Failed:", error.message);
      Swal.fire({
        title: "Login Failed",
        text: error.message,
        icon: "error",
      });
    }
  };

  // Handle Google Login
  const handleGoogleSignIn = async () => {
    try {
      const result = await handleGoogleLogin();
      console.log("Google Login Success:", result.user);
      navigate("/dashboard/dashboard");
    } catch (error) {
      console.error("Google Login Failed:", error.message);
      Swal.fire({
        title: "Google Login Failed",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className=" bg-white dark:bg-[#172231]">
    <div className="w-10/12 mx-auto flex md:flex-row flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>TrakSmart || Login</title>
      </Helmet>

    <div className="hidden md:block w-3/6">
        <Lottie animationData={loginAm} />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col w-full md:w-1/2 items-center justify-center px-8 lg:px-16 bg-white dark:bg-[#101927] shadow-md rounded-md py-6">
        <div className="flex sm:gap-6 gap-2 mb-4 pt-4">
          <div>
            <Link to="/">
              <img src={home} alt="Home" className="sm:w-12 w-8 block cursor-pointer" />
            </Link>
          </div>
          <button onClick={handleEmployeeLogin} className="bg-[#031278] text-white sm:px-6 px-4 py-2 rounded-md cursor-pointer">
            Employee
          </button>
          <button onClick={handleHRLogin} className="bg-[#031278] text-white sm:px-6 px-4 py-2 rounded-md cursor-pointer">
            HR_Manager
          </button>
        </div>

        <h1 className="md:text-4xl text-2xl font-extrabold text-[#031278] dark:text-white mb-4 text-center">
          Welcome To Login!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2] focus:outline-none dark:text-gray-400 dark:bg-[#101927]"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Password</label>
          <div className="relative">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              className="w-full px-4 py-2 border border-gray-300 dark:text-gray-400 dark:bg-[#101927] rounded-lg focus:ring-[#1753c2] focus:border-[#1753c2] focus:outline-none"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required",
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
                <IoEyeOff className="w-5 h-5 text-gray-600" />
              ) : (
                <IoEye className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              <p>{errors.password?.message}</p>
            </div>
          )}
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Login"
            className="w-full bg-[#031278] text-white cursor-pointer py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#031278] focus:ring-offset-2"
          />

          <div className="text-center py-4 text-gray-600">____________OR____________</div>

          {/* Google login  */}
          <div
            className="flex justify-center items-center border border-[#1753c2ce] md:gap-6 gap-2 py-2 rounded-full hover:bg-[#EDF2FA] dark:hover:text-[#000] duration-300"
            onClick={handleGoogleSignIn}>

            <img src={gImg} className="w-6" alt="Google" />
            <div>
              <h4 className="w-full font-medium cursor-pointer text-center dark:text-gray-400 dark:hover:text-gray-900">Continue with Google</h4>
            </div>
          </div>
        </form>
      </div>
    </div>

    </div>
  );
};

export default LoginPage;
