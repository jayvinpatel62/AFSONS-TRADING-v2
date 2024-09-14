
import React from 'react'

const Main_Footer = () => {
    return (
        <>
            <div className=' py-[80px]'>
                <div className='my-container'>
                    {/* <img src={require("../image/asset 0.png")} width={150} alt="" /> */}
                    <h1 className=' font-bold text-[30px]'>AFSONS</h1>
                    <div className='flex justify-between pt-[60px]'>
                        <div>
                            <p className=' text-[#999999] text-[25px] font-normal'>Got Question? Call us <br /> 24/7</p>
                            <h5 className=' font-normal text-[25px] pb-[20px]'>[80] 1017 197</h5>
                            <span className='text-[#777777]'>17 Princess Road, London, Greater </span>
                            <p className='text-[#777777]'>London NW1 8JR, UK</p>
                            <div className=' py-7'>
                                <button className=' bg-yellow-400 w-[180px] h-[60px] rounded text-white font-bold hover:text-yellow-400 hover:bg-transparent hover:border-2 hover:border-yellow-400 transition-all'>View On Map</button>
                            </div>
                        </div>
                        <div >
                            <p className=' text-[25px] text-[#999999] font-light'>We Using</p>
                            <b className='text-[25px] font-normal'>Safe Payments</b>
                            <div className=' flex pt-[20px] gap-7'>
                                <img src={require("../image/footer-1.png")} alt="" />
                                <img src={require("../image/footer-2.png")} alt="" />
                                <img src={require("../image/footer-3.png")} alt="" />
                            </div>
                            <p className=' py-[50px]'>Secured by:</p>
                            <div className=' flex gap-4'>
                                <img src={require("../image/footer-4.png")} alt="" />
                                <img src={require("../image/footer-5.png")} alt="" />
                            </div>
                        </div>
                        <div className=' flex gap-5'>
                            <div>
                                <h4 className=' font-semibold pb-[20px] text-[20px]'>Our Stores</h4>
                                <div className=' leading-9 text-[#777777] font-semibold'>
                                    <p>New York</p>
                                    <p>London SF</p>
                                    <p>Cockfosters BP</p>
                                    <p>Los Angeles</p>
                                    <p>Chicago</p>
                                    <p>Las Vegas</p>
                                    <p>Albarto</p>
                                </div>
                            </div>
                            <div>
                                <h4 className=' font-semibold pb-[20px] text-[20px]'>Quick Links</h4>
                                <div className=' leading-9 text-[#777777] font-semibold'>
                                    <p>Support Center</p>
                                    <p>Term & Conditions</p>
                                    <p>Shipping</p>
                                    <p>Privacy Policy</p>
                                    <p>Help</p>
                                    <p>Products Return</p>
                                    <p>FAQS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_Footer
