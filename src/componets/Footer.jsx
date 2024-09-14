
import React from 'react'
import { FaPinterestP, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className=' bg-[#F6D700]'>
                <div className='container'>
                    <div className='footer h-[100px] flex justify-between'>
                        <div className='left'>
                            <p className=' text-[#777]'>© 2021 XpeedStudio All Rights Reserved</p>
                        </div>
                        <div className='right'>

                            <div className="  flex gap-5 p-5">
                                <div className='footer flex gap-2'>
                                    <FaFacebookF />
                                    <p>Facebook</p>
                                </div>
                                <div className='footer flex gap-2'>
                                    <FaTwitter />
                                    <p>Twitter</p>
                                </div>
                                <div className='footer flex gap-2'>
                                    <FaPinterestP />
                                    <p>Pinterest</p>
                                </div>
                                <div className='footer flex gap-2'>
                                    <FaInstagram />
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
