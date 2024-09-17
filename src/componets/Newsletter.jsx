import { Container } from '@mui/material'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-yellow-500 py-[100px]'>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left gap-5">
            <div className='text-[#333e48] p-4'>
                <h2 className='text-3xl font-semibold mb-3'>Newsletter & Get Updates</h2>
                <p className='text-md'>Sign up for our newsletter to get up-to-date from us</p>
            </div>
            <div className='p-4'>
                <div className="flex overflow-hidden rounded-full  lg:flex-row focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <input className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-500 bg-white outline-none  focus:placeholder-transparent" type="text" name="email" placeholder="Enter your email" aria-label="Enter your email" />

                    <button className="px-8 py-4 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Submit</button>
                </div>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Newsletter
