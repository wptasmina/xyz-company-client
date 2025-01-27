import { Helmet } from "react-helmet-async";
import Banner from '../components/Banner'
import Footer from './../components/Footer';
import About_section from './About_section';
import PackagesSection from '../components/PackagesSection';
import Navbar from "../components/Navbar";
import Payment from "../Payment component/Payment/Payment";



export default function Home() {
  return (
    <>
    <Helmet>
        <title>TrakSmart || Home</title>
    </Helmet>

      <Navbar />
      <Banner/>
      <About_section/>
      <PackagesSection/> 
      <Payment />
      <Footer />
    </>
  )
}


