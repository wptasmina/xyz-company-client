import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    profilePic: "",
  });

  // Load user data
  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/user/${user.email}`).then((res) => {
        setFormData(res.data);
      });
    }
  }, [user?.email, axiosPublic]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axiosPublic.post("/update-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData({ ...formData, profilePic: response.data.photoURL });
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Image upload failed");
    }
    reset();
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosPublic.put(`/update-profile/${user.email}`, formData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="p-5 max-w-lg mx-auto bg-white/50 dark:text-black shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
          className="w-full p-2 border rounded"
        />
        <input type="file" onChange={handleImageUpload} />
        <button type="submit" className="bg-[#193a77] px-4 text-white py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
