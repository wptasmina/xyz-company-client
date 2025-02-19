import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import { FaCheckCircle, FaTools, FaShieldAlt, FaChartPie, FaBell, FaSearch, FaMoneyBillWave, FaLock, FaPrint, FaMobileAlt } from "react-icons/fa";
import Footer from "../../components/Footer";


const features = [
  { title: "Efficient Asset Tracking", icon: <FaTools />, description: "Categorize returnable & non-returnable assets with ease." },
  { title: "Secure Role-Based Access", icon: <FaShieldAlt />, description: "Separate access for HR Managers and Employees." },
  { title: "Seamless Request Management", icon: <FaChartPie />, description: "Easily request, approve, or reject assets in real-time." },
  { title: "Real-Time Notifications", icon: <FaBell />, description: "Get instant updates on requests and approvals." },
  { title: "Advanced Search & Filters", icon: <FaSearch />, description: "Find assets quickly with powerful filtering & sorting." },
  { title: "Integrated Payment System", icon: <FaMoneyBillWave />, description: "Subscription-based access for HR Managers." },
  { title: "Enhanced Security with JWT", icon: <FaLock />, description: "Secure authentication with JSON Web Tokens." },
  { title: "Printable Approval Details", icon: <FaPrint />, description: "Generate and download asset approval reports." },
  { title: "Fully Responsive Design", icon: <FaMobileAlt />, description: "Optimized for mobile, tablet, and desktop." },
];



const benefits = [
  "Boosts asset management efficiency",
  "Reduces asset loss and mismanagement",
  "Enhances security with role-based access",
  "Streamlines employee asset requests",
  "Provides real-time insights and reports",
  "Saves time with automated tracking",
  "Ensures transparency in asset usage",
  "Simplifies HR workflow",
];

const ProductFeatures = () => {
    return (
      <>
      <Helmet >
        <title>TrakSmart | Contact </title>
      </Helmet>

      <Navbar />
    <div className="bg-white dark:bg-[#161f2c] max-w-6xl mx-auto p-6 mt-10">
        {/* Title & Description */}
        <div data-aos="fade-up"
             ata-aos="zoom-in-left"
            data-aos-duration="1000" 
            className="text-center mb-12">
          <h2 data-aos="fade-up"
            ata-aos="zoom-in-left"
            data-aos-duration="1000" 
            className="dark:text-white text-4xl font-bold text-[#031278] ">Why Choose Our Asset Management System?</h2>
          <p data-aos="fade-up"
            ata-aos="zoom-in-left"
            data-aos-duration="1000" 
            className="text-gray-600 mt-2 text-lg">
            Manage and track your company's assets effortlessly with our feature-rich solution.
          </p>
        </div>
  
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm">
              <div data-aos="fade-right"
                    ata-aos="zoom-in-left"
                    data-aos-duration="1000" 

                    className="text-[#131c58] dark:text-[#131c58] text-2xl mr-3">
                      {feature.icon}
                </div>
              <div>
                <h3 data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-lg dark:text-[#131c58] font-semibold">{feature.title}</h3>
                <p data-aos="fade-up"
                    ata-aos="zoom-in-left"
                    data-aos-duration="1000" className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Benefits section */}
    <section className="mt-12 text-center">
      {/* Title & Description */}
      <h3 data-aos="fade-up"
             ata-aos="zoom-in-left"
            data-aos-duration="1000"  className="dark:text-white text-3xl font-bold text-[#131c58]">Business Benefits</h3>
      <p data-aos="fade-up"
             ata-aos="zoom-in-left"
            data-aos-duration="1000"  className="text-gray-600 mt-2 text-lg">
        Unlock the advantages of smarter asset management.
      </p>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 my-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center bg-[#e6e8fc] p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            <FaCheckCircle className="text-[#031278] mr-3 text-xl" />
            <span className="text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
    </section>
      </div>

    <Footer />
      
      </>
    );
  };
  
  export default ProductFeatures;