
import React from 'react'

const ProductDetails = () => {
    return (
        <>
            <div className='py-[20px]'>
                    <div className='my-container'>
                        <div className='h-[600px]'>
                            <div class="effect-8 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  grid-flow-col lg:grid-rows-2 gap-10">
                                <div class="img_box lg:col-span-2 md:row-span-2">
                                    <img src={require("../image/silder-img-3.avif")} className='object-cover w-full h-full' alt="" />
                                    <div class="info_box">
                                        <p class=''>Get 50% Off</p>
                                        <h2 class=' font-bold text-[25px]'>SHOP WISE WITH PRICE </h2>
                                        <h2 className='font-bold text-[25px]'>COMPARISONS</h2>
                                        <div className=''>
                                            <button className=' border rounded w-[150px] h-[50px] uppercase text-[12px] border-white text-white font-bold transition-all hover:bg-black hover:border-none hover:text-white '>view collection</button>
                                            <button className='uppercase w-[150px] h-[50px] text-[12px] font-bold bg-yellow-400 transition-all rounded ml-[12px] hover:text-yellow-400 hover:border hover:border-yellow-400 hover:bg-transparent'>categories</button>
                                        </div>
                                    </div>
                                </div>
                                <img src={require('../image/top_silder_2.png')} className='w-full h-full object-cover' alt="" />
                                <img src={require('../image/top_main_silder_3.jpg')} className='w-full h-full  object-cover  ' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                </>
                )
}

                export default ProductDetails
