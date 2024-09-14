
import React from 'react'
import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaGlobeEurope, FaPinterestP, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container } from '@mui/material';

const Top_Navbar = () => {
    return (
        <>
            <div className='bg-[rgb(245,245,245)]'>
                <Container>
                    <div className=' flex justify-between h-[40px]  '>
                        <div className="left flex text-[14px]">
                            <div className=' flex gap-2 p-5'>
                                <LiaShuttleVanSolid />
                                <span>Free Delivery</span>
                            </div>
                            <div className=' flex gap-2 p-5'>
                                <FaGlobeEurope />
                                <p>Returns Policy</p>
                            </div>
                            <div className=' gap-2 '>
                                <p>Follow Us</p>
                            </div>
                            <div className=" flex gap-5 p-5">
                                <FaFacebookF />
                                <FaInstagram />
                                <FaTwitter />
                                <FaPinterestP />
                            </div>
                        </div>
                        <div className="right text-[14px]">
                            <h1>Login/Register</h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Top_Navbar
