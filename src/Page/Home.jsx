import { Helmet } from "react-helmet-async";
import Banner from '../components/Banner'
import About_section from './About_section';
import PackagesSection from '../components/PackagesSection';
import Testimonials from "../components/Testimonial/Testimonials";


export default function Home() {
  return (
    <>
    <Helmet>
        <title>TrakSmart || Home</title>
    </Helmet>
    
      <Banner/>
      <About_section/>
      <PackagesSection/> 
      <Testimonials />
    </>
  )
}


