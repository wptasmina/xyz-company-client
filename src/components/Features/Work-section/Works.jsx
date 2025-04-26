import React from 'react'

export default function Works() {
  return (
    <section className="bg-gray-200 dark:bg-[#131e2e] rounded-md">
                <div className="py-12 sm:w-10/12 w-full px-6 sm:px-0 mx-auto">
                    <h2 data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000"
                        className="text-3xl font-bold text-[#131c58] dark:text-gray-50 text-center mb-6">How It Works?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div data-aos="fade-up"
                            ata-aos="zoom-in-left"
                            data-aos-duration="1000"
                            className="text-center border border-[#20319e83] rounded-md py-4">
                            <div className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">1</div>
                            <h3 data-aos="fade-left" ata-aos="zoom-in-left" data-aos-duration="1000" className="text-xl font-semibold mb-3 dark:text-gray-50">Sign Up</h3>
                            <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className='px-4 dark:text-gray-500 text-gray-800'>HR Managers or employees sign up to start managing their assets.</p>
                        </div>
                        <div data-aos="fade-up"
                            ata-aos="zoom-in-left"
                            data-aos-duration="1000" className="text-center border border-[#20319e83] rounded-md py-4">
                            <div className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">2</div>
                            <h3 data-aos="fade-left" ata-aos="zoom-in-left" className="text-xl dark:text-gray-50 font-semibold mb-3">Manage Assets</h3>
                            <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className="dark:text-gray-500 text-gray-800 px-2">Track, request, and manage returnable/non-returnable items efficiently.</p>
                        </div>
                        <div data-aos="fade-up"
                            ata-aos="zoom-in-left"
                            data-aos-duration="1000" className="text-center border border-[#20319e83] rounded-md py-4">
                            <div className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">3</div>
                            <h3 data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className="text-xl dark:text-gray-50 font-semibold mb-3">Monitor Usage</h3>
                            <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className="dark:text-gray-500 text-gray-800 px-2">HR Managers can monitor all requests, usage statistics, and pending returns.</p>
                        </div>
                    </div>
                </div>
            </section>
  )
}
