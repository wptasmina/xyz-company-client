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
      <div className="bg-[#EDF2FA]">
        <div className="hero min-h-screen w-11/12 mx-auto">
          <div className="hero-content p-0 flex-col sm:my-10 my-4 md:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="md:text-4xl text-2xl font-bold text-center">Login now!</h1>
              <img src={loginImg} className="sm:w-full w-40 md:my-6" alt="image" />
            </div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-md">
              <form onSubmit={handleSignIn} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered focus:outline-none focus:border-blue-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered focus:outline-none focus:border-blue-300"
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
                    className="btn bg-blue-500 border-0 text-white text-lg hover:bg-blue-500 btn-primary"
                  />
                </div>

                <div className="divider">OR</div>

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
          </div>
        </div>
      </div>
    </>
  );
}
