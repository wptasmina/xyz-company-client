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

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-xl text-[#1a3566ee]" />, text: "123 Asset St, Tech City, USA" },
    { icon: <FaPhoneAlt className="text-xl text-[#1a3566ee]" />, text: "+1 (234) 567-890" },
    { icon: <FaEnvelope className="text-xl text-[#1a3566ee]" />, text: "support@xyzassets.com" },
  ];


  return (
    <>
      <Helmet>
        <title>TrakSmart | Contact </title>
      </Helmet>
      <Navbar />

      <div className="dark:bg-[#0d1520]">
        <section className="w-10/12 mx-auto p-6 py-10 pt-20 bg-white shadow-md rounded-lg dark:bg-gray-900">
          <h2 className="text-3xl font-bold md:text-center text-[#1a3566ee] dark:text-white pb-2">Contact Us</h2>
          <p className="md:text-center text-gray-600 dark:text-gray-300">We'd love to hear from you!</p>

          <div className="flex flex-col md:flex-row gap-6 mt-6">

            {/* Contact Info */}
            <div className="flex flex-col w-full md:w-1/2 space-y-4">
              {contactInfo.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-start text-gray-700 dark:text-gray-300">
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-800 dark:text-white" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-800 dark:text-white" required />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" className="w-full p-3 border rounded-md dark:bg-gray-900 dark:border-gray-800 dark:text-white" required></textarea>
                <button type="submit" className="w-full bg-[#1a3566ee] text-white py-3 rounded-md hover:bg-blue-700">Send Message</button>
              </form>
            </div>
          </div>
        </section>


        <div className="w-10/12 mx-auto px-4 py-8">
          <Link to="/">
            <button className="inline-flex items-center gap-1 shadow-2xl bg-[#031278] text-white px-4 py-2 rounded-full">
              <FaRegArrowAltCircleLeft className="text-xl" />Back To Home
            </button>
          </Link>
        </div>
        </div>


    </>
  );
};

export default ContactPage;
