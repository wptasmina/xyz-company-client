import React from 'react'
import Banner from '../components/Banner'
import Footer from './../components/Footer';
import About_section from './About_section';
import PackagesSection from '../components/PackagesSection';


export default function Home() {
  return (
    <>
    
      <Banner/>
      <About_section/>
      <PackagesSection/> 
      <Footer />
    </>
  )
}