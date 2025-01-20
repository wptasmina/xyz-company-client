import { useContext } from "react";
import loginImg from "../assets/login.png";
import gImg from "../assets/google.webp";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function LoginPage() {
  // Access Auth Context
  const { handleGoogleLogin, handleLogin } = useContext(AuthContext);

  // React Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Email/Password Login
  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      await handleLogin(email, password);

      // Redirect user to home page or the path they were trying to access
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath);
      toast.success("Welcome Back!");
    } catch (error) {
      toast.error("Sign-in failed");
      console.error("Sign-in error:", error.message);
    }
  };

  // Handle Google Login
  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleLogin();

      // Redirect user to home page or the path they were trying to access
      const redirectPath = location.state?.from?.pathname || "/";
      navigate(redirectPath);
      toast.success("Welcome Back!");
    } catch (error) {
      toast.error("Google Sign-in failed");
      console.error("Google Sign-in error:", error.message);
    }
  };

  return (
    <>
      <div className="bg-[#dbe6f8b6] ">
        <div className="w-11/12  min-h-screen  mx-auto flex justify-center items-center sm:gap-10 gap-2">

            <div className="text-center lg:text-left border">
              <img src={loginImg} className="sm:w-96 w-40 md:my-6" alt="image" />
            </div>

            <div className="card bg-base-100 w-full max-w-sm bg-[#adc8f3b6] p-6  shrink-0 shadow-md">
              <h1 className="md:text-3xl text-2xl font-bold text-center mb-6">Login now!</h1>
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="">
                  <label className="">
                  Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="border mt-2 w-full py-2 px-4 rounded-md cursor-pointer focus:outline-none focus:border-blue-300"
                    required
                  />
                </div>
                <div className="">
                  <label className="pb-2">
                  Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="border mt-2 mb-2 w-full px-4 py-2 rounded-md cursor-pointer focus:outline-none focus:border-blue-300"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover font-medium text-[#1B66C9]">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Login"
                    className="btn bg-blue-500 border w-full py-2 rounded-md cursor-pointer text-white text-lg hover:bg-blue-500 btn-primary"
                  />
                </div>

                <div className="my-4 text-center">------ OR ------</div>

                <div
                  className="flex justify-start border gap-8 py-2 rounded-full hover:bg-[#EDF2FA]"
                  onClick={handleGoogleSignIn}
                >
                  <img src={gImg} className="w-6 ml-4" alt="Google" />
                  <h4 className="w-full font-medium cursor-pointer">Continue with Google</h4>
                </div>
                <p className="text-md text-center">
                  New to the Website? Please{" "}
                  <NavLink to="/register">
                    <span className="text-[#1B66C9] font-medium">Register</span>
                  </NavLink>
                </p>
              </form>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
