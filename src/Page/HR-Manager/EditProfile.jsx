import { useContext, useEffect } from "react";
// import { AuthProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AOS from "aos";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const EditProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const number = form.get("number");

    updateUserProfile({
      displayName: name,
      photoURL: photo,
      phoneNumber: number,
    })
      .then(() => {
        navigate("/dashboard/my_profile");
        toast.success("Profile Updated Successfully");
      })
      .catch((error) => toast.error(error.code));
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    document.title = "Update Profile | Discount PRO";
  }, []);

  return (
      <div className="px-4 py-6 lg:px-20 md:px-12 lg:py-8" data-aos="fade-up">
        <div
          className="lg:py-20 md:py-16 py-10 bg-gradient-to-r from-[#16305f] to-[#8f9db8] rounded-t-xl"
          data-aos="fade-left"
        ></div>
        <div
          className="lg:mx-16 md:mx-10 mx-5 bg-white dark:text-black lg:-mt-10 md:-mt-8 -mt-6 lg:pt-20 md:pt-16 pt-10 shadow-[-6px_6px_22px_-1px_rgba(0,_0,_0,_0.1)] rounded-xl pb-6 z-10"
          data-aos="zoom-in-up"
        >
          <div className="lg:w-8/12 mx-auto md:w-10/12 w-11/12">
            <h1 className="uppercase font-bold text-sm md:text-base  text-[#16305f]">
              Mange Your Profile Information
            </h1>
            <h1 className="md:text-3xl text-xl font-bold py-5">Edit account</h1>
            <form onSubmit={handleUpdateProfile}>
              <div className="">
                <label className="label" htmlFor="account">
                  <span className="label-text">Account Name: </span>
                </label>
                <input
                  type="text"
                  name="account"
                  placeholder={user.displayName}
                  id="account"
                  className="input input-bordered mb-4 px-4 py-2 rounded-md"
                  disabled
                />
              </div>
              <div className="">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name: </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  id="name"
                  className="input input-bordered mb-4 px-4 py-2 focus:outline-none outline-none rounded-md bg-gray-50"
                  required
                />
              </div>
              <div className="">
                <label className="label" htmlFor="photo">
                  <span className="label-text">Photo-URL: </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you photo url"
                  id="photo"
                  name="photo"
                  className="input input-bordered mb-4 px-4 py-2 focus:outline-none outline-none rounded-md bg-gray-50"
                  required
                />
              </div>
              <div className="">
                <label className="label" htmlFor="number">
                  <span className="label-text">Phone Number: </span>
                </label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  id="number"
                  name="number"
                  className="input input-bordered mb-4 px-4 py-2 focus:outline-none outline-none rounded-md bg-gray-50"
                />
              </div>
              <div className="">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email: </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={user.email}
                  id="email"
                  className="input input-bordered px-4 py-2 focus:outline-none outline-none rounded-md "
                  disabled
                />
              </div>
              <div className="form-control mt-4">
                <button className="bg-[#16305f] px-4 py-2 rounded-md text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>

  );
};

export default EditProfile;