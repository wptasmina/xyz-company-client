
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import { Button } from '@material-tailwind/react';

export default function Banner() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper "
    >
      <SwiperSlide>
        <section className='relative bg-bannerImg bg-no-repeat w-full h-auto object-fill bg-right-top' >
          <div class="w-full h-[400px] object-cover flex justify-center items-center bg-blackOvrtlay">
            <div class="p-2 flex justify-center items-center flex-col gap-4"> 
              <h1 className='text-white md:text-4xl text-2xl font-bold text-center'>Smart Asset Managment for HR Excellence</h1>
              <p className='text-white/80 font-bold md:text-lg text-md md:w-2/3 mx-auto px-2 text-center tracking-wider'>
              TakeSmart simplifies asset tracking and allocation for HR
                managers. Efficiently manage returnable and non-returnable
                items, streamline processes, and keep your workforce organized
                with ease.
              </p>
                <div className='border-2 border-orange-700 rounded-md p-1'> 
                <button
                    className="px-8 text-white py-2 bg-[#0c2757] rounded-md tracking-wider"
                  >
               <Link to="/hr-register">
                    Join As HR Manager
                </Link>
                  </button>
                </div>
            </div>
          </div>
          </section>
      </SwiperSlide>

      <SwiperSlide >
        <section className='bg-bannerImg2 bg-no-repeat bg-cover bg-center w-full h-auto object-fill' >
          <div class="w-full h-[400px] flex justify-center items-center bg-blackOvrtlay">
            <div class="p-2 flex justify-center items-center flex-col gap-4"> 
              <h1 className='text-white md:text-4xl text-2xl font-bold text-center'>Stay productive and organized with TakeSmart!</h1>
              <p className='text-white/80 font-bold md:text-lg text-md md:w-2/3 mx-auto px-2 text-center tracking-wider'>Seamlessly request, track, and manage company-provided assets with ease. Say goodbye to confusion and enjoy a hassle-free experience, ensuring every employee gets what they need—efficiently and effortlessly.</p>
                <div className='border-2 border-orange-700 rounded-md p-1'> 
                <button
                    className="px-8 text-white py-2 bg-[#0c2757] rounded-md tracking-wider"
                  >
                <Link to="/employee-register">
                    Join As Employee
                </Link>
                  </button>
                </div>
            </div>
          </div>
          </section>
      </SwiperSlide>

    </Swiper>
  </>
  )
}
