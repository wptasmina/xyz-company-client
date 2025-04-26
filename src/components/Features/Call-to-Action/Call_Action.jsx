import React from 'react'
import { Link } from 'react-router-dom'

export default function Call_Action() {
  return (
    <section className="bg-[#031278] text-white text-center py-12  px-4 sm:px-0">
      <h2 data-aos="fade-up"
        ata-aos="zoom-in-left"
        data-aos-duration="1000"
        className="text-3xl font-bold mb-4">
        Ready to Get Started?
      </h2>
      <p data-aos="fade-up"
        ata-aos="zoom-in-right"
        data-aos-duration="1000"
        className="mb-6">
        Join us today and streamline your asset management process.
      </p>
      <Link to="/login" className="bg-white text-[#20319e]  px-6 py-3 rounded-lg shadow-lg font-bold">
        Sign Up Now
      </Link>
    </section>
  )
}
