
import React from 'react'


const Top_Categories_Week = () => {
    return (
        <>
            <div className=' pb-[100px]'>
                <div className='my-container'>
                    <div className=' flex justify-between'>
                        <div>
                            <h1 className=' font-bold text-[22px] p-3'>Top Categories This Week </h1>
                        </div>
                        <div>
                            <ul className=' flex gap-1 font-semibold text-[20px] text-[#969696]'>
                                <li className='transition-all rounded hover:bg-yellow-400 hover:text-black p-3'>Projector</li>
                                <li className='transition-all rounded hover:bg-yellow-400 hover:text-black p-3'>Light</li>
                                <li className='transition-all rounded hover:bg-yellow-400 hover:text-black p-3'>Laptop</li>
                                <li className='transition-all rounded hover:bg-yellow-400 hover:text-black p-3'>Headphone</li>
                                <li className='transition-all rounded hover:bg-yellow-400 hover:text-black p-3'>Google Glass</li>
                            </ul>
                        </div>
                    </div>
                    <hr />

                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[20px]'>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-1.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Xpeed Projector</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <p className=' text-[#949292]'>$520.00</p>
                                            <span className=' text-[#3465D2]'>$499.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-2.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Apple iPhone 7s</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <p className=' text-[#949292]'>$690.00</p>
                                            <span className=' text-[#3465D2]'>$660.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-3.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Apple iPhone 6s</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$299.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex  border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-4.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Wireless MicroPhone</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$70.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-5.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>CC Camera</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <p className=' text-[#949292]'>$240.00</p>
                                            <span className=' text-[#3465D2]'>$210.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-6.jpg")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Moving Camera</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$230.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-7.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Core i7 Laptop</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$125.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r' >
                                    <div>
                                        <img src={require("../image/top-cate-8.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Unlocked Mobile Phone</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$125.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className=' flex border-r'>
                                    <div>
                                        <img src={require("../image/top-cte-9.jpg")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Stereo Headset</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$16.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r'>
                                    <div>
                                        <img src={require("../image/top-cate-10.png")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Camera Drone</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <p className=' text-[#949292]'>$720.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r px-1'>
                                    <div>
                                        <img src={require("../image/top-cate-11.jpg")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>Holy Stone Drone</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <p className=' text-[#949292]'>$720.00</p>
                                            <span className=' text-[#3465D2]'>$540.00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex border-r '>
                                    <div>
                                        <img src={require("../image/top-cate-12.jpg")} width={150} alt="" />
                                    </div>
                                    <div className=' pt-[30px]'>
                                        <h5 className=' font-bold'>LED Projecter</h5>
                                        <div className=' flex gap-2 font-bold pt-[10px]'>
                                            <span className=' text-[#3465D2]'>$20.00</span>
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

export default Top_Categories_Week
