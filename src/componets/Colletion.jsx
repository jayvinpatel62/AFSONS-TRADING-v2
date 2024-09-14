import {  Rating } from '@mui/material'
import React from 'react'
import { CiHeart } from "react-icons/ci";

const Colletion = () => {
    return (
        <>
            <div className='colletion-img py-[100px]'>
                <div className='my-container'>
                    <div className=' w-[90%]'>
                        <div className=' flex justify-between py-[30px]'>
                            <h1 className=' font-semibold text-[22px]'>Gadget Makes Your Life Easy</h1>
                            <button className=' rounded-full bg-yellow-400 w-[190px] py-[20px] text-[14px] font-semibold text-white'>View Collections</button>
                        </div>
                        <div className=' flex gap-5'>
                            <div className=' bg-white flex  mb-[30px]' >
                                <div >
                                    <img src={require("../image/colletions-2.jpg")} className=' w-[600px] p-2' alt="" />
                                </div>
                                <div>
                                    <div className=' flex justify-between w-[300px] py-10 px-2'>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                                        <CiHeart />
                                    </div>
                                    <div>
                                        <h5 className='px-5 font-semibold'>Xpeed Laptop</h5>
                                        <div className=' flex px-5 font-semibold gap-3 pb-[20px]'>
                                            <p className=' text-[#949292]'>$640.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                        <button className='px-5 mx-5 bg-yellow-400 w-[180px] mb-[50px] rounded-full h-[35px] transition-all font-semibold hover:bg-transparent hover:border hover:border-black'>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' bg-white flex mb-[30px]'>
                                <div >
                                    <img src={require("../image/colletions-3jpg.jpg")} className=' w-[600px] p-2' alt="" />
                                </div>
                                <div>
                                    <div className=' flex justify-end w-[300px] py-10 px-2'>
                                        {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly /> */}
                                        <CiHeart />
                                    </div>
                                    <div>
                                        <h5 className='px-5 font-semibold'>Intel Laptop</h5>
                                        <div className=' flex px-5 font-semibold gap-3 pb-[20px]'>
                                            <p className=' text-[#949292]'>$640.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                        <button className='px-5 mx-5 bg-yellow-400 w-[180px] rounded-full h-[35px] transition-all font-semibold hover:bg-transparent hover:border hover:border-black'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex gap-5'>
                            <div className=' bg-white flex'>
                                <div >
                                    <img src={require("../image/colletions-4.png")} className=' w-[600px] p-2' alt="" />
                                </div>
                                <div>
                                    <div className=' flex justify-between w-[300px] py-10 px-2'>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                                        <CiHeart />
                                    </div>
                                    <div>
                                        <h5 className='px-5 font-semibold'>Core i7 Laptop</h5>
                                        <div className=' flex px-5 font-semibold gap-3 pb-[20px]'>
                                            <p className=' text-[#949292]'>$640.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                        <button className='px-5 mx-5 bg-yellow-400 w-[180px] mb-[50px] rounded-full h-[35px] transition-all font-semibold hover:bg-transparent hover:border hover:border-black'>Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className=' bg-white flex'>
                                <div >
                                    <img src={require("../image/colletions-5.jpg")} className=' w-[600px] p-2' alt="" />
                                </div>
                                <div>
                                    <div className=' flex justify-between w-[300px] py-10 px-2'>
                                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                                        <CiHeart />
                                    </div>
                                    <div>
                                        <h5 className='px-5 font-semibold'>Xpeed Laptop V2</h5>
                                        <div className=' flex px-5 font-semibold gap-3 pb-[20px]'>
                                            <p className=' text-[#949292]'>$640.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                        <button className='px-5 mx-5 bg-yellow-400 w-[180px] mb-[50px] rounded-full h-[35px] transition-all font-semibold hover:bg-transparent hover:border hover:border-black'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Colletion
