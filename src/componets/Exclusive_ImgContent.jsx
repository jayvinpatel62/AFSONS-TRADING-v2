import { Button, Container } from '@mui/material'
import React from 'react'
import img1 from '../image/display__f5509jfp9nyq_xlarge.jpg'
function Exclusive_ImgContent() {
  return (
    <div className='bg-gray-950 py-[100px]'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10'>
            <div className='content flex flex-col gap-10 text-white'>
               <div> 
                    <h3  className='text-2xl font-normal mb-5'>Exclusive Collection</h3>
                    <h2 className='text-4xl font-bold'>iPhone and Samsung Smartphones
                    </h2>
                    <br />
                    <p className='text-md font-normal text-slate-100 mb-5'>When it comes to cutting-edge technology, iPhone and Samsung smartphones stand at the forefront. These devices offer exceptional performance, advanced features, and sleek designs, making them a top choice for both casual users and professionals alike.
                    </p>
                    <p className='text-md font-normal text-slate-100'>If you're looking for premium smartphones that combine power, innovation, and style, our exclusive collection of iPhone and Samsung devices is designed to meet your needs.</p>
                    <br />
                    <br />
                    <a href="#_" className="relative text-[20px] px-10 py-2.5 overflow-hidden group bg-yellow-500  hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                      <span className="relative">Shop Now</span>
                    </a>  
                </div>
            </div>
            <div>
                <img src={img1} alt="" className='rounded-[20px]' />
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Exclusive_ImgContent
