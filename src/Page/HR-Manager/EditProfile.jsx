import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const imageFormData = new FormData();
    imageFormData.append("image", file);

    try {
      const response = await axiosPublic.post(image_hosting_api, imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData((prev) => ({ ...prev, profilePic: response.data.data.url }));
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Image upload failed");
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosPublic.put(`/update-profile/${user._id}`, formData);
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
          placeholder="Email"
          className="w-full p-2 border rounded"
          readOnly
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone number"
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

        {/* Profile Image Preview */}
        {formData.profilePic && (
          <img src={formData.profilePic} alt="Profile" className="w-20 h-20 rounded-full mx-auto" />
        )}

        <button type="submit" className="bg-[#193a77] px-4 text-white py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
