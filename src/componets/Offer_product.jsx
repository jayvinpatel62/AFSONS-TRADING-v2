
import React from 'react'

import proImg1 from '../image/asset 29.png'
import proImg2 from '../image/Apple-Vision-PRO-PNG-1.png'
import proImg3 from '../image/trading-4.png'
import proImg4 from '../image/245216_16_yikuub.png'
import proImg5 from '../image/trading-5.png'
import { Container } from '@mui/material'

const Offer_product = () => {
    return (
        <>
            <div className='py-[100px]'>
                <Container>
                <div className='h-[600px] relative'>
                    {/* <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5'>
                        <img src={require("../image/product.jpg")} className='me-0' alt="" />
                        <img src={require("../image/offer_product_1.png")}  className='me-0' alt="" />
                        <img src={require("../image/offer_product_2.jpg")}  className='me-0' alt="" />
                    </div> */}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-full grid-flow-col lg:grid-rows-2'>
                        <div className='bg-slate-200 relative overflow-clip col-span-2 row-span-2'>
                            <div className='text-right p-[30px] absolute top-3 right-3 z-10'>
                                <div className='text-[24px] text-yellow-500 font-semibold'>Future Product</div>
                                <div className='text-[40px] text-dark font-bold'>Smart Phones</div>
                            </div>
                            <img src={proImg1} className='max-w-full w-auto scale-105 hover:scale-110'/>
                        </div>
                       
                        <div className='bg-slate-200 relative overflow-clip'>
                            <div className='text-right p-[20px] absolute top-2 right-2 z-10'>
                                <div className='text-[16px] text-yellow-500 font-semibold'>Feature Product</div>
                                <div className='text-[20px] text-dark font-bold'>Laptop</div>
                            </div>
                            <img src={proImg3} className='w-80 scale-80 hover:scale-110 absolute bottom-[-50px]'/>
                        </div>

                        <div className='bg-slate-200 relative overflow-clip'>
                            <div className='text-right p-[20px] absolute top-2 right-2 z-10'>
                                <div className='text-[16px] text-yellow-500 font-semibold'>Future Product</div>
                                <div className='text-[20px] text-dark font-bold'>Camera</div>
                            </div>
                            <img src={proImg4} className='w-80 scale-100 hover:scale-110 absolute bottom-[-60px]'/>
                        </div>
                       
                        <div className='bg-slate-200 relative overflow-clip'>
                            <div className='text-right p-[20px] absolute top-2 right-2 z-10'>
                                <div className='text-[16px] text-yellow-500 font-semibold'>Future Product</div>
                                <div className='text-[20px] text-dark font-bold'>Game Remote</div>
                            </div>
                            <img src={proImg5} className='w-80 scale-105 hover:scale-110 absolute bottom-[-50px]'/>
                        </div>
                       
                        <div className='bg-slate-200 relative overflow-clip'>
                            <div className='text-right p-[20px] absolute top-2 right-2 z-10'>
                                <div className='text-[16px] text-yellow-500 font-semibold'>minimal Product</div>
                                <div className='text-[20px] text-dark font-bold'>Apple Goggles</div>
                            </div>
                            <img src={proImg2} className='max-w-full w-80 hover:scale-110 absolute bottom-[-50px] object-contain'/>
                        </div>
                    </div>
                </div>
                </Container>
            </div>
        </>
    )
}

export default Offer_product
