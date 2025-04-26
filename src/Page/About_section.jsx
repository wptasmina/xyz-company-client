
import WhyChoose from "../components/Features/Why-Choose/WhyChoose";


import Call_Action from "../components/Features/Call-to-Action/Call_Action";
import Works from "../components/Features/Work-section/Works";



const About_section = () => {

    return (
        <div className="bg-gray-100 dark:bg-[#1e293b] overflow-hidden">

            {/* About_section Hero Section */}
            <section className="bg-[#031278] text-center py-12">
                <div className="text-center w-10/12 mx-auto">
                    <h1 data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                        className="text-white dark:text-white md:text-4xl text-2xl font-bold mb-4">
                        About Our Service
                    </h1>
                    <p data-aos="fade-left"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                        className="text-md sm:text-lg text-white overflow-hidden">
                        The ultimate solution for managing returnable and non-returnable company assets.
                    </p>
                </div>
            </section>

            <div className="text-center w-10/12 mx-auto">

                {/* Features Section */}
                <WhyChoose />


                {/* How It Works Section */}
                <Works />


                {/* Call-to-Action Section */}
                {/* <Call_Action /> */}
            </div>
        </div>
    );
};

export default About_section
