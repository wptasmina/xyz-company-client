import { useState } from "react";
import { Helmet } from "react-helmet-async";
import contact from "/contact.jpg";

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
      
      <div className="bg-white dark:bg-[#172231] py-10">
        <section className="w-10/12 mx-auto md:p-10 md:shadow-lg rounded-lg md:bg-white md:dark:bg-[#101927]">
          {/* Heading */}
          <h2 className="text-3xl font-bold md:text-center text-[#1a3566ee] dark:text-white pb-2">Contact Us</h2>
          <p className="md:text-center text-gray-600 dark:text-gray-300">We'd love to hear from you!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            {/* Contact Info */}
            <div className="flex justify-center items-center">
              <img src={contact} alt="image" className="rounded-lg" />
            </div>

            {/* Contact Form */}
            <div className="w-full">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 border rounded-md dark:bg-[#101927] dark:border-gray-800 dark:text-white" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 border rounded-md dark:bg-[#101927] dark:border-gray-800 dark:text-white" required />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message" className="w-full p-3 border rounded-md dark:bg-[#101927] dark:border-gray-800 dark:text-white" required></textarea>
                <button type="submit" className="w-full bg-[#1a3566ee] text-white py-3 rounded-md hover:bg-blue-700">Send Message</button>
              </form>
            </div>
          </div>
       
        </section>
      </div>

    </>
  );
};

export default ContactPage;
