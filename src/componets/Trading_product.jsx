
import React from 'react'

const Trading_product = () => {
    return (
        <>
            <div className=' py-[80px]'>
                <div className='my-container'>
                    <div className=' flex'>
                        <div className=' w-[70%]'>
                            <div>
                                <ul className=' flex gap-10 font-semibold py-[10px] pr-[30px]'>
                                    <li className='text-[#969696]  hover:text-black hover:bg-yellow-400 transition-all font-bold p-3 rounded'>Featured Products</li>
                                    <li className='text-[#969696]  hover:text-black hover:bg-yellow-400 transition-all font-bold p-3 rounded'>Trending Products</li>
                                    <li className='text-[#969696] hover:text-black hover:bg-yellow-400 transition-all font-bold p-3 rounded'>Hot Sale</li>
                                </ul>
                                <hr />
                            </div>
                            <div>
                                <div className='flex gap-10'>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-2.png")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-3.jpg")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-4.png")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-5.png")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-6.jpg")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-7.jpg")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-10'>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-8.png")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-9.jpg")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                    <div className=' flex'>
                                        <img src={require("../image/trading-10.jpg")} width={100} alt="" />
                                        <div className='pt-[20px] pl-[10px] '>
                                            <h5>Mini 3D Glass</h5>
                                            <p>$550.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' w-[30%] mx-5'>
                            <img src={require("../image/trading-1.png")} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trading_product
