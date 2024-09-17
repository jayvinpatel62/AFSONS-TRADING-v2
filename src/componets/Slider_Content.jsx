import React from 'react'
import { Button } from '@mui/material'


export default function Slider_Content({textOne,bigTitle1,bigTitle2, btn1, btn2,imgLeft, imgRight}) {
  return (
    <div className='flex gap-20 items-center justify-center min-h-[80vh]'>
    <img src={imgLeft} className='max-w-full w-auto'/>
    <div className='content text-center flex flex-col gap-10'>
        <h3 className='text-[32px] text-yellow-500 '>{textOne}</h3>
        <h2 className='text-[49px] text-[#212529] font-[700] leading-[-2px]'>
            {bigTitle1}
            <br />
            {bigTitle2}
        </h2>
        <div className='flex gap-5 items-center justify-center'>
        <a href="#_" class="text-[20px] px-10 py-2.5 min-w-[200px] m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-gray-900 text-gray-900 ">
        <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-gray-900 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
        <span class="relative text-gray-900 transition duration-300 group-hover:text-white ease">{btn1}</span>
        </a>

        <a href="#_" class="relative text-[20px] min-w-[200px] px-10 py-2.5 overflow-hidden group bg-yellow-500  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
        <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span class="relative">{btn2}</span>
        </a>  
        </div>
    </div>
    <img src={imgRight} className='max-w-full w-auto'/>
  </div>
  )
}
