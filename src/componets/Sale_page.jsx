import {  LinearProgress, linearProgressClasses, Stack, styled } from '@mui/material'
import React from 'react'

const Sale_page = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({

        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#F2CC0F',
            ...theme.applyStyles('dark', {
                backgroundColor: '#F2CC0F',
            }),
        },
    }));
    return (
        <>
            <div className=' bg-[#F9F9F9] py-[100px]'>
            <div className='my-container'>
                    <div className=' flex gap-6'>
                        <div className='w-[30%]'>
                            <div className='Sale_img pb-[20px] rounded'>
                                <img src={require("../image/sale_img_1.png")} className='w-full' alt="" />
                                {/* <div className="content">
                                    <p className=' text-[12px] font-semibold pb-[5px]'>Basic Gift Idea</p>
                                    <h1>Mini Two Wheel</h1>
                                    <p className=' font-semibold pb-[10px]'>Self Balancing Scooter</p>
                                    <button className=' w-[100px] h-[40px] rounded text-[12px] bg-yellow-400 text-white transition-all font-semibold hover:text-black hover:border hover:bg-transparent border-black'>Go Shop</button>
                                </div> */}
                            </div>
                            <div className='w-full'>
                                <img src={require("../image/sale_img_2.png")} className='w-full' alt="" />
                                {/* <div className="content">
                                    <p className=' text-[12px] font-semibold pb-[5px]'>Get 50% Off</p>
                                    <h1>New Arrivals</h1>
                                    <p className=' font-semibold pb-[10px]'>in Accessories at Best Prices.</p>
                                    <button className=' w-[100px] h-[40px] rounded text-[12px] bg-yellow-400 text-white transition-all font-semibold hover:text-black hover:border hover:bg-transparent border-black'>Go Shop</button>
                                </div> */}
                            </div>
                        </div>
                        <div className='flex-1'>
                            <div className=' flex justify-between ' >
                                <div>
                                    <h1 className=' font-bold'>Hot Sale</h1>
                                </div>
                                <div>
                                    <ul className=' flex gap-6 font-semibold text-[15px] mb-1'>
                                        <li className='hover:bg-yellow-400 hover:text-black transition-all py-[8px] px-[8px] rounded text-[#969696]'>16% Off</li>
                                        <li className='hover:bg-yellow-400 hover:text-black transition-all py-[8px] px-[8px] rounded text-[#969696]'>25% Off</li>
                                        <li className='hover:bg-yellow-400 hover:text-black transition-all py-[8px] px-[8px] rounded text-[#969696]'>33% Off</li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <div className='  grid grid-cols-3 pt-[20px]'>
                                <div className=' bg-white px-10'>
                                    <div>
                                        <img src={require("../image/sale_img_3.jpg")} width={200} alt="" />
                                    </div>
                                    <div className=' text-center'>
                                        <p>Intel Laptop</p>
                                    </div>
                                    <div className=' flex pl-[40px] gap-2 text-[14px] font-bold'>
                                        <p className=' text-[#949292]'>$720.00</p>
                                        <span className=' text-[#3465D2]'>$540.00</span>
                                    </div>
                                    <div className=' py-[20px]'>
                                        <h5 className=' text-yellow-400 text-[14px] text-center'>Hurry up! <span className='text-[#777777]'> Offers ends in: </span></h5>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <div>
                                            <p className=' border px-3 py-2 rounded-[50%] bg-yellow-400'>0</p>
                                            <p className=' text-[10px] uppercase'>days</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Hours</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Minutes</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Seconds</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' bg-white px-10'>
                                    <div>
                                        <img src={require("../image/sale_img_4.jpg")} width={200} alt="" />
                                    </div>
                                    <div>
                                        <p className=' text-center'>Luxury Watche</p>
                                        <div className='flex gap-2 pl-[40px] text-[14px] font-bold'>
                                            <p className=' text-[#949292]'>$720.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                        <div>
                                            <div className=' text-[10px] text-[#77777] pt-[10px] flex justify-between'>
                                                <p>Already Sold: 25</p>
                                                <span>Available:27</span>
                                            </div>
                                            <Stack sx={{ flexGrow: 1 }}>
                                                <br />
                                                <div className=''>
                                                    <BorderLinearProgress className='w-full' variant="determinate" value={80} />
                                                </div>
                                            </Stack>
                                            <div>
                                                <div className='pt-[30px] pb-[20px]'>
                                                    <h5 className=' text-yellow-400 text-[14px] text-center'>Hurry up! <span className='text-[#777777]'> Offers ends in: </span></h5>
                                                </div>
                                                <div className=' flex gap-2 pb-[20px]'>
                                                    <div>
                                                        <p className=' border px-3 py-2 rounded-[50%] bg-yellow-400'>0</p>
                                                        <p className=' text-[10px] uppercase'>days</p>
                                                    </div>
                                                    <div>
                                                        <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                                        <p className=' text-[10px] uppercase'>Hours</p>
                                                    </div>
                                                    <div>
                                                        <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                                        <p className=' text-[10px] uppercase'>Minutes</p>
                                                    </div>
                                                    <div>
                                                        <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                                        <p className=' text-[10px] uppercase'>Seconds</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' bg-white px-10'>
                                    <div>
                                        <img src={require("../image/sale_img_5.jpg")} width={200} alt="" />
                                    </div>
                                    <div className=' text-center'>
                                        <p>3D Glass</p>
                                    </div>
                                    <div className=' flex pl-[40px] gap-2 text-[14px] font-bold'>
                                        <p className=' text-[#949292]'>$640.00</p>
                                        <span className=' text-[#3465D2]'>$540.00</span>
                                    </div>
                                    <div className=' py-[20px]'>
                                        <h5 className=' text-yellow-400 text-[14px] text-center'>Hurry up! <span className='text-[#777777]'> Offers ends in: </span></h5>
                                    </div>
                                    <div className=' flex gap-2'>
                                        <div>
                                            <p className=' border px-3 py-2 rounded-[50%] bg-yellow-400'>0</p>
                                            <p className=' text-[10px] uppercase'>days</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Hours</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Minutes</p>
                                        </div>
                                        <div>
                                            <p className=' border px-2 py-2 rounded-[50%]  bg-yellow-400'>00</p>
                                            <p className=' text-[10px] uppercase'>Seconds</p>
                                        </div>
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

export default Sale_page
