'use client'

import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay} from 'swiper/modules';

import p1 from '../assets/photo1.jpg';
import p2 from '../assets/photo2.jpg';
import p3 from '../assets/photo3.jpg';
import p4 from '../assets/photo4.jpg';
import p5 from '../assets/photo5.jpg';
import p6 from '../assets/photo6.jpg';
import p7 from '../assets/photo7.jpg';


const SwiperImage = () => {
  return (
    
    <Swiper
    loop={true}
    centeredSlides={true}
    
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
      
    }}
    modules={[Autoplay]}
   className='max-w-[700px] max-h-[427px]  rounded-2xl'
    >
      <SwiperSlide ><Image src={p1} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide ><Image src={p2} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide><Image src={p3} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide><Image src={p4} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide><Image src={p5} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide><Image src={p6} className='w-full h-full' /></SwiperSlide>
      <SwiperSlide><Image src={p7} className='w-full h-full' /></SwiperSlide>
      
    </Swiper>
    
  )
}

export default SwiperImage;