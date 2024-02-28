"use client"
import React from 'react';
import { Image } from '@chakra-ui/react';


const Collab = ({src}) => {
  return (
    <div className=''>
        <Image src={src} className='w-[100px] h-[100px]' />


    </div>
  )
}

export default Collab;