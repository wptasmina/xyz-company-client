import { Link } from "react-router-dom"


const About_section = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <section className="bg-[#031278] text-white text-center py-12 px-2 ">
                <h1 data-aos="fade-right"
      data-aos-duration="1000"
     data-aos-easing="ease-in-sine" className="sm:text-4xl text-2xl font-bold mb-4">About Our Service</h1>
                <p data-aos="fade-left"
      data-aos-duration="1000"
     data-aos-easing="ease-in-sine" className="text-md sm:text-lg">The ultimate solution for managing returnable and non-returnable company assets.</p>
            </section>

            {/* Features Section */}
            <section className="sm:w-10/12 w-full mx-auto py-12 px-6 sm:px-0">
            <div
             className="max-w-6xl mx-auto text-center">
                <h2 data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"className="sm:text-4xl text-3xl text-[#121b53] font-bold text-center mb-6">Why Choose Us?</h2>
                <p data-aos="fade-up"
            ata-aos="zoom-in-left"
            data-aos-duration="1000" className="text-gray-500 dark:text-gray-400 mt-3 mb-8">Smart, secure, and efficient asset management for your business.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                     data-aos-duration="3000"
                    className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">Track Assets with Ease</h3>
                        <p>Our platform simplifies asset tracking, making it easy to manage returnable and non-returnable items in real time.</p>
                    </div>
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                        className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">For HR Managers & Employees</h3>
                        <p>HR Managers can monitor company assets, while employees can easily request and return items.</p>
                    </div>
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">Secure & Scalable</h3>
                        <p>With advanced security measures and scalable features, our system grows with your business needs.</p>
                    </div>
                    <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">Real-Time Asset Tracking</h3>
                        <p>Monitor company assets instantly with live updates.</p>
                    </div>
                    <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">Returnable & Non-returnable Items</h3>
                        <p>Easily manage both returnable and consumable assets.</p>
                    </div>
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="bg-white shadow-lg p-6 rounded-lg border hover:border-[#20319ee7] duration-300">
                        <h3 className="text-xl font-semibold mb-3">Secure Login & Authentication</h3>
                        <p>Advanced security ensures data protection and authorized access.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="bg-gray-200 ">
                <div className="py-12 sm:w-10/12 w-full  px-6 sm:px-0 mx-auto">
                <h2 data-aos="fade-up"
                    ata-aos="zoom-in-left"
                    data-aos-duration="1000" 
                    className="text-3xl font-bold text-[#131c58] text-center mb-6">How It Works?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000" 
                        className="text-center border border-[#20319e83] rounded-md py-4">
                        <div  className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">1</div>
                        <h3 data-aos="fade-left" ata-aos="zoom-in-left" data-aos-duration="1000" className="text-xl font-semibold mb-3">Sign Up</h3>
                        <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className='px-4'>HR Managers or employees sign up to start managing their assets.</p>
                    </div>
                    <div data-aos="fade-up"
                         ata-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-center border border-[#20319e83] rounded-md py-4">
                        <div className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">2</div>
                        <h3 data-aos="fade-left" ata-aos="zoom-in-left"  className="text-xl font-semibold mb-3">Manage Assets</h3>
                        <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000">Track, request, and manage returnable/non-returnable items efficiently.</p>
                    </div>
                    <div data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-center border border-[#20319e83] rounded-md py-4">
                        <div className="bg-[#031278] text-white md:w-16 w-10 md:h-16 h-10 rounded-full flex items-center justify-center mx-auto mb-4 md:text-2xl text-lg font-bold">3</div>
                        <h3 data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000" className="text-xl font-semibold mb-3">Monitor Usage</h3>
                        <p data-aos="fade-right" ata-aos="zoom-in-left" data-aos-duration="1000">HR Managers can monitor all requests, usage statistics, and pending returns.</p>
                    </div>
                </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-[#031278] text-white text-center py-12  px-4 sm:px-0">
                <h2 data-aos="fade-up"
                        ata-aos="zoom-in-left"
                        data-aos-duration="1000" className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p data-aos="fade-up"
                        ata-aos="zoom-in-right"
                        data-aos-duration="1000" className="mb-6">Join us today and streamline your asset management process.</p>
                <Link to="/login" className="bg-white text-[#20319e]  px-6 py-3 rounded-lg shadow-lg font-bold">
                    Sign Up Now
                </Link>
            </section>
        </div>
    );
};

export default About_section
