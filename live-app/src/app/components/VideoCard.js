import React from 'react';
import Image from 'next/image';
import localFont from "next/font/local";


import play from '../assets/video-play-icon.svg';

const myFont = localFont({ src: "../fonts/Khyay-Regular.ttf" });

const VideoCard = ({title}) => {
  return (
    <div className='video-bg max-w-[390px] h-[215px] rounded-[15px]'>
        <p style={myFont.style} className='text-white text-bold text-center sm:text-[16px] max-sm:text-[13px] pt-[20px]'>{title}</p>
        <Image src={play} className='cursor-pointer w-[50px] h-[50px] mx-auto mt-[50px] bg-white' />
        
    </div>
  )
}

export default VideoCard