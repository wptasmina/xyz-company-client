import img1 from '../assets/slide-1.jpg'
import img2 from '../assets/slide-2.webp'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

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
          <img src={img1} className='relative  object-cover bg-no-repeat w-full h-[550px] ' alt="slider image" />
          <div class="absolute bg-black/40 border-2 border-orange-700 rounded-md p-1 top-1/2 left-1/2 -translate-x-[50%] ">
          <Link to="/employee-register">
                  <Button
                    variant="contained"
                    className="normal-case bg-[#1753c2]"
                  >
                    Join as Employee
                  </Button>
                </Link>
          </div>
      </SwiperSlide>

      <SwiperSlide>
          <img src={img2} className='relative object-cover bg-no-repeat w-full h-[550px] ' alt="slider image" />
          <div class="absolute top-1/2 left-1/2 border-2  border-orange-700 rounded-md p-1 -translate-x-[50%] ">
          <Link to="/hr-register">
                  <Button
                    variant="contained"
                    className="normal-case bg-[#1753c2]"
                  >
                    Join as HR Manager
                  </Button>
                </Link>
          </div>
      </SwiperSlide>

    </Swiper>
  </>
  )
}
