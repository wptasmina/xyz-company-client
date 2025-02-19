import { Helmet } from "react-helmet-async";
import Banner from '../components/Banner'
import Footer from './../components/Footer';
import About_section from './About_section';
import PackagesSection from '../components/PackagesSection';
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonial/Testimonials";
// import FeaturesSection from "./FeaturesSection/FeaturesSection";




export default function Home() {
  return (
    <>
    <Helmet>
        <title>TrakSmart || Home</title>
    </Helmet>

    <div className="dark:bg-gray-900 text-gray-800 dark:text-white">
    <Navbar />
      <Banner/>
      <About_section/>
      <PackagesSection/> 
      <Testimonials />
      {/* <FeaturesSection /> */}
      <Footer />
    </div>
     
    </>
  )
}


