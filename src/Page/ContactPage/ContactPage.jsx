import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
     <Helmet>
        <title>TrakSmart | Contact </title>
      </Helmet>
    <Navbar/>
    <section className="max-w-4xl mx-auto p-6 my-10 bg-white shadow-md rounded-lg dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-[#1a3566ee] dark:text-white">Contact Us</h2>
      <p className="text-center text-gray-600 dark:text-gray-300">We'd love to hear from you!</p>
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt className="text-xl text-[#1a3566ee]" />
            <p>123 Asset St, Tech City, USA</p>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaPhoneAlt className="text-xl text-[#1a3566ee]" />
            <p>+1 (234) 567-890</p>
          </div>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-xl text-[#1a3566ee]" />
            <p>support@xyzassets.com</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white" required />
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" className="w-full p-3 border rounded-md dark:bg-gray-800 dark:text-white" required></textarea>
            <button type="submit" className="w-full bg-[#1a3566ee] text-white py-3 rounded-md hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <div className="max-w-4xl mx-auto px-4 pb-8  ">
       <Link to="/">
            <button className="inline-flex items-center gap-1 shadow-2xl bg-[#031278] text-white px-4 py-2 rounded-full">
            <FaRegArrowAltCircleLeft className="text-xl"  />Back To Home
            </button>
       </Link>
    </div>


    </>
  );
};

export default ContactPage;
