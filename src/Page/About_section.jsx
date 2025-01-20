import React from "react";

const About_section = () => {
  return (
    <section className="py-12 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Our Service</h2>
        <p className="text-lg leading-relaxed mb-8">
          Managing company assets efficiently is a cornerstone of any successful business. At <span className="font-semibold">XYZ</span>, we have developed a comprehensive web application designed to simplify asset management for businesses of all sizes.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-none space-y-4 text-left">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Streamlined asset tracking for returnable and non-returnable items.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Role-specific dashboards tailored for HR managers and employees.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Flexible subscription plans to fit businesses of any size.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Secure data handling with industry-standard encryption.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Real-time notifications for all actions and requests.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Responsive design for mobile, tablet, and desktop devices.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Advanced search and filtering for efficient navigation.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✔</span>
            Visual insights like pie charts for better decision-making.
          </li>
        </ul>
        <p className="text-lg leading-relaxed mt-8">
          Our mission is to empower businesses by offering an intuitive platform that reduces manual effort, enhances transparency, and ensures optimal utilization of company assets. Experience seamless asset management with <span className="font-semibold">XYZ</span> today.
        </p>
      </div>
    </section>
  );
};

export default About_section;
