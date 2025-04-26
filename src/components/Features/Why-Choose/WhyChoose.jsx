import React from 'react'

export default function WhyChoose() {
    return (
        <section className="py-12">
            <div
                className="text-center">
                <h2 data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1000" className="dark:text-white sm:text-4xl text-3xl text-[#121b53] font-bold text-center mb-6">Why Choose Us?</h2>
                <p data-aos="fade-up"
                    ata-aos="zoom-in-left"
                    data-aos-duration="1000" className="text-gray-600 dark:text-gray-400 mt-3 mb-8">Smart, secure, and efficient asset management for your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] shadow-lg p-6 rounded-lg border dark:border-gray-900 hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">Track Assets with Ease</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">Our platform simplifies asset tracking, making it easy to manage returnable and non-returnable items in real time.</p>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] dark:border-gray-900 shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">For HR Managers & Employees</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">HR Managers can monitor company assets, while employees can easily request and return items.</p>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] dark:border-gray-900 shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">Secure & Scalable</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">With advanced security measures and scalable features, our system grows with your business needs.</p>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] dark:border-gray-900 shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">Real-Time Asset Tracking</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">Monitor company assets instantly with live updates.</p>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] dark:border-gray-900 shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">Returnable & Non-returnable Items</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">Easily manage both returnable and consumable assets.</p>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white dark:bg-[#131e2e] dark:border-gray-900 shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                    <h3 className="md:text-xl text-lg dark:text-gray-200 font-semibold mb-3">Secure Login & Authentication</h3>
                    <p className="md:text-lg text-sm dark:text-gray-400 text-gray-800">Advanced security ensures data protection and authorized access.</p>
                </div>
            </div>
        </section>
    )
}
