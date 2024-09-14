import { Button, Container } from '@mui/material'
import React from 'react'
import img1 from '../image/video-banner_1200x.webp'
function Exclusive_ImgContent() {
  return (
    <div className='bg-gray-900 py-[100px]'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
            <div className='content flex flex-col gap-10 text-white'>
               <div> 
                    <h3  className='text-2xl font-normal mb-5'>Exclusive Collection</h3>
                    <h2 className='text-4xl font-bold'>3D Video Game Controller</h2>
                    <br />
                    <p className='text-md font-normal text-slate-100 mb-5'>When referring to a "3D video game controller," it's important to note that most modern video game controllers are designed to operate in three dimensions, allowing users to navigate characters and objects within a 3D virtual space.</p>
                    <p className='text-md font-normal text-slate-100'>However, if you are specifically looking for controllers that incorporate 3D spatial tracking or other advanced features, here are a few examples:</p>
                    <br />
                    <br />
                    <a href="#_" className="relative text-[20px] px-10 py-2.5 overflow-hidden group bg-yellow-500  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                      <span className="relative">Shop Now</span>
                    </a>  
                </div>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Exclusive_ImgContent
