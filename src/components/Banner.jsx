import img1 from '../assets/slide-1.jpg'
import img2 from '../assets/slide-2.webp'
import img3 from '../assets/slide-3.png'
import img4 from '../assets/slide-4.jpg'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
          <img src={img1} className='relative object-cover bg-no-repeat w-full h-[550px] ' alt="slider image" />
          <div class="absolute top-1/2 left-1/2 border-2  border-orange-700 rounded-md p-1 -translate-x-[50%] ">
            <button className='bg-blue-950 px-4 py-4 rounded-md text-orange-700 font-bold text-xl'>
              Join as HR Manager
            </button>
          </div>
      </SwiperSlide>

      <SwiperSlide>
          <img src={img2} className='relative object-cover bg-no-repeat w-full h-[550px] ' alt="slider image" />
          <div class="absolute top-1/2 left-1/2 border-2  border-orange-700 rounded-md p-1 -translate-x-[50%] ">
            <button className='bg-blue-950 px-4 py-4 rounded-md text-orange-700 font-bold text-xl'>
            Join as an Employee
            </button>
          </div>
      </SwiperSlide>

    </Swiper>
  </>
  )
}
