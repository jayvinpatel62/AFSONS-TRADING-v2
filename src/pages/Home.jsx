
import React from 'react'
import Top_Navbar from '../componets/Top_Navbar'
import Footer from '../componets/Footer'
import Main_Navbar from '../componets/logo_bar'
// import ProductDetails from '../componets/ProductDetails'
// import Main_Footer from '../componets/Main_Footer'
// import Image_side from '../componets/Image_side'
import Offer_product from '../componets/Offer_product'
import Serach_bar from '../componets/Category/Serach_bar'
// import Top_Categories_Week from '../componets/Top_Categories_Week'
import Sale_page from '../componets/Sale_page'
// import Women_Clothing from '../componets/Women_Clothing'
import Colletion from '../componets/Colletion'
import Trading_product from '../componets/Trading_product'
import Main_slider from '../componets/Main_slider'
import Exclusive_ImgContent from '../componets/Exclusive_ImgContent'
import Blog_Slider from '../componets/Blog_Slider'
import Testimonials from '../componets/Testimonials'
import { Container } from '@mui/material'

// import cashbackImg from '../image/ads/electronic-store-promotional-banner-fwidth-2.jpg'
import adBannerImg1 from '../image/ads/electronic-store-promotional-banner-1.jpg'
import adBannerImg2 from '../image/ads/electronic-store-promotional-banner-2.jpg'
import adBannerImg3 from '../image/ads/banner-campaign-3-1.png'
import adBannerImg4 from '../image/ads/banner-campaign-4-1.png'

import FooterNew from '../componets/FooterNew'
import FormQoutation from '../componets/FormQoutation'
import AboutHome from '../componets/AboutHome'
import TrustedCount from '../componets/TrustedCount'
import Main_Footer from '../componets/Main_Footer'
import Newsletter from '../componets/Newsletter'
import Partners from '../componets/Partners'
const Home = () => {
    return (
        <>
            <Top_Navbar />
            <Main_Navbar />
            {/* <Serach_bar /> */}
            <Main_slider/>
            <Offer_product />

            {/* <ProductDetails /> */}
            <AboutHome/>
            <Exclusive_ImgContent/>
           
            <Blog_Slider/>

           
            <Testimonials/>
            {/* <div className='bg-slate-200 py-20'>
                <Container>
                    <img src={cashbackImg} alt="" />
                </Container>
            </div> */}
            
            <TrustedCount/>
            <div className='pb-[100px]'>
                <Container>
                    <div className='flex items-stretch justify-between gap-8'>
                        <img src={adBannerImg3} alt="" className='mx-w-full' />
                        <img src={adBannerImg4} alt="" className='mx-w-full' />
                    </div>
                </Container>
            </div>
            {/* <div className='pb-[100px]'>
                <Container>
                    <div className='flex gap-3'>
                        <img src={adBannerImg1} alt="" className='w-full' />
                        <img src={adBannerImg2} alt="" className='w-full' />
                    </div>
                </Container>
            </div> */}
            <FormQoutation />
           
            {/* <Top_Categories_Week /> */}
            {/* <Sale_page /> */}
            {/* <Women_Clothing /> */}
            {/* <Colletion />  */}
            {/* <Trading_product /> */}
            {/* <Image_side /> */}
            {/* <FooterNew/> */}
            <Partners />
            <Newsletter />
            <Main_Footer/>
            <Footer />
        </>
    )
}

export default Home
