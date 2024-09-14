import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";


import mainBgSlider from '../image/slider_bg_31.png'

import proImg1 from '../image/asset 24.png'
import proImg2 from '../image/asset 25.png'
import proImg3 from '../image/asset 26.png'
import proImg4 from '../image/asset 27.png'

import Slider_Content from './Slider_Content'


function Main_slider() {
  return (
    <div className='main-slider-bg' style={{background: `url(${mainBgSlider})`}} >
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"Coverflow"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
        modules={[
            Autoplay,
            EffectFade,
            Navigation,
            Pagination,
          ]}
        >
        <SwiperSlide>
            <Slider_Content
                textOne="Entire Big Collection"
                bigTitle1="SHOP WISE WITH"
                bigTitle2="PRICE COMPARISONS"
                btn1="View Collection"
                btn2="Category"
                imgLeft={proImg1}
                imgRight={proImg2}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Slider_Content
                textOne="Entire Big Collection"
                bigTitle1="SHOP WISE WITH"
                bigTitle2="PRICE COMPARISONS"
                btn1="View Collection"
                btn2="Category"
                imgLeft={proImg3}
                imgRight={proImg4}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Slider_Content
                textOne="Entire Big Collection"
                bigTitle1="SHOP WISE WITH"
                bigTitle2="PRICE COMPARISONS"
                btn1="View Collection"
                btn2="Category"
                imgLeft={proImg1}
                imgRight={proImg2}
            />
        </SwiperSlide>
        </Swiper>
    
    </div>
  )
}

export default Main_slider
